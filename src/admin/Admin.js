import React from "react";
import { DashBoard } from "./component/DashBoard";
import NavBar from "./component/NavBar";
import SideMenu from "./component/SideMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
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
      <SideMenu active="1" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <DashBoard />
      </div>
    </div>
  );
}
