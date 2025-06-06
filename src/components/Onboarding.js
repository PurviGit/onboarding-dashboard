// src/components/Onboarding.jsx
import React, { useState, useEffect } from "react";
import Step1 from "./onboarding/Step1";
import Step2 from "./onboarding/Step2";
import Step3 from "./onboarding/Step3";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    size: "",
    theme: "",
    layout: "",
  });
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    if (step === 1) return formData.name && formData.email;
    if (step === 2)
      return formData.company && formData.industry && formData.size;
    if (step === 3) return formData.theme && formData.layout;
    return false;
  };

  const nextStep = () => {
    if (validateFields()) setStep((prev) => prev + 1);
    else alert("Please fill all required fields.");
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (validateFields()) {
      localStorage.setItem("userData", JSON.stringify(formData));
      setTheme(formData.theme); // set selected theme
      navigate("/dashboard");
    } else {
      alert("Please complete all fields.");
    }
  };

  const steps = [
    <Step1 formData={formData} handleChange={handleChange} />,
    <Step2 formData={formData} handleChange={handleChange} />,
    <Step3 formData={formData} handleChange={handleChange} />,
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ">
      <div className="absolute top-4 right-6">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 shadow"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-all duration-500 dark:text-white ">
        <div className="mb-6">
          <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded dark:text-black ">
            <div
              className="h-full bg-blue-500 rounded "
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
        {steps[step - 1]}
        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
