import React, { useEffect, useState } from "react";
import axios from "axios";
import AddAssessment from "./AddAssessment";
import { FaTrash } from "react-icons/fa";
import { MdOutlineRestore } from "react-icons/md";

export default function CreateAssess() {
  const [attendance, setAttendance] = useState();
  const [section_id, setSection_id] = useState();
  const [allStudent, setAllStudent] = useState([]);
  const [subject_id, setSubject_id] = useState();
  const [subject_name, setSubject_name] = useState("select subject");
  const [assesement_name, setAssessment_name] = useState("select assessmant");
  const [assesment_id, setAssessment_id] = useState();
  const [section_name, setSection_name] = useState(4);
  const [max, setMax] = useState();
  const [class_name, setClass_name] = useState(2);
  const [allAssessment, setAllAssessment] = useState([]);
  const [allSections, setAllSection] = useState([]);
  const [allSubjects, setAllSubject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [class1, setClass1] = useState("Select class (session year)");
  const [section1, setSection1] = useState("Select Section");
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
  const Assesements = (e) => {
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("subject_id", subject_id);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/viewAssessment1", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              console.log(response);
              setAllAssessment(response.data);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };

  const selectClass = (subject_id, subjectName, section_id) => {
    setSubject_name(subjectName);
    setSubject_id(subject_id);
    Assesements();
    setSection_id(section_id);

    setNotSelectedClass(false);
  };
  const selectSection = (name, id) => {
    setSection1(name);
    setSection_id(id);
    setSection_name(name);
  };
  const selectAssess = (id, Max, assessment_name) => {
    setAssessment_id(id);
    setAssessment_name(assessment_name);
    setMax(Max);
  };

  const notSelectTheClass = () => {
    if (class1 === "Select class (session year)") {
      setNotSelectedClass(true);
    }
  };
  const changeForm = () => {
    if (OpenForm) {
      setOpenForm(false);
    } else {
      setOpenForm(true);
    }
  };
  return (
    <div>
      <div className="mx-4 my-4 d-flex">
        <div className="fs-3">Assesement</div>
        {OpenForm ? (
          <button
            className="btn btn-primary btn-lg ms-auto "
            onClick={changeForm}>
            Open Form
          </button>
        ) : (
          <button
            className="btn btn-primary btn-lg ms-auto "
            onClick={changeForm}>
            Close Form
          </button>
        )}
      </div>
      <div className="ms-4">{OpenForm ? <AddAssessment /> : null}</div>
      <div className="mx-4 border border-success">
        <div className=" py-2 px-2 d-flex bg-success">
          <div className="">Student Marks</div>
        </div>
        <div className="d-flex my-4">
          <div className="dropdown ms-3 w-25 me-5">
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
        </div>
        {allAssessment.length === 0 ? (
          <div className="text-danger">*no assessment is created yet</div>
        ) : null}
        <table className="table table-striped table-success">
          <thead>
            <tr>
              <th scope="col">#No</th>
              <th scope="col">subject name</th>
              <th scope="col">Assesement Name</th>
              <th scope="col">Max Mark</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allAssessment.map((ass) => (
              <tr key={ass.id}>
                <td>{ass.id}</td>
                <td>{subject_name}</td>
                <td>{ass.assessment_name}</td>
                <td>{ass.Max}%</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
