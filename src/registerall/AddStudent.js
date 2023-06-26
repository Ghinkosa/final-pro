import React from "react";
import NavBar from "./component/NavBar";
import TopBar from "./component/TopBar";
import StudRegister from "./component/StudRegister";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function AddStudent() {
  let history = useNavigate();
  const auth = () => {
    if (localStorage.getItem("role") != "register") {
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
      <NavBar active="2"></NavBar>
      <div className="mleft-for-dashbord-reg for-color">
        <TopBar title="Add New Student"></TopBar>
        <StudRegister></StudRegister>
      </div>
    </div>
  );
}
