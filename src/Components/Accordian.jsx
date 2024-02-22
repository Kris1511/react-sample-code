import {useState} from "react";
import PropTypes from 'prop-types';

const Accordian = (props) => {

  const [toggleDown, setToggleDown] = useState(false);

  const changeToggle = () => {
    console.log("expand", toggleDown);
    setToggleDown(!toggleDown);
  };

  return (
    <div className="my-5">
      <div
        className="bg-gray-100 p-5 font-semibold rounded-t flex items-center justify-between hover:bg-gray-200 cursor-pointer"
        onClick={changeToggle}
      >
        <h4>{props.title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className={toggleDown ? "rotate-180" : ""}
        >
          <path
            fill="currentColor"
            d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
          />
        </svg>
      </div>
      <div className={"bg-gray-50 p-5 " + (toggleDown ? "block" : "hidden")}>
        {props.children ? props.children : props.desc}
      </div>
    </div>
  );
};

Accordian.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default Accordian;
