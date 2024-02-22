import React, { useState } from "react";
import Forminput from "../Components/FormInput/Forminput";
import Formbutton from "../Components/FormButton/Formbutton";
import FromTextArea from "../Components/FormTextArea/FormTextArea.jsx";

const Messagepage = () => {
  const [state, setState] = useState({ fullName: "", email: "", desc: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const submitFrom = (e) => {
    e.preventDefault()
    alert("submitted successfully");
  }

  return (
    <div className="m-10">
      <h4 className="mb-5 font-semibold text-xl">Message Page</h4>
      {/* {JSON.stringify(state)} */}
      <form action="" onSubmit={submitFrom}>
        <div className="bg-violet-300 rounded p-5">
          <Forminput
            name="fullName"
            label="Full Name"
            placeholder="Enter full name"
            value={state.fullName}
            handleChange={handleInput}
            required
          />
          <Forminput
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={state.email}
            handleChange={handleInput}
            required
          />
          <FromTextArea
            name="desc"
            label="Description"
            placeholder="Enter your description"
            value={state.desc}
            handleChange={handleInput}
            required
          />
          <Formbutton type="Save" />
        </div>
      </form>
    </div>
  );
};

export default Messagepage;
