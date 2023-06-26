import React from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import ManageClass from "./ManageClass";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const ManageClasses = () => {
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
      <SideMenu active="3" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <ManageClass />
      </div>
    </div>
  );
};
