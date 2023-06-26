import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Attendance from "./Attendance";

export default function TeacherAttendance() {
  return (
    <div>
      <NavBar></NavBar>
      <SideBar active="2"></SideBar>
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <Attendance />
      </div>
    </div>
  );
}
