import React from "react";
import NavBar from "./component/NavBar";
import TopBar from "./component/TopBar";
import BottomBar from "./component/BottomBar";
import StudList from "./component/StudList";
export default function Registerall() {
  return (
    <div>
      <NavBar active="1"></NavBar>
      <div className="mleft-for-dashbord-reg for-color">
        <TopBar title="Students"></TopBar>
        <BottomBar></BottomBar>
        <StudList></StudList>
      </div>
    </div>
  );
}
