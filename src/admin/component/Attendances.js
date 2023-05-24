import React from "react";
import Attendance from "./Attendance";
import SideMenu from "./SideMenu";
import NavBar from "./NavBar";

export default function Attendances() {
  return (
    <div className="">
      <NavBar />
      <SideMenu active="5" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <Attendance />
      </div>
    </div>
  );
}
