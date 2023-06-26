import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CreateAssess from "./CreateAssess";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function CreateAssessment() {
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
      <SideBar active="3"></SideBar>
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <CreateAssess />
      </div>
    </div>
  );
}
