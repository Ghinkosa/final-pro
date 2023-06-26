import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaTrash } from "react-icons/fa";
import { MdOutlineRestore } from "react-icons/md";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";
export default function StudList() {
  const [studList, setStudlist] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getStud = async () => {
      studlists();
      setLoading(false);
      console.log(studList);
    };
    getStud();
  }, []);

  const studlists = async () => {
    let token = localStorage.getItem("token");
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        axios
          .get("http://localhost:8000/" + "api/studList", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            async (response) => {
              if (response.data.user) {
                setStudlist(response.data.user);
              } else {
                console.log(response.data.message);
              }
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };

  return (
    <div className="ms-3 me-5">
      <table className="table bg-white rounded">
        <thead>
          <tr>
            <th scope="col">Active</th>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">Address</th>
            <th scope="col">Class</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {studList.map((student) => (
            <tr key={student.id}>
              <th scope="row">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked></input>
                </div>
              </th>
              <td>{student.name}</td>
              <td>{student.user_id}</td>
              <td>{student.address}</td>
              <td>2012</td>
              <td>
                <i className="rounder2 pt-1 pb-2 px-2">
                  <BsTelephone size={15} color="black" />
                </i>
                <i className="rounder2 pt-1 pb-2 px-2 ms-1">
                  <TfiEmail size={15} color="black" />
                </i>
              </td>

              <td>
                <button className="btn btn-danger btn-sm">
                  <FaTrash size={15} color="white" />
                </button>
                <button className="btn btn-primary btn-sm ms-2">
                  <MdOutlineRestore size={17} color="white" />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th scope="row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked></input>
              </div>
            </th>
            <td>Galata Hinkosa</td>
            <td>USER-12134</td>
            <td>Adama 04</td>
            <td>2012</td>
            <td>
              <i className="rounder2 pt-1 pb-2 px-2">
                <BsTelephone size={15} color="black" />
              </i>
              <i className="rounder2 pt-1 pb-2 px-2 ms-1">
                <TfiEmail size={15} color="black" />
              </i>
            </td>

            <td>
              <button className="btn btn-danger btn-sm">
                <FaTrash size={15} color="white" />
              </button>
              <button className="btn btn-primary btn-sm ms-2">
                <MdOutlineRestore size={17} color="white" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked></input>
              </div>
            </th>
            <td>Galata Hinkosa</td>
            <td>USER-12134</td>
            <td>Adama 04</td>
            <td>2012</td>
            <td>
              <i className="rounder2 pt-1 pb-2 px-2">
                <BsTelephone size={15} color="black" />
              </i>
              <i className="rounder2 pt-1 pb-2 px-2 ms-1">
                <TfiEmail size={15} color="black" />
              </i>
            </td>

            <td>
              <button className="btn btn-danger btn-sm">
                <FaTrash size={15} color="white" />
              </button>
              <button className="btn btn-primary btn-sm ms-2">
                <MdOutlineRestore size={17} color="white" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked></input>
              </div>
            </th>
            <td>Galata Hinkosa</td>
            <td>USER-12134</td>
            <td>Adama 04</td>
            <td>2012</td>
            <td>
              <i className="rounder2 pt-1 pb-2 px-2">
                <BsTelephone size={15} color="black" />
              </i>
              <i className="rounder2 pt-1 pb-2 px-2 ms-1">
                <TfiEmail size={15} color="black" />
              </i>
            </td>

            <td>
              <button className="btn btn-danger btn-sm">
                <FaTrash size={15} color="white" />
              </button>
              <button className="btn btn-primary btn-sm ms-2">
                <MdOutlineRestore size={17} color="white" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked></input>
              </div>
            </th>
            <td>Galata Hinkosa</td>
            <td>USER-12134</td>
            <td>Adama 04</td>
            <td>2012</td>
            <td>
              <i className="rounder2 pt-1 pb-2 px-2">
                <BsTelephone size={15} color="black" />
              </i>
              <i className="rounder2 pt-1 pb-2 px-2 ms-1">
                <TfiEmail size={15} color="black" />
              </i>
            </td>

            <td>
              <button className="btn btn-danger btn-sm">
                <FaTrash size={15} color="white" />
              </button>
              <button className="btn btn-primary btn-sm ms-2">
                <MdOutlineRestore size={17} color="white" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked></input>
              </div>
            </th>
            <td>Galata Hinkosa</td>
            <td>USER-12134</td>
            <td>Adama 04</td>
            <td>2012</td>
            <td>
              <i className="rounder2 pt-1 pb-2 px-2">
                <BsTelephone size={15} color="black" />
              </i>
              <i className="rounder2 pt-1 pb-2 px-2 ms-1">
                <TfiEmail size={15} color="black" />
              </i>
            </td>

            <td>
              <button className="btn btn-danger btn-sm">
                <FaTrash size={15} color="white" />
              </button>
              <button className="btn btn-primary btn-sm ms-2">
                <MdOutlineRestore size={17} color="white" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked></input>
              </div>
            </th>
            <td>Galata Hinkosa</td>
            <td>USER-12134</td>
            <td>Adama 04</td>
            <td>2012</td>
            <td>
              <i className="rounder2 pt-1 pb-2 px-2">
                <BsTelephone size={15} color="black" />
              </i>
              <i className="rounder2 pt-1 pb-2 px-2 ms-1">
                <TfiEmail size={15} color="black" />
              </i>
            </td>

            <td>
              <button className="btn btn-danger btn-sm">
                <FaTrash size={15} color="white" />
              </button>
              <button className="btn btn-primary btn-sm ms-2">
                <MdOutlineRestore size={17} color="white" />
              </button>
            </td>
          </tr>
          <tr className="py-3">
            <td colSpan="5"></td>
            <td colSpan="2" className="ms-auto">
              <i className=" ms-1">
                <IoCaretBack size={20} color="gray" />
              </i>
              <i className="rounder1 bg-secondary ms-2  fw-bolder">1</i>
              <i className="bg-white  rounder1 ms-2  fw-bolder">2</i>
              <i className="bg-white rounder1  ms-2 fw-bolder">3</i>

              <i className=" ms-1">
                <IoCaretForward size={20} color="gray" />
              </i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
