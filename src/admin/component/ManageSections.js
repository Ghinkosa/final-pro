import React, { useEffect } from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import { ManageSection } from "./ManageSection";
import { useNavigate } from "react-router-dom";

export default function ManageSections() {
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
    <div>
      <NavBar className="fixed-top" />
      <SideMenu active="4" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <ManageSection />
      </div>
    </div>
  );
}
