import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaPen, FaUser } from "react-icons/fa";
import axios from "axios";
export const ManageSection = () => {
  const [attendance, setAttendance] = useState();
  const [section_id, setSection_id] = useState();
  const [class_id, setClass_id] = useState();
  const [section_name, setSection_name] = useState(4);
  const [class_name, setClass_name] = useState(2);
  const [allClasses, setAllClassess] = useState([]);
  const [allSections, setAllSection] = useState([]);
  const [allStud, setAllStud] = useState([]);
  const [loading, setLoading] = useState(false);
  const [class1, setClass1] = useState("Select class (session year)");
  const [section1, setSection1] = useState("Select Section");
  const [notSelectedClass, setNotSelectedClass] = useState(true);
  const [notselected, setNotSelected] = useState(
    "*class or Session Year is not selected"
  );

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

  const allStuds = (e) => {
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("section_id", section_id);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/studSection", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              console.log(response);
              setAllStud(response.data);
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

  const [student, setStudent] = useState([
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
  ]);
  const selectSection = (name, id) => {
    setSection1(name);
    setSection_id(id);
    allStuds(id);
  };

  const notSelectTheClass = () => {
    if (class1 === "Select class (session year)") {
      setNotSelectedClass(true);
    }
  };
  return (
    <div className="mx-4">
      <div className="mt-4">Manage Section {class1}</div>
      <div className="d-flex my-3">
        <div className="dropdown ms-3 w-25 me-5">
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

        <div className="dropdown w-25">
          <button
            className="btn btn-light border border-primary w-100 dropdown-toggle"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={notSelectTheClass}
            disabled={notSelectedClass}>
            {section1}
          </button>
          <ul
            className="dropdown-menu w-100"
            aria-labelledby="dropdownMenuButton1">
            {allSections.map((section) => (
              <li key={section.id}>
                <div
                  className="dropdown_item border-bottom p-1 hover-drop-down"
                  onClick={() =>
                    selectSection(section.section_name, section.id)
                  }>
                  {section.section_name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {notSelectedClass ? (
        <div className="text-danger">{notselected}</div>
      ) : null}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th>class</th>
            <th>Section</th>
            <th scope="col">Family Phone</th>
            <th scope="col">Photo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allStud.map((list) => (
            <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.emial}</td>
              <td>{class_name}</td>
              <td>{section1}</td>
              <td>{list.phone}</td>
              <td>
                <FaUser></FaUser>
              </td>
              <td>
                <button className="btn btn-danger btn-sm me-2">
                  {" "}
                  <FaTrash size={15} color="white" />
                </button>
                <button className="btn btn-primary btn-sm">
                  {" "}
                  <FaPen size={17} color="white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
