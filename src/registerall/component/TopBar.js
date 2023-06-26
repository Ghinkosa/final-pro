import React from "react";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function TopBar({ title }) {
  let history = useNavigate();
  const logout = (e) => {
    let token = localStorage.getItem("token");
    const formData = new FormData();
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/logout", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              localStorage.removeItem("user_id");
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              history("/");
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };
  return (
    <div className="mt-3 ms-3 d-flex">
      <div className="fs-3 fw-bolder">{title}</div>
      <div className="ms-auto  me-5 d-flex mt-1">
        <div className="mt-1">
          <i className="rounder">
            <MdOutlineNotificationsActive size={20} color="black" />
          </i>
          <i className="rounder  ms-2 p-2">
            <IoSettingsOutline size={20} color="black" />
          </i>
        </div>

        <i>
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              user1
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button class="dropdown-item" onClick={logout}>
                  Logout
                </button>
              </li>
              <li>
                <Link class="dropdown-item" href="#">
                  change password
                </Link>
              </li>
            </ul>
          </div>
        </i>
        <i className="rounder1 bg-secondary ms-2"></i>
      </div>
    </div>
  );
}
