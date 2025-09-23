import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

type Props = {};

function AppLayout({}: Props) {
  return (
    <div className="bg-base-100 grid min-h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Sidebar />
      <Header />
      <div className="bg-base-100 overflow-x-auto p-10">
        <div className="mx-auto max-w-screen-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
