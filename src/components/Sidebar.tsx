import React, { useContext, useState } from "react";
import logo from "../assets/a.jpeg";
import { IoSettings } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { SlLogout } from "react-icons/sl";
import { SideBarContext } from "../contexts/SideBarContext";
import SidebarExtension from "./SidebarExtension";
import { IoMenu } from "react-icons/io5";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const sideBarContxtValue = useContext(SideBarContext);

  return (
    // hidden sm:block md:${sideBarContxtValue.showSideBarExtenison?"w-[370px] ":"w-[140px] "} md:h-screen  md:flex md:flex-row
    <aside
      className={` sm:(sm:h-full sm:w-14  ) w-full h-14 fixed top-0 left-0 bg-[#042C71] text-white flex items-center `}
    >
      <nav className="w-full flex justify-between items-center px-2 sm:hidden">
        <button onClick={sideBarContxtValue.toggleSideNav}>
          <IoMenu className="text-4xl  " />
        </button>
        <button>Logout</button>
      </nav>
      <section
        className={`w-20 bg-[#042C71]  sm:h-full h-1/2 rounded-br fixed top-14 sm:top-0 z-10 
       ${sideBarContxtValue.toggleNav? "flex ":" hidden sm:flex"}  flex-col text-white text-center`}
      >
        <div
          className=" bg-white w-full "
          onClick={sideBarContxtValue.handleShowSidebar}
        >
          <img src={logo} alt="" className="bg-blend-multiply " />
        </div>
        <div
          className=" bg-[#042C71] w-full  py-8 "
          onClick={sideBarContxtValue.handleShowSidebar}
        >
          <IoSettings className="text-4xl mx-auto " />
          <h3 className="font-semibold text-xs pt-2 hidden sm:block ">
            SETTINGS
          </h3>
        </div>
        <div
          className=" bg-[#042C71] text-white w-full  py-8 "
          onClick={sideBarContxtValue.handleShowSidebar}
        >
          <TfiEmail className="text-4xl mx-auto" />
          <h3 className="font-semibold text-xs pt-2 hidden sm:block ">
            UPDATES
          </h3>
        </div>
        <div
          className="bg-[#042C71] w-full  py-8"
          onClick={sideBarContxtValue.handleShowSidebar}
        >
          <SlLogout className="text-4xl mx-auto" />
          <h3 className="font-semibold text-xs pt-2 hidden sm:block  ">
            LOGOUT
          </h3>
        </div>
      </section>
      {/* {sideBarContxtValue.showSideBarExtenison &&  <SidebarExtension/>} */}
      {/* <SidebarExtension/> */}
    </aside>
  );
};

export default Sidebar;
