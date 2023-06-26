import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { MdOutlineRestore } from "react-icons/md";
import AddClassForm from "./AddClassForm";
import axios from "axios";

export default function ManageClass(data) {
  const [addForm, setAddForm] = useState(false);
  const [allSections, setAllSection] = useState([]);

  const [attendance, setAttendance] = useState();
  const [section_id, setSection_id] = useState();
  const [class_id, setClass_id] = useState();
  const [section_name, setSection_name] = useState(4);
  const [class_name, setClass_name] = useState(2);
  const [allClasses, setAllClassess] = useState([]);

  const [loading, setLoading] = useState(false);
  const [class1, setClass1] = useState("Select class (session year)");
  const [section1, setSection1] = useState("Select Section");
  const [notSelectedClass, setNotSelectedClass] = useState(true);
  const [notselected, setNotSelected] = useState(
    "*class or Session Yera is not selected"
  );

  const changeForm = () => {
    if (addForm === true) {
      setAddForm(false);
    } else {
      setAddForm(true);
    }
  };

  useEffect(() => {
    const getClass = async () => {
      allClass();
    };
    getClass();
  }, []);

  const allClass = (e) => {
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("class_id", class_id);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/viewClass", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              console.log(response);
              setAllClassess(response.data);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };
  const allSection = (e) => {
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("class_id", class_id);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/viewSection", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              console.log(response);
              setAllSection(response.data);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };
  const selectClass = (class_id, className) => {
    setClass1(className);
    setClass_id(class_id);
    setClass_name(className);
    allSection();
    setNotSelectedClass(false);
  };
  const addNewClass = () => {
    console.log(allSections);
  };
  return (
    <div className="mx-4">
      <div className="mt-4">Manage Class(Session Year)</div>
      <div className="bg-white mt-5 pt-3">
        <div className="d-flex mb-3">
          <div className=" ms-3 fs-3 me-auto">Class or Session List</div>
          <div>
            {addForm ? (
              <button className="btn btn-primary  me-3" onClick={changeForm}>
                Close Add Section
              </button>
            ) : (
              <button className="btn btn-primary  me-3" onClick={changeForm}>
                Open Add Section
              </button>
            )}
          </div>
        </div>
        {addForm ? <AddClassForm addNewClass={addNewClass} /> : <></>}
        <div className="dropdown ms-3 w-50 me-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            select class
          </label>
          <button
            className="btn btn-light border border-primary w-100 dropdown-toggle"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {class1}
          </button>
          <ul
            className="dropdown-menu w-100"
            aria-labelledby="dropdownMenuButton1">
            {allClasses.map((classes) => (
              <li key={classes.id}>
                <div
                  className="dropdown_item border-bottom p-1 hover-drop-down"
                  onClick={() => selectClass(classes.id, classes.className)}>
                  {classes.className}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Class Name</th>
              <th scope="col">Section name</th>
              <th scope="col">section id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allSections.map((list) => (
              <tr key={list.id}>
                <th scope="row">{list.id}</th>
                <td>{class_name}</td>
                <td>{list.section_name}</td>
                <td>{list.section_id}</td>
                <td>
                  <button className="btn btn-danger btn-sm me-2">
                    {" "}
                    <FaTrash size={15} color="white" />
                  </button>
                  <button className="btn btn-primary btn-sm">
                    {" "}
                    <MdOutlineRestore size={17} color="white" />
                  </button>
                </td>
              </tr>
            ))}
            {typeof attendance?.length === 0 ? (
              <div className="text-danger">*please select class frist </div>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
