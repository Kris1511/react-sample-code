import React from "react";

const Forminput = ({
  name,
  text = "text",
  placeholder,
  label,
  // value,
  // handleChange,
  register,
  errors,
  required,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-3">
        {label}
        {required ? <span className="text-red-600 ml-1">*</span> : ""}
      </label>
      <input
        name={name}
        className="px-3 py-2 rounded w-full outline-none"
        // value={value}
        {...register}
        // onChange={handleChange}
        placeholder={placeholder}
      />
      {errors && <small className="text-red-600">{errors.message}</small>}
    </div>
  );
};

export default Forminput;
