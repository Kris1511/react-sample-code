import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
