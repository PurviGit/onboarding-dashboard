// components/onboarding/Step1.jsx
import React from "react";

const Step1 = ({ formData, handleChange }) => (
  <div className="space-y-4 text-center">
    <h2 className="text-xl font-semibold ">Personal Information</h2>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
      required
    />
  </div>
);

export default Step1;
