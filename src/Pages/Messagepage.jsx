import React, { useState } from "react";
import Forminput from "../Components/FormInput/Forminput";
import Formbutton from "../Components/FormButton/Formbutton";
import FromTextArea from "../Components/FormTextArea/FormTextArea.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaFun = z.object({
  fullName: z.string().min(3).max(20),
  email: z.string().email(),
  desc:z.string().min(20).max(100)
})

const Messagepage = () => {
  // this is component based functions
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaFun)
  });

  console.log(useForm());

  // this is normal input functions

  // const [state, setState] = useState({ fullName: "", email: "", desc: "" });

  // const handleInput = (e) => {
  //   const { name, value } = e.target;

  //   setState((state) => ({
  //     ...state,
  //     [name]: value,
  //   }));
  // };

  // const submitFrom = (e) => {
  //   e.preventDefault();
  //   alert("submitted successfully");
  // };

  const sendInfo = (data) => {
    console.log("datas", data);
  };

  return (
    <div className="m-10">
      <h4 className="mb-5 font-semibold text-xl">Message Page</h4>
      {/* {JSON.stringify(state)} */}
      <form action="" onSubmit={handleSubmit(sendInfo)}>
        {" "}
        {/* submitFrom */}
        <div className="bg-violet-300 rounded p-5">
          <Forminput
            name="fullName"
            label="Full Name"
            type="text"
            placeholder="Enter full name"
            register={register("fullName")}
            errors={errors.fullName}
            required
          />
          <Forminput
            name="email"
            label="Email"
            type="text"
            placeholder="Enter your email"
            register={register("email")}
            errors={errors.email}
            required
          />
          <FromTextArea
            name="desc"
            type="text"
            label="Description"
            placeholder="Enter your description"
            register={register("desc")}
            errors={errors.desc}
          />
          <Formbutton type="Save" />
        </div>
      </form>
    </div>
  );
};

export default Messagepage;
