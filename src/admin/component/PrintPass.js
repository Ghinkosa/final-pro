import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import photo from "./images/Logo.png";
import { useNavigate } from "react-router-dom";
export default function PrintPass() {
  const componentRef = useRef(null);
  let history = useNavigate();
  function afterAll() {
    alert("print Success");
    history("/dashboard");
  }
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "USER INFO",
    onAfterPrint: () => afterAll(),
  });
  return (
    <>
      <div className="container w-50 bg-secondary" ref={componentRef}>
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
              <td>Galata Hinkosa</td>
            </tr>
            <tr>
              <td>User Id</td>
              <td>UGR/17132/11</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>qw2fsfre</td>
            </tr>
            <tr>
              <td>Referance code</td>
              <td>uyereyuh</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Galata Hinkosa</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-success" onClick={handlePrint}>
        Print File
      </button>
    </>
  );
}
