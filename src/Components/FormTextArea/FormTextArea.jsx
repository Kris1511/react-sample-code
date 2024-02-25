import React from "react";

const Forminput = ({name, placeholder, label, register, errors, required}) => {
  return (
      <div>
        <label htmlFor={name} className="block mb-3">
          {label} 
          {required ? <span className="text-red-600 ml-1">*</span> : ""}
        </label>
        <textarea
          name={name}
          className="px-3 py-2 rounded w-full outline-none"
          placeholder={placeholder}
          {...register}
        />
        {errors && <small className="text-red-700">{errors.message}</small>}
      </div>
  );
};

export default Forminput;
