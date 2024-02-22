import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-indigo-500 text-white px-10 py-5 flex items-center justify-between">
      {/* <Link to={"/"} className="font-semibold text-2xl">Poster volger</Link> */}
      <Link to={"/"}>
        <img
          src="https://thumbs.dreamstime.com/b/vlogger-logo-exclusive-design-inspiration-225258850.jpg"
          alt="blogger logo"
          className="w-10 rounded-lg"
        />
      </Link>
      <ul className="flex space-x-5">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Aboutpage"}>About</Link>
        </li>
        <li>
          <Link to={"/Contactpage"}>Contact</Link>
        </li>
        <li>
          <Link to={"/Follower"}>Follower</Link>
        </li>
        <li>
          <Link to={"/Messagepage"}>Message</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
