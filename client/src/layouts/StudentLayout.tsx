import { Outlet } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import Sidebar from "../components/common/Sidebar"

const StudentLayout = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />

            <div className="ml-80">
                <Outlet />
            </div>
        </div>
    );
};

export default StudentLayout