import React from "react";
import { FaUserGraduate,FaChalkboardTeacher,FaBookReader,FaBookOpen,FaUserTie,FaTrash} from "react-icons/fa";
import {MdOutlineRestore} from "react-icons/md"
export const DashBoard = () => {
  return (
    <div className="mt-4">
      <div className="fs-2 ms-2 text-white ">DashBoard</div>
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
            <FaChalkboardTeacher size={40} color="#294BF9" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color-t">
              Teacher
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color-t">345</div>
          </div>
        </div>
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaBookReader size={40} color="#554D00" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color-c">
               Class and Section
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color-c">45</div>
          </div>
        </div>
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaBookOpen size={40} color="#3300FF" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color-s">
              Subject
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color-s">45</div>
          </div>
        </div>
      </div>
      <div className="ms-5 mt-5 stud-list">
        <div className="p-4 fs-4 text-dark ">Student List</div>
        <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">Gender</th>
      <th scope="col">phone</th>
      <th scope="col">DOB</th>
      <th scope="col">photo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>M</td>
      <td>0945235563</td>
      <td>july 30 2000</td>
      <td><FaUserTie size={40} color="#ec5782"/></td>
      <td><FaTrash size={25} color="red"/><MdOutlineRestore size={30} color="#20D7D7" className="ms-3"/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob Thornton</td>
      <td>F</td>
      <td>0945235563</td>
      <td>july 30 2000</td>
      
      <td><FaUserTie size={40} color="#ec5782"/></td>
      <td><FaTrash size={25} color="red"/><MdOutlineRestore size={30} color="#20D7D7" className="ms-3"/></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>M</td>
      <td>0945235563</td>
      <td>july 30 2000</td>
      <td><FaUserTie size={40} color="#294BF9"/></td>
      <td><FaTrash size={25} color="red"/><MdOutlineRestore size={30} color="#20D7D7" className="ms-3"/></td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
};
