import React from "react";
import NavBar from "./component/NavBar";
import TopBar from "./component/TopBar";
import BottomBar from "./component/BottomBar";
import StudList from "./component/StudList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Registerall() {
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
      <NavBar active="1"></NavBar>
      <div className="mleft-for-dashbord-reg for-color">
        <TopBar title="Students"></TopBar>
        <BottomBar></BottomBar>
        <StudList></StudList>
      </div>
    </div>
  );
}
