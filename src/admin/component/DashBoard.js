import React from "react";
import { FaUserGraduate } from "react-icons/fa";

export const DashBoard = () => {
  return (
    <div className="mt-4">
      <div className="fs-2 ms-2 text-dark ">DashBoard</div>
      <div className="d-flex flex-wrap">
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaUserGraduate size={40} color="#ec5782" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color">
              Student
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color">3345</div>
          </div>
        </div>
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaUserGraduate size={40} color="#ec5782" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color">
              Student
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color">3345</div>
          </div>
        </div>
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaUserGraduate size={40} color="#ec5782" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color">
              Student
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color">3345</div>
          </div>
        </div>
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaUserGraduate size={40} color="#ec5782" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color">
              Student
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color">3345</div>
          </div>
        </div>
      </div>
      <div className="ms-5 mt-5 stud-list">
        <div className="p-4 fs-4">Student List</div>
      </div>
    </div>
  );
};
