import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaSearch, FaBars, FaCartPlus } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="bg-[#18182e] h-24  flex-col text-white rounded-none hidden lg:flex">
      <div className="flex items-center justify-between w-full h-4/6 bg-[#0b0b1f] ">
        <div className="flex items-center justify-center h-full w-36 font-bold text-3xl">
          amazon
        </div>

        <div className="flex flex-col items-center justify-center h-full w-28 ">
          <span className="font-light">Deliver to</span>
          <span className="flex items-center justify-between font-semibold cursor-pointer">
            <GrLocation className="text-lg text-yellow-800" /> Nigeria
          </span>
        </div>

        <div className="w-3/6 h-3/4 bg-red-400 flex justify-between rounded-md">
          <select
            name="category"
            id="category"
            className="bg-slate-300  text-black rounded-tl-md rounded-bl-md text-center outline-none"
          >
            <option value="all">All</option>
            <option value="men">Men</option>
          </select>
          <input
            type="search"
            name="search"
            placeholder="Search Amazon"
            className="w-5/6 px-3 outline-none text-gray-800"
          />
          <span className="text-black text h-full w-1/6 flex items-center justify-center font-light bg-[hsl(45,100%,68%)] rounded-tr-md rounded-br-md">
            <FaSearch />
          </span>
        </div>

        <div className=" w-2/6 flex justify-around px-2">
          <div className="bg-none w-1/6  flex items-center justify-center">
            <select name="language" id="" className="bg-[#0b0b1f] ">
              <option value="Eng" className="bg-none">
                EN
              </option>
            </select>
          </div>

          <div className="flex flex-col items-center ">
            <span>Hello, sign in</span>
            <span className="flex items-center justify-between font-semibold cursor-pointer">
              Account & List
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span>Returns</span>
            <span className="flex items-center justify-between font-semibold cursor-pointer">
              & Orders
            </span>
          </div>

          <div className="font-bold flex items-center cursor-pointer">
            <FaCartPlus className="text-4xl text-[hsl(45,100%,68%)] mr-2" />
            Cart
          </div>
        </div>
      </div>

      <div className=" h-2/6 px-3 flex items-center ">
        <div className="flex items-center font-bold text-md mx-2 cursor-pointer">
          <FaBars /> All
        </div>

        <div className="flex items-center text-md mx-2 cursor-pointer">
          Todays's Deals
        </div>

        <div className="flex items-center text-md mx-2 cursor-pointer">
          Customer Service
        </div>

        <div className="flex items-center text-md mx-2 cursor-pointer">
          Registry
        </div>

        <div className="flex items-center text-md mx-2 cursor-pointer">
          Gift Cards
        </div>

        <div className="flex items-center text-md mx-2 cursor-pointer">
          Sell
        </div>
      </div>
    </header>
  );
};

export default Nav;
