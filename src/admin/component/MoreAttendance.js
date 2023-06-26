import React from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import DetialAttendance from "./DetialAttendance";

export default function MoreAttendance() {
  return (
    <div>
      <NavBar />
      <SideMenu active="5" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <DetialAttendance></DetialAttendance>
      </div>
    </div>
  );
}
