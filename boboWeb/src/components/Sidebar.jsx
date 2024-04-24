import React from "react";
import Logo from "../assets/BOBO.png";
import { BsWindowSidebar } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCarFrontFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { GiCash } from "react-icons/gi";
import { Outlet } from "react-router";

const Sidebar = () => {
  return (
    <>
      <div>
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-[#101223]">
            <ul className="space-y-2 font-medium">

              <li className="flex items-center justify-center py-16">
                <img src={Logo} alt="" />
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-xl  hover:bg-[#0D58A6] group px-10 text-lg"
                >
                  <BsWindowSidebar />
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-xl  hover:bg-[#0D58A6] group px-10 text-lg"
                >
                  <FaRegCircleUser />
                  <span className="ms-3">User</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-xl  hover:bg-[#0D58A6] group px-10 text-lg"
                >
                  <GiSteeringWheel />
                  <span className="ms-3">Drivers</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-xl  hover:bg-[#0D58A6] group px-10 text-lg"
                >
                  <BsCarFrontFill />
                  <span className="ms-3">Rides</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-xl  hover:bg-[#0D58A6] group px-10 text-lg"
                >
                  <GiCash  />
                  <span className="ms-3">Payment</span>
                </a>
              </li>
            
            <div><li className="mt-16">
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-xl  hover:bg-[#0D58A6] group px-10 text-lg"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                </a>
              </li>
              </div>
              

              
              
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
