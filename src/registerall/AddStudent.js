import React from "react";
import NavBar from "./component/NavBar";
import TopBar from "./component/TopBar";
import StudRegister from "./component/StudRegister";
export default function AddStudent() {
  return (
    <div>
      <NavBar active="2"></NavBar>
      <div className="mleft-for-dashbord-reg for-color">
        <TopBar title="Add New Student"></TopBar>
        <StudRegister></StudRegister>
      </div>
    </div>
  );
}
