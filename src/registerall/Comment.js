import React from "react";
import NavBar from "./component/NavBar";
import Comments from "./component/Comments";
import TopBar from "./component/TopBar";
export default function Comment() {
  return (
    <div>
      <NavBar active="4"></NavBar>
      <div className="mleft-for-dashbord-reg for-color">
        <TopBar title="Comment"></TopBar>
        <Comments></Comments>
      </div>
    </div>
  );
}
