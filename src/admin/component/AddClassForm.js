import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function (props) {
  const [sessionYear, setSessionYear] = useState("");
  const [error, setError] = useState("");

  const [attendance, setAttendance] = useState();
  const [section_id, setSection_id] = useState();
  const [class_id, setClass_id] = useState();
  const [id, setid] = useState();
  const [section_name, setSection_name] = useState();
  const [class_name, setClass_name] = useState();
  const [allClasses, setAllClassess] = useState([]);
  const [allSections, setAllSection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [class1, setClass1] = useState("Select class (session year)");
  const [section1, setSection1] = useState("Select Section");
  const [notSelectedClass, setNotSelectedClass] = useState(true);
  const [notselected, setNotSelected] = useState(
    "*class or Session Yera is not selected"
  );

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

  const addSection = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("class_id", id);
    formData.append("section_id", section_id);
    formData.append("section_name", section_name);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/createSection", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              toast("Section Successfuly added!");
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };

  const selectClass = (class_id, className) => {
    setClass1(className);
    setid(class_id);
    setClass_name(className);
    setNotSelectedClass(false);
  };

  function addclass(event) {
    event.preventDefault();
    if (sessionYear === "") {
      setError("this field is important");
      return;
    }
    props.addNewClass({ sessionYear });
  }
  return (
    <div>
      <ToastContainer />
      <form className="d-flex ms-5" onSubmit={addSection}>
        <div className="dropdown ms-3 w-25 me-5">
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
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Add Section
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter Session Year"
            value={section_name}
            onChange={(e) => {
              setSection_name(e.target.value);
            }}
          />
          {error && <div className="text-danger ms-3">{error}</div>}
        </div>
        <div className="mb-3 ms-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            section id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter Session Year"
            value={section_id}
            onChange={(e) => {
              setSection_id(e.target.value);
            }}
          />
          {error && <div className="text-danger ms-3">{error}</div>}
        </div>
        <div className="pt-2">
          <button type="submit" className="btn btn-success ms-4 mt-4">
            Add Section
          </button>
        </div>
      </form>
    </div>
  );
}
