const Follower = ({id= "Unknown", name = "Unknown", img = "Unknown", role = "Unknown"}) => {
    // console.log(props);
    return ( 
        <div
          className="bg-gray-900 p-10 rounded text-center shadow mb-3 text-white ">
          <img
            src={img}
            alt="cartoon boy"
            className="w-40 h-40 rounded-full mx-auto"
          />
          <div className="mt-5">
            <h4 className="font-semibold text-xl">{name}</h4>
            <small>{role}</small>
          </div>
        </div>
     );
}
 
export default Follower;