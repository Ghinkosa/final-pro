import React from "react";
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
  return (
    <div className="sticky-top position-absolute">
      <div className="container-fluid">
        <div className="row">
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
                  <div className="text-secondary d-none d-sm-inline fs-1">Admin</div>
                </div>
              </div>
            </div>
            <ul className="all-list">
              <li className="list">
                <a className="nav-link">

                  <span className="ms-1 me-5 d-none d-sm-inline text-dark fs-3 ">
                    Dashbord
                  </span>
                  <i className="m-auto">
                    <FaHome size={30} color="black" />
                  </i>
                </a>
              </li>
              <li className="list">
                <a className="nav-link">
                 
                  <span className=" me-5 ms-1 d-none d-sm-inline text-dark fs-3">Message</span>
                  <i className="me-3">
                    <FaRegPaperPlane size={30} color="black" />
                  </i>
                </a>
              </li>
              <li className="list">
                <a className="nav-link ">
                 
                  <span className="ms-1 me-5 d-none d-sm-inline text-dark fs-3">
                    Users
                  </span>
                  <i className="me-3">
                    <FaUser size={30} color="black" />
                  </i>
                </a>
              </li>
              <li className="list">
                <a className="nav-link">
                  <span className="ms-1 me-5 d-none d-sm-inline text-dark fs-3">
                    Marks
                  </span>
                  <i className="me-3">
                    <FaBook size={30} color="black" />
                  </i>
                </a>
              </li>
              <li className="list">
                <a className="nav-link">
                  <span className="ms-1 me-5 d-none d-sm-inline text-dark fs-3">
                    Attendance
                  </span>
                  <i className="me-3">
                    <FaRegHandPaper size={30} color="black" />
                  </i>
                </a>
              </li>
              <li className="list">
                <a className="nav-link ">

                  <span className="me-5 ms-1 d-none d-sm-inline text-dark fs-3">
                    Schedule
                  </span>
                  <i className="me-3 ms-4 m-auto d-sm-inline">
                    <FaRegCalendarAlt size={30} color="black" />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
