import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function AddAssessment() {
  const [attendance, setAttendance] = useState();
  const [section_id, setSection_id] = useState();
  const [allStudent, setAllStudent] = useState([]);
  const [subject_id, setSubject_id] = useState();
  const [subject_name, setSubject_name] = useState("select subject");
  const [assesement_name, setAssessment_name] = useState("");
  const [assesment_id, setAssessment_id] = useState();
  const [section_name, setSection_name] = useState(4);
  const [max, setMax] = useState();
  const [class_name, setClass_name] = useState(2);
  const [allAssessment, setAllAssessment] = useState([]);
  const [allSections, setAllSection] = useState([]);
  const [allSubjects, setAllSubject] = useState([]);
  const [notSelectedClass, setNotSelectedClass] = useState(true);
  const [notselected, setNotSelected] = useState(
    "*class or Session Yera is not selected"
  );
  const [OpenForm, setOpenForm] = useState(false);

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
          .post("http://localhost:8000/" + "api/viewSubject", formData, {
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

  useEffect(() => {
    const getClass = async () => {
      allSubject();
      console.log(allSubjects);
    };
    getClass();
  }, []);
  const selectClass = (subject_id, subjectName, section_id) => {
    setSubject_name(subjectName);
    setSubject_id(subject_id);
    setSection_id(section_id);
    setNotSelectedClass(false);
  };
  const addNewAssessment = () => {
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("Max", max);
    formData.append("assessment_name", assesement_name);
    formData.append("assessment_id", assesment_id);
    formData.append("subject_id", subject_id);

    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/createAssessment", formData, {
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

  return (
    <div>
      <ToastContainer />
      <div className="d-flex mb-5">
        <div className="dropdown ms-3 w-25 me-5 mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Subject name
          </label>
          <button
            className="btn btn-light border border-primary w-100 dropdown-toggle"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {subject_name}
          </button>
          <ul
            className="dropdown-menu w-100"
            aria-labelledby="dropdownMenuButton1">
            {allSubjects.map((subject) => (
              <li key={subject.id}>
                <div
                  className="dropdown_item border-bottom p-1 hover-drop-down"
                  onClick={() =>
                    selectClass(
                      subject.id,
                      subject.subject_name,
                      subject.section_id
                    )
                  }>
                  {subject.subject_name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex">
          <div className="mb-3 w-25">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Assessment Id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter ClassName"
              value={assesment_id}
              onChange={(e) => {
                setAssessment_id(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 w-25 mx-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Assessement name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter ClassName"
              value={assesement_name}
              onChange={(e) => {
                setAssessment_name(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 w-25">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Maximum Mark
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter ClassName"
              value={max}
              onChange={(e) => {
                setMax(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="me-5 pt-2 pe-3 ">
          <button
            type="button"
            className="btn btn-success mt-4 "
            onClick={addNewAssessment}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
