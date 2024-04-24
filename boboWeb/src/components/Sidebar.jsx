import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/BOBO.png";
import { BsWindowSidebar } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCarFrontFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { LuGripHorizontal } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { GiCash } from "react-icons/gi";
import { Outlet } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <div>
        <button
          onClick={toggleSidebar}
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <span className="sr-only">Open sidebar</span>
          <LuGripHorizontal className="w-6 h-6" />
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#101223] transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <button
              onClick={toggleSidebar}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-300 focus:outline-none lg:hidden"
            >
              <RxCross2 />
            </button>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                </a>
              </li></div>
              

            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="p-4 sm:ml-64">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
