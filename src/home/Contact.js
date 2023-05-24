import React from "react";
import { FaMailBulk, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import photo from "./image/edu9.png";
export default function Contact() {
  return (
    <div>
      <div className="pb-5">
        <div className="contact-title my-3">Contact Us</div>
        <div className="contact-title-border"></div>
        <div className="contact-body d-flex flex-wrap">
          <div className="contact-left mt-5">
            <div className="my-4 fw-bolder ms-3">Contact Information</div>
            <div className="d-flex mb-3">
              <div className="icon_border ms-2 ">
                <FaPhone color="green"></FaPhone>
              </div>
              <div className="ms-3">+251964209800</div>
            </div>
            <div className=" d-flex mb-3">
              <div className="icon_border ms-2 ">
                <FaMailBulk color="green"></FaMailBulk>
              </div>
              <div className="ms-3">safa1231@gmail.com</div>
            </div>
            <div className=" d-flex mb-3">
              <div className="icon_border ms-2 ">
                <FaMapMarkerAlt color="green"></FaMapMarkerAlt>
              </div>
              <div className="ms-3">Adama Ethiopia, 04</div>
            </div>
            <div className="photo9">
              <img
                src={photo}
                alt="no image"
                className="border border-primary"></img>
            </div>
          </div>
          <div className="contact-right">
            <form className="">
              <div className="my-3 fw-bolder">Leave Us A Comment</div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Robert lasser"></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Comment here
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="type your comment"
                  rows="3"></textarea>
              </div>
              <button className="btn btn-primary">send Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
