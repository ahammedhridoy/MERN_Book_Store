import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div>
        <SideBar />
      </div>
      <Outlet />
      {/* <div className='w-full h-screen overflow-y-hidden'>
        <div className='w-full h-screen bg-blue-500' id='user'></div>
        <div className='h-screen bg-slate-300' id='inbox'>inbox</div>
      </div> */}
    </div>
  );
};
