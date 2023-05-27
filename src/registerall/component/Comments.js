import React from "react";
import { BsSendCheck } from "react-icons/bs";
export default function Comments() {
  return (
    <div className="ms-3 rounded my-4 bg-white me-5 comment">
      <div className="mx-5 py-3 border-bottom">
        <i className="rounder3 bg-secondary"></i>
        <i className="ms-3 fs-5">user one</i>
      </div>
      <div className="comment-box mt-5 mx-5">
        <div className="bg-secondary text-white rounded p-3 mb-3 d-inline-flex">
          please make sure you do care for our child
        </div>
        <div className="bg-secondary text-white rounded p-2 mb-3 d-inline-flex">
          do care for our child
        </div>
        <div className="bg-secondary text-white rounded p-2 mb-3 d-inline-flex">
          do care for our child for our child
        </div>
      </div>
      <div className="border d-flex mx-5">
        <div class="col-10 me-5">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="write Your Comment Here"></input>
        </div>
        <button className="btn btn-dark col-1">
          <i>
            <BsSendCheck></BsSendCheck>
          </i>
        </button>
      </div>
    </div>
  );
}
