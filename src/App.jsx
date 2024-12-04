import Navbar from "./components/navigation/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex overflow-hidden flex-col items-center w-full">
        <Navbar className="lg:mt-[60px] lg:w-[48%] mt-[20px]  w-full" />
        <Outlet />
      </div>
    </>
  );
}

export default App;
