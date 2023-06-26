import React, { useState, useEffect } from "react";
import { BsSendCheck } from "react-icons/bs";
import axios from "axios";
export default function Comments() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  function makeComment(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    var currentdate = new Date();
    var datetime =
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("title", "comment");
    formData.append("date", datetime);
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/createComment", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              setCommentList(...commentList, response.data.comment);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  }
  useEffect(() => {
    const getComment = async () => {
      comments();
    };
    getComment();
  }, []);
  const comments = async () => {
    let token = localStorage.getItem("token");
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        axios
          .get("http://localhost:8000/" + "api/viewComment", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            async (response) => {
              if (response.data.comment) {
                setCommentList(response.data.comment);
              } else {
                console.log(response.data.message);
              }
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };

  return (
    <div className="ms-3 rounded my-4 bg-white me-5 comment">
      <div className="mx-5 py-3 border-bottom">
        <i className="rounder3 bg-secondary"></i>
        <i className="ms-3 fs-5">user one</i>
      </div>
      <div className="comment-box mt-5 mx-5">
        {commentList.map((comm) => (
          <div
            key={comm.id}
            className="bg-secondary text-white rounded p-3 mb-3 ">
            {comm.comment}
          </div>
        ))}
      </div>
      <form onSubmit={makeComment}>
        <div className="border d-flex mx-5">
          <div className="col-10 me-5">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="write Your Comment Here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}></input>
          </div>
          <button className="btn btn-dark col-1">
            <i>
              <BsSendCheck></BsSendCheck>
            </i>
          </button>
        </div>
      </form>
    </div>
  );
}
