import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Admin/Sidebar";
import TopBar from "../../../components/Admin/TopBar";

export default function Layout(){
    return (
        <>
        <TopBar />
        <div className='container'>
            <Sidebar/>
            <div className="mainContentWrapper">
            <Outlet />
            </div>
        </div>
        </>
    )
}