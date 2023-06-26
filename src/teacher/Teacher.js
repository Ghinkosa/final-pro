import React from "react";
import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";
import {
  FaBookOpen,
  FaBookReader,
  FaChalkboardTeacher,
  FaUserGraduate,
} from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Teacher() {
  let history = useNavigate();
  const auth = () => {
    if (localStorage.getItem("role") != "teacher") {
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
      <NavBar />
      <SideBar active="1" />
      <div
        className="admin mleft-for-dashbord cardsContainer"
        id="cards-container">
        <div className="d-flex flex-wrap">
          <div className="card box-sizes d-flex flex-row border-card-1">
            <div className="my-auto ps-4">
              <FaUserGraduate size={40} color="#ec5782" />
            </div>
            <div className="card-body">
              <div className="card-title m-auto ms-3 fs-5 dashboard-color">
                Student
              </div>
              <div className="card-subtitle ms-3 fs-3 dashboard-color">
                3345
              </div>
            </div>
          </div>
          <div className="card box-sizes d-flex flex-row border-card-2">
            <div className="my-auto ps-4">
              <FaChalkboardTeacher size={40} color="#294BF9" />
            </div>
            <div className="card-body">
              <div className="card-title m-auto ms-3 fs-5 dashboard-color-t">
                Teacher
              </div>
              <div className="card-subtitle ms-3 fs-3 dashboard-color-t">
                345
              </div>
            </div>
          </div>
          <div className="card box-sizes d-flex flex-row border-card-3">
            <div className="my-auto ps-4">
              <FaBookReader size={40} color="#554D00" />
            </div>
            <div className="card-body">
              <div className="card-title m-auto ms-3 fs-5 dashboard-color-c">
                Class and Section
              </div>
              <div className="card-subtitle ms-3 fs-3 dashboard-color-c">
                45
              </div>
            </div>
          </div>
          <div className="card box-sizes d-flex flex-row border-card-1">
            <div className="my-auto ps-4">
              <FaBookOpen size={40} color="#3300FF" />
            </div>
            <div className="card-body">
              <div className="card-title m-auto ms-3 fs-5 dashboard-color-s">
                Subject
              </div>
              <div className="card-subtitle ms-3 fs-3 dashboard-color-s">
                45
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
