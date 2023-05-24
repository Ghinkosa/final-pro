import React from "react";

export default function Attendance() {
  return (
    <div className="bg-light">
      <div className="m-4 border border-success">
        <div className="bg-success py-2 px-2">Attendance</div>
        <div>
          <form className="d-flex">
            <div class="input-group m-3 w-25">
              <span class="input-group-text" id="basic-addon1">
                Session Year
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Session year"
                aria-label="Username"
                aria-describedby="basic-addon1"></input>
            </div>
            <div class="input-group m-3 w-25">
              <span class="input-group-text" id="basic-addon1">
                date
              </span>
              <input
                type="date"
                class="form-control"
                placeholder="Session year"
                aria-label="Username"
                aria-describedby="basic-addon1"></input>
            </div>
            <button className="btn btn-primary m-3 ">
              View Class Attendance
            </button>
          </form>
        </div>
      </div>
      <div className="m-4">
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Student Id</th>
              <th scope="col">Name</th>
              <th scope="col">Class(session Year)</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">User-12512</th>
              <td>Galata Hinkosa</td>
              <td>2012</td>
              <td>present</td>
            </tr>
            <tr>
              <th scope="row">User-12512</th>
              <td>Galata Hinkosa</td>
              <td>2012</td>
              <td>present</td>
            </tr>
            <tr>
              <th scope="row">User-12512</th>
              <td>Galata Hinkosa</td>
              <td>2012</td>
              <td>present</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
