import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import photo from "./images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
export default function PrintStud() {
  const componentRef = useRef(null);
  const [name, setName] = useState();
  const [ref_code, setRef_code] = useState();
  const [password, setPassword] = useState();
  const [id, setId] = useState();
  let history = useNavigate();

  useEffect(() => {
    const getStud = async () => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setPassword(localStorage.getItem("password"));
      setRef_code(localStorage.getItem("ref_code"));
    };
    getStud();
  }, []);
  function afterAll() {
    toast("Registerd Success");
    setId(localStorage.removeItem("id"));
    setName(localStorage.removeItem("name"));
    setPassword(localStorage.removeItem("password"));
    setRef_code(localStorage.removeItem("ref_code"));
    history("/add_Student");
  }
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "USER INFO",
    onAfterPrint: () => afterAll(),
  });
  return (
    <>
      <ToastContainer />
      <div className="container w-50 bg-secondary mt-5" ref={componentRef}>
        <div className="logo text-center">
          <img src={photo} alt="no image" className="logo-3 mx-auto my-2"></img>
        </div>

        <div className="border-bottom fs-4 text-center">
          Smart Attendance and Family Orainted School
        </div>

        <table className="table mt-3">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>User Id</td>
              <td>{id}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>{password}</td>
            </tr>
            <tr>
              <td>Referance code</td>
              <td>{ref_code}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary mx-5" onClick={handlePrint}>
        Print File
      </button>
    </>
  );
}
