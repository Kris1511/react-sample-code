import React from "react";
import Follower from "../Components/Follower";
import Teamfollow from "../Data/folower.json";

const Followerpage = () => {
  return (
    <div className="m-10">
      <h4 className="font-semibold text-xl mb-5">Company Employees!</h4>
      <div className="grid grid-cols-3 gap-4">
        {Teamfollow.map((follow) => {
          return (
            <Follower key={follow.id} name={follow.name} img={`${follow.img}`} role={follow.role}/>
          );
        })}
      </div>
    </div>
  );
};

export default Followerpage;
