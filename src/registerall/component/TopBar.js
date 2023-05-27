import React from "react";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";
export default function TopBar({ title }) {
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
                <Link class="dropdown-item" href="#">
                  Logout
                </Link>
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
