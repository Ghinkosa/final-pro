import React from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import Subject from "./Subject";

export default function ManageSections() {
  return (
    <div>
      <NavBar className="" />
      <SideMenu active="6" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <Subject />
      </div>
    </div>
  );
}
