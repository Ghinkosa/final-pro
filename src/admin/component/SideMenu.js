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
                  <div className="text-secondary d-none d-sm-inline">Admin</div>
                </div>
              </div>
            </div>
            <ul className="all-list">
              <li className="list">
                <a className="nav-link">
                  <i className="me-3">
                    <FaHome size={30} color="black" />
                  </i>
                  <span className=" d-none d-sm-inline text-dark ">
                    Dashbord
                  </span>
                </a>
              </li>
              <li className="list">
                <a className="nav-link">
                  <i className="me-3">
                    <FaRegPaperPlane size={30} color="black" />
                  </i>
                  <span className=" d-none d-sm-inline text-dark">Message</span>
                </a>
              </li>
              <li className="list">
                <a className="nav-link ">
                  <i className="me-3">
                    <FaUser size={30} color="black" />
                  </i>
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Users
                  </span>
                </a>
              </li>
              <li className="list">
                <a className="nav-link">
                  <i className="me-3">
                    <FaBook size={30} color="black" />
                  </i>
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Marks
                  </span>
                </a>
              </li>
              <li className="list">
                <a className="nav-link">
                  <i className="me-3">
                    <FaRegHandPaper size={30} color="black" />
                  </i>
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Attendance
                  </span>
                </a>
              </li>
              <li className="list">
                <a className="nav-link ">
                  <i className="me-3">
                    <FaRegCalendarAlt size={30} color="black" />
                  </i>
                  <span className="ms-1 d-none d-sm-inline text-dark">
                    Schedule
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
