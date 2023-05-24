import React from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import { ManageSection } from "./ManageSection";

export default function ManageSections() {
  return (
    <div>
      <NavBar />
      <SideMenu active="4" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <ManageSection />
      </div>
    </div>
  );
}
