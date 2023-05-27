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
              {active === 1 ? (
                <li className="list Actives">
                  <Link to="/registerall" className="nav-link">
                    <i className="pb-2">
                      <FaHome size={30} color="#ff6b00" />
                    </i>
                    <span className=" ms-3 d-none d-sm-inline">Students</span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(1)}>
                  <Link to="/registerall" className="nav-link">
                    <i className="">
                      <FaHome size={30} color="white" />
                    </i>
                    <span className=" ms-3 d-none d-sm-inline text-light">
                      Students
                    </span>
                  </Link>
                </li>
              )}
              {active === 2 ? (
                <li className="list  Actives">
                  <Link to="/add_Student" className="nav-link">
                    <i className="">
                      <FaRegPaperPlane size={30} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline ">Register</span>
                  </Link>
                </li>
              ) : (
                <li
                  className="list"
                  onClick={() => {
                    activator(2);
                  }}>
                  <Link to="/add_Student" className="nav-link">
                    <i className="">
                      <FaRegPaperPlane size={30} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light">
                      Register
                    </span>
                  </Link>
                </li>
              )}
              {active === 3 ? (
                <li className="list Actives">
                  <Link to="/announcement" className="nav-link">
                    <i className="">
                      <FaBook size={30} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">
                      Announcement
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(3)}>
                  <Link to="/announcement" className="nav-link">
                    <i className="">
                      <FaBook size={30} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light">
                      Announcement
                    </span>
                  </Link>
                </li>
              )}
              {active === 4 ? (
                <li className="list Actives">
                  <Link to="/comment" className="nav-link ">
                    <i className="">
                      <FaUser size={30} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">Comment</span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(4)}>
                  <Link to="/comment" className="nav-link ">
                    <i className="">
                      <FaUser size={30} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light">
                      Comment
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
