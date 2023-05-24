import React from "react";
import { DashBoard } from "./component/DashBoard";
import NavBar from "./component/NavBar";
import SideMenu from "./component/SideMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  let history = useNavigate();
  /*useEffect(()=>{
    if(!(localStorage.getItem('user_id'))){
      history('/');
    }
  },[])*/
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
