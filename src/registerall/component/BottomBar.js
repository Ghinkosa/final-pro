import React from "react";
import { useState } from "react";
export default function BottomBar() {
  const [class1, setClass1] = useState("Class");
  const [section1, setSection1] = useState("Section");
  const [notSelectedClass, setNotSelectedClass] = useState(true);
  const [notselected, setNotSelected] = useState(
    "*class or Session Year is not selected"
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
    <div className="mx-3 my-4">
      <div className="d-flex">
        <form class="d-flex col-3 me-5">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="d-flex">
          <div className="dropdown ms-5">
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
          <div className="dropdown mx-4">
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
        </div>
      </div>
    </div>
  );
}
