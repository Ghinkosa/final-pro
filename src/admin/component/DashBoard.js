import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookReader,
  FaBookOpen,
  FaUserTie,
  FaTrash,
} from "react-icons/fa";
import { MdOutlineRestore } from "react-icons/md";
import { useEffect, useState } from "react";
import axios, { toFormData } from "axios";
import AddTeacher from "./AddTeacher";
export const DashBoard = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPage] = useState(6);
  const [loading, setLoading] = useState(true);
  const [form_id, setForm_id] = useState(-1);
  const pages = [];
  const [addTeacher, setAddTeacher] = useState(false);
  let history = useNavigate();
  const addTeach = () => {
    history("/add_Teacher");
  };
  //for pagination
  for (let i = 1; i <= Math.ceil(post.length / postPage); i++) {
    pages.push(i);
  }
  const nextpage = (a) => {
    setCurrentPage(a);
  };
  const previes = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const lastPost = currentPage * postPage;
  const firstPost = lastPost - postPage;
  const currenPosts = post.slice(firstPost, lastPost);

  //on load data fetching
  useEffect(() => {
    const getPost = async () => {
      teacherList();
      setLoading(false);
    };
    getPost();
  }, []);

  //fetch data of teacher list from backend
  const teacherList = async () => {
    let token = localStorage.getItem("token");
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        axios
          .get("http://localhost:8000/" + "api/teacherList", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            async (response) => {
              setPost(response.data.user);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };
  /*used to hundle form input*/
  function hundleName(e, id) {
    const newUser = post.map((li) =>
      li.id === id ? { ...li, [e.target.name]: e.target.value } : li
    );
    setPost(newUser);
  }
  function makeUpdate(us_id) {}
  //used to indicate the form to be updated
  function toForms(users_id) {
    setForm_id(users_id);
  }

  return (
    <div className="">
      {addTeacher ? (
        <div className="ms-5">
          <AddTeacher />
        </div>
      ) : (
        <div>
          <div className="fs-2 ms-5 text-dark">DashBoard</div>
          {loading ? (
            <>loading......</>
          ) : (
            <div>
              <div className="d-flex flex-wrap">
                <div className="card box-sizes d-flex flex-row border-card-1">
                  <div className="my-auto ps-4">
                    <FaUserGraduate size={40} color="#ec5782" />
                  </div>
                  <div className="card-body">
                    <div className="card-title m-auto ms-3 fs-5 dashboard-color">
                      Student
                    </div>
                    <div className="card-subtitle ms-3 fs-3 dashboard-color">
                      3345
                    </div>
                  </div>
                </div>
                <div className="card box-sizes d-flex flex-row border-card-2">
                  <div className="my-auto ps-4">
                    <FaChalkboardTeacher size={40} color="#294BF9" />
                  </div>
                  <div className="card-body">
                    <div className="card-title m-auto ms-3 fs-5 dashboard-color-t">
                      Teacher
                    </div>
                    <div className="card-subtitle ms-3 fs-3 dashboard-color-t">
                      345
                    </div>
                  </div>
                </div>
                <div className="card box-sizes d-flex flex-row border-card-3">
                  <div className="my-auto ps-4">
                    <FaBookReader size={40} color="#554D00" />
                  </div>
                  <div className="card-body">
                    <div className="card-title m-auto ms-3 fs-5 dashboard-color-c">
                      Class and Section
                    </div>
                    <div className="card-subtitle ms-3 fs-3 dashboard-color-c">
                      45
                    </div>
                  </div>
                </div>
                <div className="card box-sizes d-flex flex-row border-card-1">
                  <div className="my-auto ps-4">
                    <FaBookOpen size={40} color="#3300FF" />
                  </div>
                  <div className="card-body">
                    <div className="card-title m-auto ms-3 fs-5 dashboard-color-s">
                      Subject
                    </div>
                    <div className="card-subtitle ms-3 fs-3 dashboard-color-s">
                      45
                    </div>
                  </div>
                </div>
              </div>

              <div className="ms-5 mt-5 ">
                <div className="p-4 fs-3 text-dark d-flex ">
                  <div className="me-auto">Teacher List</div>
                  <button
                    className="btn btn-primary"
                    onClick={() => addTeach()}>
                    Add Teacher
                  </button>
                </div>
                <div className="contianer me-5">
                  <table className="table table-striped table-success">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">user_id</th>
                        <th scope="col">phone</th>
                        <th scope="col">email</th>
                        <th scope="col">photo</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>

                    <tbody className="">
                      {currenPosts.map((post) => (
                        <tr key={post.id}>
                          <th>{post.id}</th>
                          <td>
                            <input
                              type="text"
                              name="name"
                              value={post.name}
                              className="form-control form-control form-control-sm transparent1"
                              onChange={(e) => hundleName(e, post.id)}
                            />
                          </td>
                          <td>{post.user_id}</td>
                          <td>
                            <input
                              type="text"
                              name="phone"
                              value={post.phone}
                              className="form-control form-control form-control-sm transparent1"
                              onChange={(e) => hundleName(e, post.id)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="email"
                              value={post.email}
                              className="form-control form-control form-control-sm transparent1"
                              onChange={(e) => hundleName(e, post.id)}
                            />
                          </td>
                          <td>
                            <FaUserTie></FaUserTie>
                          </td>
                          <td className="">
                            <div className="d-flex mt-1">
                              <FaTrash color="red" size={20} />
                              <MdOutlineRestore
                                color="#20D7D7"
                                size={25}
                                className="ms-3"
                                onClick={() => makeUpdate(post.id)}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mx-auto">
                  <ul className="pagination">
                    <a onClick={() => previes()} href="#" className="page-link">
                      Prev
                    </a>
                    {pages.map((page) => (
                      <li key={page} className="page-item">
                        <a
                          onClick={() => nextpage(page)}
                          href="#"
                          className="page-link">
                          {page}
                        </a>
                      </li>
                    ))}
                    <a
                      onClick={() => nextPage()}
                      href="#"
                      className="page-link">
                      Next
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
