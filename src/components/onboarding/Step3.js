// components/onboarding/Step3.jsx
import React from "react";

const Step3 = ({ formData, handleChange }) => (
  <div className="space-y-4 text-center">
    <h2 className="text-xl font-semibold">Preferences</h2>
    <select
      name="theme"
      value={formData.theme}
      onChange={handleChange}
      className="w-full border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
      required
    >
      <option value="">Select Theme</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <select
      name="layout"
      value={formData.layout}
      onChange={handleChange}
      className="w-full border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
      required
    >
      <option value="">Select Layout</option>
      <option value="grid">Grid</option>
      <option value="list">List</option>
    </select>
  </div>
);

export default Step3;
