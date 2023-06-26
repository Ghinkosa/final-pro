import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEllipsisH, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Attendance() {
  const [attendance, setAttendance] = useState();
  const [section_id, setSection_id] = useState(4);
  const [class_id, setClass_id] = useState(2);
  const [section_name, setSection_name] = useState(4);
  const [class_name, setClass_name] = useState(2);
  const [allClasses, setAllClassess] = useState([]);
  const [allSections, setAllSection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [class1, setClass1] = useState("Select class (session year)");
  const [section1, setSection1] = useState("Select Section");
  const [notSelectedClass, setNotSelectedClass] = useState(true);
  const [notselected, setNotSelected] = useState(
    "*class or Session Yera is not selected"
  );
  const showPercent = (e) => {
    setLoading(true);
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("section_id", section_id);
    formData.append("class_id", class_id);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/getAttendance", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              console.log(response);
              setAttendance(response.data);
              console.log(response.data);
              setLoading(false);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };

  useEffect(() => {
    const getClass = async () => {
      allClass();
      console.log(allClasses);
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
    allSection(class_id);
    setNotSelectedClass(false);
  };
  const selectSection = (name, id) => {
    setSection1(name);
    setSection_id(id);
    setSection_name(name);
    showPercent();
  };

  const notSelectTheClass = () => {
    if (class1 === "Select class (session year)") {
      setNotSelectedClass(true);
    }
  };
  return (
    <div className="bg-light">
      <div className="m-4 border border-success">
        <div className="bg-success py-2 px-2">Attendance</div>
        <div className="d-flex my-4">
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
      </div>
      {typeof attendance === "undefined" ? (
        <div className="text-danger ms-5">
          *Class and Sections are not selected
        </div>
      ) : (
        <div className="m-4">
          <table className="table table-striped">
            <thead>
              <tr className="bg-success">
                <th scope="col">Student Id</th>
                <th scope="col">Class(session Year)</th>
                <th scope="col">section</th>
                <th scope="col">Status</th>
                <th scope="col">See Detial</th>
              </tr>
            </thead>

            {loading ? (
              <tbody>loading...</tbody>
            ) : (
              <tbody>
                {attendance.map((attendance) => (
                  <tr key={attendance.id}>
                    <th scope="row">{attendance.user_id}</th>
                    <td>{class_name}</td>
                    <td>{section_name}</td>
                    <td>{attendance.percent}%</td>
                    <td>
                      <Link
                        to={`/teacherDetial/${attendance.user_id}`}
                        className="btn btn-primary">
                        <FaEllipsisH></FaEllipsisH>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      )}
    </div>
  );
}
