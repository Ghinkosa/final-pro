import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function AddTeacher() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mname, setMname] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("male");
  const [photo, setPhoto] = useState("imagesUSER-00044.jpg");
  const [education, setEducation] = useState("");
  const [errors, setErrors] = useState({});
  const allErrors = {};
  const [emailError, setEmailError] = useState();
  let history = useNavigate();
  const addUser = (e) => {
    e.preventDefault();
    setErrors(validateInput());
    addNewTeacher();
    history("/print");
  };
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
    return allErrors;
  }
  const addNewTeacher = (event) => {
    let token = localStorage.getItem("token");
    let name = fname + " " + mname + " " + lname;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("photo", photo);
    formData.append("address", address);
    formData.append("role", "teacher");
    formData.append("status", "active");
    formData.append("stud_class", 1);
    formData.append("phone", phone);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/teacherRegister", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              console.log(response.data);
              localStorage.setItem("id", response.data.info.User_id);
              localStorage.setItem("password", response.data.info.password);
              localStorage.setItem("name", name);
              history("/print");
            },
            (error) => {
              console.log(response.data);
              setEmailError("*This email is in use plaese change");
            }
          );
      });
  };
  return (
    <div>
      <form className="bg-light mt-3 ps-4 mx-4 pb-2" onSubmit={addUser}>
        <div className="fs-3 mb-3">
          <strong className="border-bottom border-primary"> Add</strong> Teacher
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
          <div className="mb-3 me-5">
            <label className="form-label"></label>
            <select
              className="w-100 form-select"
              value={education}
              placeholder=""
              onChange={(e) => setEducation(e.target.value)}>
              <option>select education level</option>
              <option>Degree</option>
              <option>MS</option>
              <option>PHD</option>
            </select>
          </div>
          <div className="mb-3 me-5">
            <label className="form-label">Photo</label>
            <input
              type="file"
              className="form-control"
              placeholder="Last Name"></input>
          </div>
        </div>
        <button className="btn btn-primary px-5 my-3" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
