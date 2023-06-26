import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import FillMark from "./FillMark";
export default function Grade() {
  return (
    <div>
      <NavBar></NavBar>
      <SideBar active="4"></SideBar>
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <FillMark />
      </div>
    </div>
  );
}
