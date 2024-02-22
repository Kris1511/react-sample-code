import React from "react";

const Forminput = ({name, placeholder, label, value, handleChange, required}) => {
  return (
      <div>
        <label htmlFor={name} className="block mb-3">
          {label} 
          {required ? <span className="text-red-600 ml-1">*</span> : ""}
        </label>
        <textarea
          name={name}
          className="px-3 py-2 rounded w-full outline-none mb-3"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
  );
};

export default Forminput;
