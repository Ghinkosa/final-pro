import React, { useEffect } from "react";
import Attendance from "./Attendance";
import SideMenu from "./SideMenu";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function Attendances() {
  let history = useNavigate();
  const auth = () => {
    if (localStorage.getItem("role") != "admin") {
      history("/anAuthenticated");
    }
  };

  useEffect(() => {
    const getPost = async () => {
      auth();
    };
    getPost();
  }, []);
  return (
    <div className="">
      <NavBar />
      <SideMenu active="5" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <Attendance />
      </div>
    </div>
  );
}
