import React, { useEffect } from "react";
import photo from "./images/login.jpg";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function DetialAttendance() {
  const param = useParams();
  const [users, setUsers] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [total, setTotal] = useState();
  const [absent, setAbsent] = useState();
  const [present, setPresent] = useState();
  const totalpercent = (present * 100) / total;
  console.log(param.id);

  useEffect(() => {
    const getClass = async () => {
      dataFromBack();
    };
    getClass();
  }, []);

  const dataFromBack = (e) => {
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("user_id", param.id);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post(
            "http://localhost:8000/" + "api/getAttendanceDetails",
            formData,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          )
          .then(
            (response) => {
              setUsers(response.data.user);
              setAttendance(response.data.attendance);
              setTotal(response.data.total);
              setAbsent(response.data.absent);
              setPresent(response.data.present);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };
  return (
    <div className="mx-5">
      <div className="d-flex">
        <div class="d-flex bg-white w-50 mt-4 rounded-3 p-2">
          <div class="imgcontainer3 w-50 mx-3">
            <img src={photo} class="card-img-top avatar3" alt="..."></img>
          </div>

          <div class="w-50 mt-2">
            <h5 class="card-title px-auto mt-4">Name: {users.name}</h5>
            <p class="card-text m-0">
              <strong>Class:</strong> 1st
            </p>
            <p class="card-text my-0">
              <strong>Section:</strong> A
            </p>
            <p class="card-text">
              <small class="text-body-secondary">
                <strong>Attendance:</strong> {totalpercent}%
              </small>
            </p>
          </div>
        </div>
        <div className="w-25  mx-3 my-5 rounded-3 bg-white text-center pt-1">
          <div className="my-2">
            <strong>Total Attendance</strong>
          </div>
          <div className=" w-5 fs-3 rounded-5 numbers bg-white text-center align-middle mx-auto">
            {total}
          </div>
        </div>
        <div className="w-25  mx-3 my-5 rounded-3 bg-success text-center pt-1">
          <div className="my-2 text-white">
            <strong>Total Present</strong>
          </div>
          <div className=" w-5 fs-3 rounded-5 numbers bg-white text-center align-middle mx-auto text-success">
            {present}
          </div>
        </div>
        <div className="w-25  mx-3 my-5 rounded-3 bg-danger text-center pt-1">
          <div className="my-2 text-white">
            <strong>Total Absent</strong>
          </div>
          <div className=" w-5 fs-3 rounded-5 numbers bg-white text-center align-middle mx-auto text-danger">
            {absent}
          </div>
        </div>
      </div>
      <div className="bg-white my-3 rounded-3 px-2">
        <div className=" pt-1">
          <strong>Attendance List</strong>
        </div>
        <div>
          <table className="table rounded-3 table-striped mt-4">
            <thead>
              <tr className="bg-success rounded-3 rounded-bottom-0 p-1">
                <th scope="col">#NO</th>
                <th scope="col">Student name</th>
                <th scope="col">User Id</th>
                <th scope="col">Class</th>
                <th scope="col">Section</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((attendance) => (
                <tr>
                  <th scope="row">{attendance.id}</th>
                  <th scope="row">{users.name}</th>
                  <th scope="row">{users.user_id}</th>
                  <td>1ST</td>
                  <td>A</td>
                  <td>{attendance.created_at}</td>
                  {attendance.status === 1 ? (
                    <td>
                      <BsCheckCircle color="green" size={20}></BsCheckCircle>
                    </td>
                  ) : (
                    <td>
                      <MdOutlineCancel color="red" size={25}></MdOutlineCancel>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
