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
import { MdOutlineAssessment } from "react-icons/md";
import { BsFillEyeFill, BsFillPencilFill } from "react-icons/bs";
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
                  <Link to="/teacher" className="nav-link">
                    <i className="pb-2">
                      <FaHome size={20} color="#ff6b00" />
                    </i>
                    <span className=" ms-3 d-none d-sm-inline">Dashbord</span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(1)}>
                  <Link to="/teacher" className="nav-link">
                    <i className="">
                      <FaHome size={20} color="white" />
                    </i>
                    <span className=" ms-3 d-none d-sm-inline text-light">
                      Dashbord
                    </span>
                  </Link>
                </li>
              )}
              {active === 2 ? (
                <li className="list Actives">
                  <Link to="/teacherAttendance" className="nav-link">
                    <i className="">
                      <FaRegCalendarAlt size={20} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">Attendance</span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(2)}>
                  <Link to="/teacherAttendance" className="nav-link">
                    <i className="">
                      <FaRegCalendarAlt size={20} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline  text-light ">
                      Attendance
                    </span>
                  </Link>
                </li>
              )}
              {active === 3 ? (
                <li className="list Actives">
                  <Link to="/manageAssessment" className="nav-link ">
                    <i className="d-sm-inline">
                      <MdOutlineAssessment size={20} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">
                      Manage Assessment
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(3)}>
                  <Link to="/manageAssessment" className="nav-link ">
                    <i className="d-sm-inline">
                      <MdOutlineAssessment size={20} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light ">
                      Manage Assessment
                    </span>
                  </Link>
                </li>
              )}
              {active === 4 ? (
                <li className="list Actives">
                  <Link to="/fillmark" className="nav-link ">
                    <i className="d-sm-inline">
                      <BsFillPencilFill size={20} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">FillMark</span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(4)}>
                  <Link to="/fillmark" className="nav-link ">
                    <i className="d-sm-inline">
                      <BsFillPencilFill size={20} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light ">
                      FillMark
                    </span>
                  </Link>
                </li>
              )}
              {active === 5 ? (
                <li className="list Actives">
                  <Link to="/viewComplian" className="nav-link ">
                    <i className="d-sm-inline">
                      <BsFillEyeFill size={20} color="#ff6b00" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline">
                      view complian
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="list" onClick={() => activator(5)}>
                  <Link to="/viewComplian" className="nav-link ">
                    <i className="d-sm-inline">
                      <BsFillEyeFill size={20} color="white" />
                    </i>
                    <span className="ms-3 d-none d-sm-inline text-light ">
                      View Complian
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
