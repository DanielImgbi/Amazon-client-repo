import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaSearch, FaBars, FaCartPlus } from "react-icons/fa";

const MobileNav = () => {
  return (
    <header className="bg-[#18182e] h-[160px] flex flex-col text-white rounded-none lg:hidden">
      <section className="flex items-center justify-between w-full h-2/6 bg-[#0b0b1f] ">
        <div className="flex items-center justify-center h-full w-36 font-bold text-2xl">
          <FaBars className="mr-2" />
          <span className="pb-2 my-auto">amazon</span>
        </div>
        <div className="flex items-center text-sm font-bold">
          <div>
            Daniel <span></span>
          </div>
          <div className="font-bold flex items-center cursor-pointer px-3">
            <FaCartPlus className="text-3xl text-[hsl(45,100%,68%)] mr-2" />
          </div>
        </div>
      </section>

      <section className=" h-2/6 flex items-center justify-center bg-[#0b0b1f] ">
        <div className=" w-[96%] h-5/6 flex justify-between items-center rounded-md">
          <input
            type="search"
            name="search"
            placeholder="Search Amazon"
            className="w-5/6 h-full px-3 outline-none text-gray-800 rounded-tl-md rounded-bl-md"
          />
          <span className="text-black text h-full w-1/6 flex items-center justify-center font-light bg-[hsl(45,100%,68%)] rounded-tr-md rounded-br-md">
            <FaSearch />
          </span>
        </div>
      </section>

      <section className="h-1/6 bg-[#0b0b1f] flex justify-around overflow-x-scroll font-semibold  ">
        <span className="mx-2 w-[120px] h-full">Deals</span>
        <span className="mx-2 w-[120px] h-full">Amazon Basics</span>
        <span className="mx-2 w-[120px] h-full">Video</span>
        <span className="mx-2 w-[120px] h-full">Buy Again</span>
        <span className="mx-2 w-[120px] h-full">Best Sale</span>
        <span className="mx-2 w-[120px] h-full">New</span>
      </section>

      <section className="h-1/6">
        <div className="flex h-full ">
          <span className="font-light mx-1">
            <GrLocation className="text-lg text-yellow-800" />
          </span>
          <span className="flex items-center justify-between font-semibold cursor-pointer">
            Deliver to Nigeria
          </span>
        </div>
      </section>
    </header>
  );
};

export default MobileNav;
