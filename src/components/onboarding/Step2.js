// components/onboarding/Step2.jsx
import React from "react";

const Step2 = ({ formData, handleChange }) => (
  <div className="space-y-4 text-center">
    <h2 className="text-xl font-semibold">Business Information</h2>
    <input
      type="text"
      name="company"
      placeholder="Company Name"
      value={formData.company}
      onChange={handleChange}
      className="w-full border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
      required
    />
    <input
      type="text"
      name="industry"
      placeholder="Industry"
      value={formData.industry}
      onChange={handleChange}
      className="w-full border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
      required
    />
    <input
      type="text"
      name="size"
      placeholder="Company Size"
      value={formData.size}
      onChange={handleChange}
      className="w-full border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
      required
    />
  </div>
);

export default Step2;
