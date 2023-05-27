import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import photo from "./image/family1.jpg";
import NavBar from "../home/NavBar";
export default function Register() {
  const [model, setModel] = useState(false);
  const [fname, setFname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("male");
  const [studId, setStudId] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [errors, setErrors] = useState({});
  const allErrors = {};

  function modelfunction(value) {
    setModel(value);
  }
  const addUser = (e) => {
    e.preventDefault();
    setErrors(validateInput());
  };
  function validateInput() {
    if (fname === "") {
      allErrors.fname = "Frist name is important";
    }
    if (password === "" || password.length < 5) {
      allErrors.password = "Password is to weak";
    }
    if (!(password === confirmPassword)) {
      allErrors.confirmPassword = "password not match";
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
    if (confirmCode === "") {
      allErrors.confirmCode = "Confirmation code field is important";
    }
    if (studId === "") {
      allErrors.studId = "Student Id field is important";
    }
    return allErrors;
  }
  return (
    <div className="">
      <NavBar modelfunction={modelfunction}></NavBar>
      <div className="register-form  mx-auto bg-primary pt-5 pb-5">
        <form
          className=" ps-5 mx-auto rounded  py-2 w-75 bg-white"
          onSubmit={addUser}>
          <div className="fs-3 mb-3">
            <strong className=" text-primary">Family </strong>
            Registration
          </div>
          <div className="fs-5 mb-3">Personal Details</div>
          <div className="d-flex flex-wrap">
            <div className="mb-3 me-5 col-5">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Frist Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}></input>
              {errors.fname && (
                <div className="text-danger">{errors.fname}</div>
              )}
            </div>
            <div className="mb-3 me-5 col-5">
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
          </div>
          <div className="d-flex flex-wrap">
            <div className="mb-3 me-5 col-5">
              <label className="form-label">password</label>
              <input
                type="text"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </div>
            <div className="mb-3 me-5 col-5">
              <label className="form-label">Confirm password</label>
              <input
                type="password"
                className="form-control w-100"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}></input>
              {errors.confirmPassword && (
                <div className="text-danger">{errors.confirmPassword}</div>
              )}
            </div>
          </div>
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
          </div>
          <div className="d-flex flex-wrap">
            <div className="mb-3 me-5 col-5">
              <label className="form-label">Phone</label>
              <PhoneInput
                className="form-control d-flex"
                international
                defaultCountry="ET"
                value={phone}
                onChange={setPhone}
              />
              {errors.phone && (
                <div className="text-danger">{errors.phone}</div>
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
            <div className="mb-3 me-5 col-5">
              <label className="form-label">Student Id</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter student id"
                value={studId}
                onChange={(e) => setStudId(e.target.value)}></input>
              {errors.studId && (
                <div className="text-danger">{errors.studId}</div>
              )}
            </div>
            <div className="mb-3 me-5 col-5">
              <label className="form-label">Referance code</label>
              <input
                type="password"
                className="form-control"
                placeholder="enter referance code"
                value={confirmCode}
                onChange={(e) => setConfirmCode(e.target.value)}></input>
              {errors.confirmCode && (
                <div className="text-danger">{errors.confirmCode}</div>
              )}
            </div>
          </div>
          <div className="d-flex">
            <button className="btn btn-primary px-5 my-3 col-4" type="submit">
              Register
            </button>
            <button
              className="btn btn-danger px-5 my-3 mx-auto col-4"
              type="submit">
              <Link to="/">Back</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
