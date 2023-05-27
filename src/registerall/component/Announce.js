import React from "react";
import { TfiMore } from "react-icons/tfi";
export default function Announce() {
  return (
    <div className="ms-3 me-5 mt-5 bg-white px-5 pb-3">
      <div className="fs-3 my-3 pt-2">List Of Announcements</div>
      <table class="table table-striped ">
        <thead>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>12/12/2021</td>
            <td>To Announce No Class</td>
            <td>
              Due date date or science home work{" "}
              <i className=" ms-1 mt-2">
                <TfiMore size={20} color="red" />
              </i>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>12/12/2021</td>
            <td>To Announce No Class</td>
            <td>
              Due date date or science home work{" "}
              <i className=" ms-1 mt-2">
                <TfiMore size={20} color="red" />
              </i>{" "}
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>12/12/2021</td>
            <td>To Announce No Class</td>
            <td>
              Due date date or science home work{" "}
              <i className=" ms-1 mt-2">
                <TfiMore size={20} color="red" />
              </i>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
