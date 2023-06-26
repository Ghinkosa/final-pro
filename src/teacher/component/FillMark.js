import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FillMark() {
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

  const Student = (e) => {
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
              setAllStudent(response.data);
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
    Student();
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
  return (
    <div className="container px-3">
      <div className="m-4 border border-success">
        <div className="bg-success py-2 px-2"> Student Marks</div>
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
          <div className="dropdown w-25">
            <button
              className="btn btn-light border border-primary w-100 dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={notSelectTheClass}
              disabled={notSelectedClass}>
              {assesement_name}
            </button>
            <ul
              className="dropdown-menu w-100"
              aria-labelledby="dropdownMenuButton1">
              {allAssessment.map((assess) => (
                <li key={assess.id}>
                  <div
                    className="dropdown_item border-bottom p-1 hover-drop-down"
                    onClick={() =>
                      selectAssess(
                        assess.id,
                        assess.Max,
                        assess.assessment_name
                      )
                    }>
                    {assess.assessment_name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <form className="px-3">
        <table className="table caption-top table-striped table-success px-5">
          <thead>
            <tr>
              <th scope="col">Studnt ID</th>
              <th scope="col">Student name</th>
              {assesement_name === "select assessmant" ? null : (
                <th scope="col">
                  {assesement_name} {max} %
                </th>
              )}
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {allStudent.map((stud) => (
              <tr key={stud.id}>
                <th scope="row">
                  <input
                    type="text"
                    className="form-control transparent1"
                    id="student-name"
                    value={stud.user_id}
                    name="student-name"
                    disabled></input>
                </th>
                <td>
                  <input
                    type="text"
                    className="form-control transparent1"
                    id="student-name"
                    value={stud.name}
                    name="student-name"
                    disabled></input>
                </td>
                {assesement_name === "select assessmant" ? null : (
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      id="marks"
                      placeholder="Enter marks"
                      name="marks"></input>
                  </td>
                )}
                <td>
                  <div>
                    <button type="reset" className="btn btn-secondary ">
                      Save
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
