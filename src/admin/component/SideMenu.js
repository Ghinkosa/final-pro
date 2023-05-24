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
import { Link } from "react-router-dom";
export default function SideMenu(data) {
  const [active, setActive] = useState(data.active);
  const activator = (a) => {
    setActive(a);
  };
  return (
    <div className="sticky-top position-absolute">
      <div className="container-fluid">
        <div
          className="row 
        ">
          <div className="col-sm-auto min-vh-100 bg-dark">
            <div className="list pt-5 mb-2 border-bottom">
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
                  <strong className="name text-light  d-none d-sm-inline fs-3 me-5 ">
                    SAFA
                  </strong>
                </strong>
                <div className="d-flex justify-content-center">
                  <div className="text-dark d-none d-sm-inline fs-1"></div>
                </div>
              </div>
            </div>
            <ul className="all-list">
              {active == 1 ? (
                <li className="list Actives">
                  <Link to="/dashboard" className="nav-link">
                    <i className="pb-2">
                      <FaHome size={30} color="#ff6b00" />
                    </i>
                    <span className=" ms-3 d-none d-sm-inline">Dashbord</span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(1)}>
                  <Link to="/dashboard" className="nav-link">
                    <i className="">
                      <FaHome size={30} color="white" />
                    </i>
                    <span className=" ms-3 d-none d-sm-inline text-light">
                      Dashbord
                    </span>
                  </Link>
                </li>
              )}
              {active == 2 ? (
                <li className="list  Actives">
                  <Link to="/add_Teacher" className="nav-link">
                    <i className="">
                      <FaRegPaperPlane size={30} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline ">
                      Add Teacher
                    </span>
                  </Link>
                </li>
              ) : (
                <li
                  className="list"
                  onClick={() => {
                    activator(2);
                  }}>
                  <Link to="/add_Teacher" className="nav-link">
                    <i className="">
                      <FaRegPaperPlane size={30} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light">
                      Add Teacher
                    </span>
                  </Link>
                </li>
              )}
              {active == 3 ? (
                <li className="list Actives">
                  <Link to="/manage_class" className="nav-link">
                    <i className="">
                      <FaBook size={30} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">
                      Manage Classess
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(3)}>
                  <Link to="/manage_class" className="nav-link">
                    <i className="">
                      <FaBook size={30} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light">
                      Manage Classess
                    </span>
                  </Link>
                </li>
              )}
              {active == 4 ? (
                <li className="list Actives">
                  <Link to="/manage_section" className="nav-link ">
                    <i className="">
                      <FaUser size={30} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">Class</span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(4)}>
                  <Link to="/manage_section" className="nav-link ">
                    <i className="">
                      <FaUser size={30} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light">
                      Class
                    </span>
                  </Link>
                </li>
              )}
              {active == 5 ? (
                <li className="list Actives">
                  <Link to="/attendance" className="nav-link">
                    <i className="">
                      <FaRegHandPaper size={30} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">Attendance</span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(5)}>
                  <Link to="/attendance" className="nav-link">
                    <i className="">
                      <FaRegHandPaper size={30} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline  text-light ">
                      Attendance
                    </span>
                  </Link>
                </li>
              )}
              {active == 6 ? (
                <li className="list Actives">
                  <a className="nav-link ">
                    <i className="d-sm-inline">
                      <FaRegCalendarAlt size={30} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">Schedule</span>
                  </a>
                </li>
              ) : (
                <li className="list" onClick={() => activator(6)}>
                  <a className="nav-link ">
                    <i className="d-sm-inline">
                      <FaRegCalendarAlt size={30} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light ">
                      Schedule
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
