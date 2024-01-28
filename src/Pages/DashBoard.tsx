import React, { useContext } from "react";
import Card from "../components/Card";
import { FaPlus } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { SideBarContext } from "../contexts/SideBarContext";


const DashBoard:React.FC=()=>{
  const sideBarContxtValue = useContext(SideBarContext);
return (
  <div className={`w-full h-full px-8 mt-16 sm:mt-2 ${ sideBarContxtValue.toggleNav ? "ml-16 ":"sm:ml-16"} `}>
  <div className=" ml-8">
    <h1 className="font-bold text-2xl">Welcome Steve!</h1>
  </div>
  <section className=" w-full h-full flex flex-col ">
    <Card title="Scenarios">
      <div className=" flex flex-col sm:flex-row justify-center sm:justify-evenly items-center w-full h-full px-6 py-4 ">
        <div className=" flex flex-col justify-center items-center ">
          <FaPlus className="text-8xl " />
          <h3 className=" font-semibold pt-4">ADD</h3>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <AiOutlineReload className="text-8xl" />
          <h3 className=" font-semibold pt-4">Load Previous</h3>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <FaStar className="text-8xl" />
          <h3 className=" font-semibold pt-4">Bookmarks</h3>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <IoMenu className="text-8xl" />
          <h3 className=" font-semibold pt-4">Browse All</h3>
        </div>
      </div>
    </Card>
   

   
  </section>
</div>
  
)
}

export default DashBoard;