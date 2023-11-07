import classNames from "classnames";
import React from "react";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";
interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const DashboardLayout = ({ children, className }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <SideBar />
        <main className={classNames("flex-1 overflow-y-auto", className)}>
          <Navbar />
          <div className="bg-[#E3E3E3] min-h-[calc(100vh-66px)]   px-[30px] py-[30px] ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
