import React from "react";
import { DashBoard } from "./component/DashBoard";
import NavBar from "./component/NavBar";
import SideMenu from "./component/SideMenu";

export default function Admin() {
  return (
    <div className="">
      <NavBar />
      <SideMenu />
      <div className="admin mleft-for-dashbord">
        <DashBoard />
      </div>
    </div>
  );
}
