import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Sun, Moon } from "lucide-react";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Redirect to onboarding if no userData
  useEffect(() => {
    if (!userData) {
      navigate("/onboarding");
    }
  }, [userData, navigate]);

  // Apply theme to <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const chartData = [
    { name: "Mon", value: 30 },
    { name: "Tue", value: 45 },
    { name: "Wed", value: 60 },
    { name: "Thu", value: 40 },
    { name: "Fri", value: 70 },
    { name: "Sat", value: 50 },
    { name: "Sun", value: 20 },
  ];

  if (!userData) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 space-y-6 bg-gray-50 dark:bg-gray-900">
      {/* Header with Toggle */}
      <div className="flex justify-between px-4 md:px-8  items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Welcome, {userData.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Company: {userData.company} | Industry: {userData.industry} | Theme:{" "}
            {userData.theme}
          </p>
        </div>
        <div className="absolute top-4 right-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            title="Toggle Theme"
          >
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow text-center text-lg">
          👥 Team Members: 12
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg shadow text-center text-lg">
          📁 Active Projects: 4
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg shadow text-center text-lg">
          🔔 Notifications: 7
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">📊 Weekly Progress</h2>
        <ResponsiveContainer width={600} height={300}>
          <BarChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme === "dark" ? "#ccc" : "#888"}
            />
            <XAxis dataKey="name" stroke={theme === "dark" ? "#ccc" : "#000"} />
            <YAxis stroke={theme === "dark" ? "#ccc" : "#000"} />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
