import React from "react";
import Assessment from "./component/Assessment";
import Footer from "../home/Footer";
import NavBar from "./component/NavBar";

export default function AssessPage() {
  return (
    <div>
      <NavBar active="2"></NavBar>
      <div className="family-bg ">
        <Assessment />
      </div>
    </div>
  );
}
