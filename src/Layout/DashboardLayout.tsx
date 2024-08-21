import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"



const DashboardLayout = () => {
    return (
        <div className="relative">

            <Header />

            <SideBar />
            
            <Outlet />
        </div>
    )
}

export default DashboardLayout