import React, { useState, useEffect } from "react";
import AddSubjectForm from "./AddSubjectForm";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
export default function Subject() {
  const [attendance, setAttendance] = useState();
  const [section_id, setSection_id] = useState(4);
  const [class_id, setClass_id] = useState(2);
  const [section_name, setSection_name] = useState(4);
  const [class_name, setClass_name] = useState(2);
  const [allClasses, setAllClassess] = useState([]);
  const [allSections, setAllSection] = useState([]);
  const [allSubjects, setAllSubject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [class1, setClass1] = useState("Select class (session year)");
  const [section1, setSection1] = useState("Select Section");
  const [notSelectedClass, setNotSelectedClass] = useState(true);
  const [notselected, setNotSelected] = useState(
    "*class or Session Yera is not selected"
  );
  const [formName, setFormName] = useState();
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
  const allSubject = (e) => {
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
          .post("http://localhost:8000/" + "api/getSubject", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              console.log(response);
              setAllSubject(response.data);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };
  const [addForm, setAddForm] = useState(false);
  const changeForm = () => {
    if (addForm === true) {
      setAddForm(false);
    } else {
      setAddForm(true);
    }
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
    allSubject();
    setSection_name(name);
  };
  const notSelectTheClass = () => {
    if (class1 === "Select class (session year)") {
      setNotSelectedClass(true);
    }
  };

  function hundleName(e, id) {
    const newUser = allSubjects.map((li) =>
      li.id === id ? { ...li, [e.target.name]: e.target.value } : li
    );
    setAllSubject(newUser);
  }

  return (
    <div className="mx-4">
      <div className="d-flex mb-3 mt-4">
        <div className=" ms-3 fs-3 me-auto">Subject List</div>
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
      {addForm ? <AddSubjectForm /> : <></>}
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
      {typeof allSubject === "undefined" ? (
        <div className="text-danger ms-5">
          *Class and Sections are not selected
        </div>
      ) : (
        <div>
          <table className="table table-success table-striped mt-3">
            <thead>
              <tr className="text-primary">
                <th scope="col">#</th>
                <th scope="col">Section Name</th>
                <th scope="col">Subject name</th>
                <th scope="col">subject id</th>
                <th scope="col">Delete</th>
                <th scope="col">Assign Teacher</th>
              </tr>
            </thead>
            <tbody>
              {allSubjects.map((subject) => (
                <tr key={subject.id}>
                  <td>{subject.id}</td>
                  <td>{section_name}</td>
                  <td>
                    <input
                      name="subject_name"
                      value={subject.subject_name}
                      onChange={(e) => hundleName(e, subject.id)}
                      class="form-control form-control w-25 form-control-sm transparent1"
                      type="text"
                      placeholder="."
                      aria-label=".form-control-lg example"></input>
                  </td>
                  <td>
                    <input
                      name="subject_id"
                      value={subject.subject_id}
                      onChange={(e) => hundleName(e, subject.id)}
                      class="form-control form-control w-25 form-control-sm transparent1"
                      type="text"
                      placeholder="."
                      aria-label=".form-control-lg example"></input>
                  </td>
                  <td className="text-primary pe-auto">
                    <button className="btn btn-danger btn-sm">
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                  <td className="text-primary pe-auto">
                    <button className="btn btn-link ">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
