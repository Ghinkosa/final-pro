import React from "react";
import NavBar from "./component/NavBar";
import TopBar from "./component/TopBar";
import StudList from "./component/StudList";
import Announce from "./component/Announce";
export default function Announcement() {
  return (
    <div>
      <NavBar active="3"></NavBar>
      <div className="mleft-for-dashbord-reg for-color">
        <TopBar title="Announcement"></TopBar>
        <Announce></Announce>
      </div>
    </div>
  );
}
