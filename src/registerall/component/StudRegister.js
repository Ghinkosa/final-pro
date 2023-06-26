import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
export default function StudRegister() {
  const [allClasses, setAllClassess] = useState([]);
  const [allSections, setAllSection] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mname, setMname] = useState("");
  const [section_name, setSection_name] = useState("select section");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("male");
  const [photo, setPhoto] = useState("");
  const [session, setSession] = useState("Class");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState();
  const [class_id, setClass_id] = useState();
  const [class_name, setClass_name] = useState("select class");
  const allErrors = {};
  const [section_id, setSection_id] = useState();
  const [notSelectedClass, setNotSelectedClass] = useState(true);
  const [notselected, setNotSelected] = useState(
    "*class or Session Year is not selected"
  );
  let history = useNavigate();
  const addUser = (e) => {
    e.preventDefault();
    setErrors(validateInput());
    addStudent();
  };
  //hundle image

  function handleImage(e) {
    console.log(e.target.files);
    setPhoto(e.target.files[0]);
  }
  function validateInput() {
    if (fname === "") {
      allErrors.fname = "Frist name is important";
    }
    if (mname === "") {
      allErrors.mname = "Middle name  is important";
    }
    if (lname === "") {
      allErrors.lname = "Last name is important";
    }
    if (date === "") {
      allErrors.date = "date of brith is important";
    }
    if (email === "") {
      allErrors.email = "Email is important";
    }
    if (!(email.includes("@", 0) && email.includes(".com", 0))) {
      allErrors.email = "Email must contain @ and .com";
    }
    if (phone === null) {
      allErrors.phone = "phone field is important";
    }
    if (address === "") {
      allErrors.address = "address field is important";
    }
    if (age === "") {
      allErrors.age = "age field is important";
    }
    if (session === "Class") {
      allErrors.session = "please select this field";
    }
    if (photo === "") {
      allErrors.photo = "Photo field is important";
    }
    return allErrors;
  }

  // REACT APP src/contexts/AppContext.js - login()
  const addStudent = (event) => {
    let token = localStorage.getItem("token");
    let name = fname + " " + mname + " " + lname;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("photo", photo);
    formData.append("address", address);
    formData.append("role", "student");
    formData.append("status", "active");
    formData.append("stud_class", class_id);
    formData.append("stud_section", section_id);
    formData.append("phone", phone);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/studRegister", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              let name = fname + " " + mname + " " + lname;
              history("/printStud");
              localStorage.setItem("id", response.data.info.User_id);
              localStorage.setItem("password", response.data.info.password);
              localStorage.setItem("ref_code", response.data.info.ref_code);
              localStorage.setItem("name", name);
            },
            (error) => {
              setEmailError("*This email is in use plaese change");
            }
          );
      });
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
    setClass_id(class_id);
    setClass_name(className);
    setNotSelectedClass(false);
    allSection();
  };
  const selectSection = (name, id) => {
    setSection_name(name);
    setSection_id(id);
  };
  return (
    <div>
      <form className="bg-light mt-3 ps-4 mx-4 pb-2 rounded" onSubmit={addUser}>
        <div className="fs-3 mb-3">
          <strong className="border-bottom border-primary"> Add</strong> Student
        </div>
        <div className="fs-5 mb-3">Personal Details</div>
        <div className="d-flex flex-wrap">
          <div className="mb-3 me-5">
            <label className="form-label">Frist Name</label>
            <input
              type="text"
              className="form-control w-100"
              placeholder="Frist Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}></input>
            {errors.fname && <div className="text-danger">{errors.fname}</div>}
          </div>
          <div className="mb-3 me-5">
            <label className="form-label">Middle Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Middle Name"
              value={mname}
              onChange={(e) => setMname(e.target.value)}></input>
            {errors.mname && <div className="text-danger">{errors.mname}</div>}
          </div>
          <div className="mb-3 me-5">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}></input>
            {errors.lname && <div className="text-danger">{errors.lname}</div>}
          </div>
          <div className="mb-3 me-5">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control w-100"
              placeholder="12/1/2000"
              value={date}
              onChange={(e) => setDate(e.target.value)}></input>
            {errors.date && <div className="text-danger">{errors.date}</div>}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="mb-3 me-5">
            <label className="form-label" htmlFor="exampleFormControlInput1">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="user@gmail.com"
              id="exampleFormControlInput1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
            {errors.email && <div className="text-danger">{errors.email}</div>}
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="mb-3 me-5">
            <label className="form-label">Phone</label>
            <PhoneInput
              className="form-control d-flex"
              international
              defaultCountry="ET"
              value={phone}
              onChange={setPhone}
            />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
          </div>
          <div className="mb-3 me-5">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control w-100"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}></input>
            {errors.address && (
              <div className="text-danger">{errors.address}</div>
            )}
          </div>
          <div className="me-4">
            <label className="form-label">Sex</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                checked
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="fs-5 mb-3">Other information</div>
        <div className="d-flex flex-wrap">
          <div className="dropdown  w-25 me-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              select class
            </label>
            <button
              className="btn btn-light border border-primary w-100 dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              {class_name}
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
          <div className="dropdown w-25 me-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              select section
            </label>
            <button
              className="btn btn-light border border-primary w-100 dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              disabled={notSelectedClass}>
              {section_name}
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
          <div className="mb-3 me-5">
            <label className="form-label">Photo</label>
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={handleImage}
              placeholder="photo"></input>
            {errors.photo && <div className="text-danger">{errors.photo}</div>}
          </div>
        </div>
        <button className="btn btn-primary px-5 my-3" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
