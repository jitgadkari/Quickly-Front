import React from "react";
import { FaUserGear } from "react-icons/fa6";

interface SidebarExtensionProps {}

const SidebarExtension: React.FC<SidebarExtensionProps> = () => {
  return (
    <div
      className={` w-[230px] h-screen  bg-[#D9E4FC] text-black pt-10 pl-4  text-center `}
    >
      <h3 className="font-extrabold">SETTINGS</h3>
      <section className="pt-10 space-y-3 font-semibold">
        <div className="flex flex-row gap-4 justify-start items-center px-2">
          <FaUserGear className="text-red-500 text-2xl" />
          <h3>My Account</h3>
        </div>
        <div className="flex flex-row gap-4 justify-start items-center p-2 ">
          <FaUserGear className="text-red-500 text-2xl" />
          <h3>Security</h3>
        </div>
        <div className="flex flex-row gap-4 justify-start items-center p-2  bg-white ">
          <FaUserGear className="text-red-500 text-2xl " />
          <h3>Organisation</h3>
        </div>
        <div className="flex flex-row gap-4 justify-start items-center p-2 ">
          <FaUserGear className="text-red-500 text-2xl" />
          <h3>Integrations</h3>
        </div>
        <div className="flex flex-row gap-4 justify-start p-2">
          <FaUserGear className="text-red-500 text-2xl" />
          <h3>Configuration</h3>
        </div>
        <div className="flex flex-row gap-4 justify-start p-2">
          <FaUserGear className="text-red-500 text-2xl" />
          <h3>Billing</h3>
        </div>
      </section>
    </div>
  );
};

export default SidebarExtension;
