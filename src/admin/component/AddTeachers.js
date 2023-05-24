import React from "react";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddTeacher from "./AddTeacher";

export default function Admin({}) {
  let history = useNavigate();
  /*useEffect(()=>{
    if(!(localStorage.getItem('user_id'))){
      history('/');
    }
  },[])*/
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
