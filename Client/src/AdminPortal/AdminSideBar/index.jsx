import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Menus from "../Data/Menus";

const SideBar = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex">
            <div
                className={` ${open ? "w-64" : "w-20 "
                    } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src="../../src/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="../../src/assets/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Admin
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <NavLink to={Menu.to} key={index}>
                            <li
                                key={index}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} 
               `}
                            >
                                <img src={`../../src/assets/${Menu.src}.png`} />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </li>
                        </NavLink>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 p-7 overflow-scroll">
                <Outlet />
            </div>
        </div>
    );
};
export default SideBar;