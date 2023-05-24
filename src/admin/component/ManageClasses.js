import React from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ManageClass from "./ManageClass";

export const ManageClasses = () => {
  return (
    <div className="">
      <NavBar />
      <SideMenu active="3" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <ManageClass />
      </div>
    </div>
  );
};
