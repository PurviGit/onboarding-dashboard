import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Onboarding from "./components/Onboarding";
import Dashboard from "./components/Dashboard";

function ThemeManager() {
  const location = useLocation();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const isDashboard = location.pathname === "/dashboard";

    if (isDashboard && userData?.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ThemeManager />
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
