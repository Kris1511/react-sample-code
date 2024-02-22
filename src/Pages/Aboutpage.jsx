import { useParams } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import Accordian from "../Components/Accordian";

const Aboutpage = () => {
  const { name } = useParams();
  // console.log(param);

  return (
    <div className="m-10">
      <h4 className="text-2xl font-semibold mb-8">
        Welcome {name ? name : "Guest"}!
      </h4>
      <div className="bg-white rounded p-10 flex space-x-10 mb-3">
        <img
          src="https://cdn.mos.cms.futurecdn.net/XWHWS5Y697Ddh7Dw3QCwW.jpg"
          alt="space logo"
          className="w-20 rounded"
        />
        <div className="space-y-1">
          <h4 className="text-xl font-semibold">
            The first person on the moon was Neil Armstrong.
          </h4>
          <p className="text-gray-700">
            The first ever man to step foot on the moon was Neil Armstrong. It
            was during the Apollo 11 mission where they were going to attempt to
            land two men on the moon.
          </p>
        </div>
      </div>
      <div className="bg-white p-10 rounded">
        <h4 className="font-semibold">hi</h4>
        <Accordian
          title={"Is your blog is free for to see the post"}
          desc={"Yes, it is."}
        />

        <Accordian title="Hi there" desc="Yes, i'm fine" />

        <Accordian title={"Responsive Design"}>
          <p>
            Every utility class in Tailwind can be applied conditionally at
            different breakpoints, which makes it a piece of cake to build
            complex responsive interfaces without ever leaving your HTML.
          </p>
          <img
            src="https://img.freepik.com/premium-photo/cute-boy-cartoon-character-3d_729089-137.jpg"
            alt="cartoon logo"
            className="w-40 rounded"
          />
        </Accordian>

        {/* <div className="">
          <div
            className="bg-yellow-200 p-5 rounded-t flex items-center justify-between cursor-pointer"
            onClick={changeIcon}
          >
            <h4>hii hello guys</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className={showIcon ? "rotate-180" : ""}
            >
              <path fill="currentColor" d="m7 10l5 5l5-5z" />
            </svg>
          </div>
          <div
            className={
              "bg-pink-100 p-5 rounded-b " + (showIcon ? "block" : "hidden")
            }
          >
            <h4>good evening</h4>
          </div>
        </div>

        <div className="my-5">
          <div className="bg-black text-white p-5 rounded-t flex items-center justify-between cursor-pointer" onClick={chandruClick}>
            <h4>chandru click</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className={clickChandru ? "rotate-180" : ""}
            >
              <path
                fill="currentColor"
                d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
              />
            </svg>
          </div>
          <div className={"bg-gray-300 p-5 rounded-b " + (clickChandru ? "block" : "hidden" )}>
            <h4>It's clicked</h4>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Aboutpage;
