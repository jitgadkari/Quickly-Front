import React from "react";
import Card from "../components/Card";
import { FaPlus } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";


const DashBoard:React.FC=()=>{
return (
    <div className="w-full h-full pl-8">
      <div className="mt-10 ml-4">
        <h1 className="font-bold text-2xl">Welcome Steve!</h1>
      </div>
      <section className=" flex flex-col ">
        <Card title="Scenarios">
          <div className=" flex  justify-start items-center w-full h-full px-6 py-4 space-x-20">
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
        <Card title="Scenarios">
          <div className=" flex  justify-start items-center w-full h-full px-6 py-4 space-x-20">
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
        <Card title="Scenarios">
          <div className=" flex  justify-start items-center w-full h-full px-6 py-4 space-x-20">
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