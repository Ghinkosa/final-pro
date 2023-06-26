import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function (props) {
  const [sessionYear, setSessionYear] = useState("");
  const [error, setError] = useState("");

  const [section_id, setSection_id] = useState(1);
  const [subject_id, setSubject_id] = useState("");
  const [class_id, setClass_id] = useState("");
  const [id, setid] = useState();
  const [teacher_id, setTeacher_id] = useState();
  const [teacher_name, setTeacher_name] = useState("select teacher");
  const [teacher_user_id, setTeacher_user_id] = useState();
  const [section_name, setSection_name] = useState();
  const [class_name, setClass_name] = useState();
  const [subject_name, setSubject_name] = useState("");
  const [allClasses, setAllClassess] = useState([]);
  const [allSections, setAllSection] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
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
      allTeacher();
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
  const addnewSubject = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("section_id", section_id);
    formData.append("subject_name", subject_name);
    formData.append("user_id", teacher_id);
    formData.append("subject_id", subject_id);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/createSubject", formData, {
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

  const allTeacher = (e) => {
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
          .post("http://localhost:8000/" + "api/teacherLists", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              setAllTeachers(response.data.user);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };

  /*
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
              console.log(response);
              toast("Section Successfuly added!");
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };
*/
  const selectClass = (class_id, className) => {
    setClass1(className);
    setid(class_id);
    setClass_id(class_id);
    setClass_name(className);
    setNotSelectedClass(false);
    allSection();
  };

  function addclass(event) {
    event.preventDefault();
    if (sessionYear === "") {
      setError("this field is important");
      return;
    }
    props.addNewClass({ sessionYear });
  }
  const notSelectTheClass = () => {
    if (class1 === "Select class (session year)") {
      setNotSelectedClass(true);
    }
  };
  const selectSection = (name, id) => {
    setSection1(name);
    setSection_id(id);
    setSection_name(name);
  };
  const selectTeacher = (name, user_id, id) => {
    setTeacher_name(name);
    setTeacher_id(id);
    setTeacher_user_id(user_id);
    setTeacher_user_id();
  };

  return (
    <div className="my-4">
      <ToastContainer />

      <form className="ms-5" onSubmit={addnewSubject}>
        <div className="d-flex">
          <div className="dropdown  w-25 me-5">
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
          <div className="dropdown w-25">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              select section
            </label>
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
          <div className="dropdown w-25 ms-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              select Teacher
            </label>
            <button
              className="btn btn-light border border-primary w-100 dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              {teacher_name}
            </button>
            <ul
              className="dropdown-menu w-100"
              aria-labelledby="dropdownMenuButton1">
              {allTeachers.map((teacher) => (
                <li key={teacher.id}>
                  <div
                    className="dropdown_item border-bottom p-1 hover-drop-down"
                    onClick={() =>
                      selectTeacher(teacher.name, teacher.user_id, teacher.id)
                    }>
                    {teacher.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="d-flex mt-4">
          <div className="mb-3 w-25">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Subject name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter name"
              value={subject_name}
              onChange={(e) => {
                setSubject_name(e.target.value);
              }}
            />
            {error && <div className="text-danger ms-3">{error}</div>}
          </div>
          <div className="mb-3 ms-4 w-25">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              subject id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter Session Year"
              value={subject_id}
              onChange={(e) => {
                setSubject_id(e.target.value);
              }}
            />
            {error && <div className="text-danger ms-3">{error}</div>}
          </div>
        </div>
        <div className="mb-5">
          <button type="submit" className="btn btn-success mt-1">
            Add Subject
          </button>
        </div>
      </form>
    </div>
  );
}
