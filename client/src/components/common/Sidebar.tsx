import { useState } from "react";
import home from "../../assets/icons/house-solid.svg"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="min-h-screen relative">
            {/* Sidebar Toggle Button */}
            <span
                className="absolute text-4xl top-5 left-4 cursor-pointer"
                onClick={toggleSidebar}
            >
                <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>

            {/* Sidebar */}
            <div
                className={`sidebar bg-gray-200 fixed top-0 bottom-0 p-2 w-[300px] mt-14 overflow-y-auto text-center duration-300 ${isOpen ? "left-0" : "-left-full"
                    } lg:left-0`}
            >
                <div className="text-gray-100 text-xl">
                    {/* Header */}
                    {/* <div className="p-2.5 mt-1 flex items-center">
                        <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                        <h1 className="font-bold text-gray-900 text-[15px] ml-3">TailwindCSS</h1>
                        <i
                            className="bi bi-x cursor-pointer ml-28 lg:hidden"
                            onClick={toggleSidebar}
                        ></i>
                    </div> */}
                    {/* <div className="my-2 bg-gray-600 h-[1px]"></div> */}
                </div>

                {/* Menu Items */}
                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                >
                    {/* <i className="bi bi-house-door-fill"></i> */}
                   <img src={home} width={20} alt="" />
                    <span className="text-[15px] ml-4 text-gray-900 font-bold">Home</span>
                </div>
                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                >
                    <i className="bi bi-bookmark-fill"></i>
                    <span className="text-[15px] ml-4 text-gray-900 font-bold">Bookmark</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

