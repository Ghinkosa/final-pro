import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import DetialAttendance from "./DetialAttendance";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AttendDetial() {
  let history = useNavigate();
  const auth = () => {
    if (localStorage.getItem("role") != "teacher") {
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
    <div>
      <NavBar></NavBar>
      <SideBar active="2"></SideBar>
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <DetialAttendance />
      </div>
    </div>
  );
}
