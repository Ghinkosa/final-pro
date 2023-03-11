import React, { useState } from "react";
import photo from "./images/photo1.jpg";
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
          <div className="col-sm-auto min-vh-100 bg-white">
            <div className="list">
              <div className="logo">
                <img
                  src={photo}
                  alt="no image"
                  className="logo-1 d-none d-sm-inline"></img>
                <img
                  src={photo}
                  alt="no image"
                  className="logo-2 d-block d-sm-none"></img>
                <div className="d-flex justify-content-center">
                  <div className="name text-light  d-none d-sm-inline">
                    Galata Hinkosa
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="text-secondary d-none d-sm-inline fs-1">
                    Admin
                  </div>
                </div>
              </div>
            </div>
            <ul className="all-list">
              {
                active==1 ? (<li className="list">
                <a className="nav-link">
                  <i className="pb-2">
                    <FaHome size={30} color="#ff6b00" />
                  </i>
                  <span className=" ms-3 d-none d-sm-inline fs-3 Actives">
                    Dashbord
                  </span>
                </a>
              </li>):
              <li className="list" onClick={()=>activator(1)}>
                <a className="nav-link">
                  <i className="">
                    <FaHome size={30} />
                  </i>
                  <span className=" ms-3 d-none d-sm-inline fs-3 ">
                    Dashbord
                  </span>
                </a>
              </li>
                  }
              {
                active==2 ?( <li className="list">
                <a className="nav-link">
                  <i className="">
                    <FaRegPaperPlane size={30} color="#ff6b00"/>
                  </i>
                  <span className="ms-3 d-none d-sm-inline fs-3 Actives">
                    Message
                  </span>
                </a>
              </li>):
              <li className="list" onClick={()=>activator(2)}>
                <a className="nav-link">
                  <i className="">
                    <FaRegPaperPlane size={30} />
                  </i>
                  <span className="ms-3 d-none d-sm-inline fs-3">
                    Message
                  </span>
                </a>
              </li>
             }
             {
              active==3 ?(   <li className="list" >
              <a className="nav-link ">
                <i className="">
                  <FaUser size={30} color="#ff6b00"/>
                </i>
                <span className="ms-3 d-none d-sm-inline fs-3 Actives">
                  Users
                </span>
              </a>
            </li>):
              <li className="list" onClick={()=>activator(3)}>
                <a className="nav-link ">
                  <i className="">
                    <FaUser size={30} />
                  </i>
                  <span className="ms-3 d-none d-sm-inline fs-3">
                    Users
                  </span>
                </a>
              </li>
             } 
            {
            active==4 ?(  <li className="list">
              <a className="nav-link">
                <i className="">
                  <FaBook size={30} color="#ff6b00" />
                </i>
                <span className="ms-3 d-none d-sm-inline fs-3 Actives">
                   Marks
                </span>
              </a>

            </li>):
              <li className="list" onClick={()=>activator(4)}>
                <a className="nav-link">
                  <i className="">
                    <FaBook size={30}  />
                  </i>
                  <span className="ms-3 d-none d-sm-inline fs-3">
                    Marks
                  </span>
                </a>
              </li>
                }

              {active==5 ?(
                              
              <li className="list">
              <a className="nav-link">
                <i className="">
                  <FaRegHandPaper size={30} color="#ff6b00"  />
                </i>
                <span className="ms-3 d-none d-sm-inline  fs-3 Actives">
                  Attendance
                </span>
              </a>
            </li>
              ):
              
              
              <li className="list" onClick={()=>activator(5)}>
                <a className="nav-link">
                  <i className="">
                    <FaRegHandPaper size={30}  />
                  </i>
                  <span className="ms-3 d-none d-sm-inline  fs-3 ">
                    Attendance
                  </span>
                </a>
              </li>
}
{
  active==6 ?(
    <li className="list">
    <a className="nav-link ">
      <i className="d-sm-inline">
        <FaRegCalendarAlt size={30} color="#ff6b00" />
      </i>
      <span className="ms-3 d-none d-sm-inline  fs-3 Actives">
        Schedule
      </span>
    </a>
  </li>
  ):
              <li className="list" onClick={()=>activator(6)}>
                <a className="nav-link ">
                  <i className="d-sm-inline">
                    <FaRegCalendarAlt size={30} />
                  </i>
                  <span className="ms-3 d-none d-sm-inline  fs-3">
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
