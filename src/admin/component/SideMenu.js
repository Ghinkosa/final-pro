import React, { useState } from "react";
import photo from "./images/Logo.png";
import {
  FaHome,
  FaRegPaperPlane,
  FaUser,
  FaBook,
  FaRegCalendarAlt,
  FaRegHandPaper,
} from "react-icons/fa";
export default function SideMenu() {

  const [active,setActive]=useState(1);
  const activator=(a)=>{
    setActive(a);
  }
  return (
    <div className="sticky-top position-absolute">
      <div className="container-fluid">
        <div
          className="row 
        ">
          <div className="col-sm-auto min-vh-100 bg-secondary">
            <div className="list pt-5 mb-2">
              <div className="logo">
                <img
                  src={photo}
                  alt="no image"
                  className="logo-1 d-none d-sm-inline"></img>
                <img
                  src={photo}
                  alt="no image"
                  className="logo-2 d-block d-sm-none"></img>
                <strong className="d-flex justify-content-center my-2">
                  <strong className="name text-light  d-none d-sm-inline fs-3 ">
                    SAFA
                  </strong>
                </strong>
                <div className="d-flex justify-content-center">
                  <div className="text-secondary d-none d-sm-inline fs-1">
                    Admin
                  </div>
                </div>
              </div>
            </div>
            <ul className="all-list">
              {
                active==1 ? (<li className="list Actives">
                <a className="nav-link">
                  <i className="pb-2">
                    <FaHome size={30} color="#ff6b00" />
                  </i>
                  <span className=" ms-3 d-none d-sm-inline">
                    Dashbord
                  </span>
                </a>
              </li>):
              <li className="list" onClick={()=>activator(1)}>
                <a className="nav-link">
                  <i className="">
                    <FaHome size={30} color="white" />
                  </i>
                  <span className=" ms-3 d-none d-sm-inline text-light">
                    Dashbord
                  </span>
                </a>
              </li>
                  }
              {
                active==2 ?( <li className="list  Actives">
                <a className="nav-link">
                  <i className="">
                    <FaRegPaperPlane size={30} color="#ff6b00"/>
                  </i>
                  <span className="ms-3 d-none d-sm-inline ">
                    Message
                  </span>
                </a>
              </li>):
              <li className="list" onClick={()=>activator(2)}>
                <a className="nav-link">
                  <i className="">
                    <FaRegPaperPlane size={30} color="white"/>
                  </i>
                  <span className="ms-3 d-none d-sm-inline text-light ">
                    Message
                  </span>
                </a>
              </li>
             }
             {
              active==3 ?(   <li className="list Actives" >
              <a className="nav-link ">
                <i className="">
                  <FaUser size={30} color="#ff6b00"/>
                </i>
                <span className="ms-3 d-none d-sm-inline">
                  Users
                </span>
              </a>
            </li>):
              <li className="list" onClick={()=>activator(3)}>
                <a className="nav-link ">
                  <i className="">
                    <FaUser size={30} color="white"/>
                  </i>
                  <span className="ms-3 d-none d-sm-inline text-light">
                    Users
                  </span>
                </a>
              </li>
             } 
            {
            active==4 ?(  <li className="list Actives">
              <a className="nav-link">
                <i className="">
                  <FaBook size={30} color="#ff6b00" />
                </i>
                <span className="ms-3 d-none d-sm-inline">
                   Marks
                </span>
              </a>

            </li>):
              <li className="list" onClick={()=>activator(4)}>
                <a className="nav-link">
                  <i className="">
                    <FaBook size={30} color="white" />
                  </i>
                  <span className="ms-3 d-none d-sm-inline text-light">
                    Marks
                  </span>
                </a>
              </li>
                }

              {active==5 ?(
                              
              <li className="list Actives">
              <a className="nav-link">
                <i className="">
                  <FaRegHandPaper size={30} color="#ff6b00"  />
                </i>
                <span className="ms-3 d-none d-sm-inline">
                  Attendance
                </span>
              </a>
            </li>
              ):
              
              
              <li className="list" onClick={()=>activator(5)}>
                <a className="nav-link">
                  <i className="">
                    <FaRegHandPaper size={30} color="white" />
                  </i>
                  <span className="ms-3 d-none d-sm-inline  text-light ">
                    Attendance
                  </span>
                </a>
              </li>
}
{
  active==6 ?(
    <li className="list Actives">
    <a className="nav-link ">
      <i className="d-sm-inline">
        <FaRegCalendarAlt size={30} color="#ff6b00" />
      </i>
      <span className="ms-3 d-none d-sm-inline">
        Schedule
      </span>
    </a>
  </li>
  ):
              <li className="list" onClick={()=>activator(6)}>
                <a className="nav-link ">
                  <i className="d-sm-inline">
                    <FaRegCalendarAlt size={30} color="white" />
                  </i>
                  <span className="ms-3 d-none d-sm-inline text-light ">
                    Schedule
                  </span>
                </a>
              </li>
}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
