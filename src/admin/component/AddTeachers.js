import React from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddTeacher from "./AddTeacher";

export default function Admin({}) {
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
      <SideMenu active="2" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <AddTeacher />
      </div>
    </div>
  );
}
