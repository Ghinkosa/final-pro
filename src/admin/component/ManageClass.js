import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdOutlineRestore } from "react-icons/md";
import AddClassForm from "./AddClassForm";
export default function ManageClass(data) {
  const [addForm, setAddForm] = useState(false);
  const [classList, setClassLiist] = useState([
    { id: "CLASS-0021", class: "2011-2012" },
    { id: "CLASS-0022", class: "2012-2013" },
  ]);
  const changeForm = () => {
    if (addForm === true) {
      setAddForm(false);
    } else {
      setAddForm(true);
    }
  };
  function addNewClass(sessionYear) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newObj = { id, ...sessionYear };
    setClassLiist([...classList, newObj]);
  }
  return (
    <div className="mx-4">
      <div className="mt-4">Manage Class(Session Year)</div>
      <div className="bg-white mt-5 pt-3">
        <div className="d-flex mb-3">
          <div className=" ms-3 fs-3 me-auto">Class or Session List</div>
          <div>
            {addForm ? (
              <button className="btn btn-primary  me-3" onClick={changeForm}>
                Close Add Class
              </button>
            ) : (
              <button className="btn btn-primary  me-3" onClick={changeForm}>
                Open Add Class
              </button>
            )}
          </div>
        </div>
        {addForm ? <AddClassForm addNewClass={addNewClass} /> : <></>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Class ID</th>
              <th scope="col">Class or session year</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {classList.map((list) => (
              <tr key={list.id}>
                <th scope="row">1</th>
                <td>{list.id}</td>
                <td>{list.class}</td>
                <td>
                  <button className="btn btn-danger btn-sm me-2">
                    {" "}
                    <FaTrash size={15} color="white" />
                  </button>
                  <button className="btn btn-primary btn-sm">
                    {" "}
                    <MdOutlineRestore size={17} color="white" />
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row">1</th>
              <td>CLASS-000231</td>
              <td>2008-2009</td>
              <td>
                <button className="btn btn-danger btn-sm me-2">
                  {" "}
                  <FaTrash size={15} color="white" />
                </button>
                <button className="btn btn-primary btn-sm">
                  {" "}
                  <MdOutlineRestore size={17} color="white" />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>CLASS-000231</td>
              <td>2008-2009</td>
              <td>
                <button className="btn btn-danger btn-sm me-2">
                  {" "}
                  <FaTrash size={15} color="white" />
                </button>
                <button className="btn btn-primary btn-sm">
                  {" "}
                  <MdOutlineRestore size={17} color="white" />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>CLASS-000231</td>
              <td>2008-2009</td>
              <td>
                <button className="btn btn-danger btn-sm me-2">
                  {" "}
                  <FaTrash size={15} color="white" />
                </button>
                <button className="btn btn-primary btn-sm">
                  {" "}
                  <MdOutlineRestore size={17} color="white" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
