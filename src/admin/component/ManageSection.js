import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaPen } from "react-icons/fa";

export const ManageSection = () => {
  const [student, setStudent] = useState([
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
    {
      id: "USER -12133",
      name: "galata",
      emial: "galata1713@gmail.com",
      class: "2012",
      section: "A",
      phone: "096420980",
      photo: "ee",
    },
  ]);
  const [class1, setClass1] = useState("Select class (session year)");
  const [section1, setSection1] = useState("Select Section");
  const [notSelectedClass, setNotSelectedClass] = useState(true);
  const [notselected, setNotSelected] = useState(
    "*class or Session Yera is not selected"
  );
  const selectClass = (year) => {
    setClass1(year);
    setNotSelectedClass(false);
  };
  const selectSection = (year) => {
    setSection1(year);
  };

  const notSelectTheClass = () => {
    if (class1 === "Select class (session year)") {
      setNotSelectedClass(true);
    }
  };
  return (
    <div className="mx-4">
      <div className="mt-4">Manage Section {class1}</div>
      <div className="dropdown mb-2">
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
          <li>
            <div
              className="dropdown_item border-bottom p-1 hover-drop-down"
              onClick={() => selectClass("2022")}>
              2022
            </div>
          </li>
          <li>
            <div
              className="dropdown_item border-bottom p-1 hover-drop-down"
              onClick={() => selectClass("2024")}>
              2024
            </div>
          </li>
          <li>
            <div
              className="dropdown_item border-bottom p-1 hover-drop-down"
              onClick={() => selectClass("2023")}>
              2023
            </div>
          </li>
        </ul>
      </div>
      <div className="dropdown">
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
          <li>
            <div
              className="dropdown_item border-bottom p-1 hover-drop-down"
              onClick={() => selectSection("A")}>
              A
            </div>
          </li>
          <li>
            <div
              className="dropdown_item border-bottom p-1 hover-drop-down"
              onClick={() => selectSection("B")}>
              B
            </div>
          </li>
          <li>
            <div
              className="dropdown_item border-bottom p-1 hover-drop-down"
              onClick={() => selectSection("C")}>
              C
            </div>
          </li>
        </ul>
      </div>
      {notSelectedClass ? (
        <div className="text-danger">{notselected}</div>
      ) : null}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th>class</th>
            <th>Section</th>
            <th scope="col">Family Phone</th>
            <th scope="col">Photo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((list) => (
            <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.emial}</td>
              <td>{list.class}</td>
              <td>{list.section}</td>
              <td>{list.phone}</td>
              <td>{list.photo}</td>
              <td>
                <button className="btn btn-danger btn-sm me-2">
                  {" "}
                  <FaTrash size={15} color="white" />
                </button>
                <button className="btn btn-primary btn-sm">
                  {" "}
                  <FaPen size={17} color="white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
