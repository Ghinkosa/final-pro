import React from "react";

export default function Assessment() {
  return (
    <div className="mt-5 container">
      <div className="container">
        <div>Student Result</div>
        <div>Student Name: galata</div>
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">maths</option>
          <option value="2">Chemistery</option>
          <option value="3">Biology</option>
        </select>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Assesements</th>
              <th>Maximum Result</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assesement 1</td>
              <td>25</td>
              <td>19</td>
            </tr>
            <tr>
              <td>Assesement 2</td>
              <td>30</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Assesement 3</td>
              <td>45</td>
              <td>35</td>
            </tr>
            <tr>
              <td>
                <i>
                  <b>Total</b>
                </i>
              </td>
              <td></td>
              <td>
                <b>64/100</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
