import { useForm } from "react-hook-form";

const Sendpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   console.log(useForm());

  const sendInfo = (data) => {
    console.log("send the data:", data);
  };

  return (
    <div className="m-10">
      <h4 className="mb-5 font-semibold text-xl">Page Message</h4>
      {/* {JSON.stringify(state)} */}
      <div className="bg-violet-300 rounded p-5">
        <form className="my-5 space-y-3" onSubmit={handleSubmit(sendInfo)}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Enter your name"
            className={`bg-gray-200 w-full px-3 py-2 rounded outline-none mb-3 block ${
              errors.fullName ? "border border-red-700" : "border-none"
            }`}
            {...register("fullName", {
              required: "This field is important!",
              minLength: {
                value: 3,
                message: "This field atleast 3 character",
              },
              maxLength: {
                value: 20,
                message: "Character is correct",
              },
            })}
          />
          {errors.fullName && (
            <small className="text-red-500">{errors.fullName.message}</small>
          )}

          <label htmlFor="subject" className="block mb-3">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Enter your subject"
            className="bg-gray-200 w-full px-3 py-2 rounded outline-none mb-3"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <small className="text-red-500">This field is required</small>
          )}

          <label htmlFor="textarea" className="block mb-3">
            Write anything
          </label>
          <textarea
            id="textarea"
            type="text"
            name="para"
            placeholder="Enter your anything"
            className="bg-gray-200 w-full px-3 py-2 rounded outline-none mb-3"
            {...register("para", { required: true })}
          ></textarea>
          <button className="bg-blue-700 px-3 py-2 text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sendpage;
