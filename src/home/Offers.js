import React from "react";
import photo from "./image/edu5.jpg";
import {
  FaBookOpen,
  FaCircleNotch,
  FaRegClipboard,
  FaUserPlus,
} from "react-icons/fa";
export default function Offers() {
  return (
    <div>
      <div className="fw-bolder  ms-5 mb-4">We Bring The Education To Life</div>
      <div className="d-flex flex-wrap offer me-5">
        <div>
          <img src={photo} alt="no image" className=""></img>
        </div>
        <div className="ms-5">
          <div className="fs-3 fw-bolder">Let Education Do The Working</div>
          <div>
            <div className="d-flex my-3">
              <div className="icon_border ms-2 ">
                <FaBookOpen color="green"></FaBookOpen>
              </div>
              <div className="ms-3">Free E-book, Videos and Kits</div>
            </div>
            <div className="d-flex my-3">
              <div className="icon_border ms-2 ">
                <FaCircleNotch color="green"></FaCircleNotch>
              </div>
              <div className="ms-3">Learn at your own pace</div>
            </div>
            <div className="d-flex my-3">
              <div className="icon_border ms-2 ">
                <FaRegClipboard color="green"></FaRegClipboard>
              </div>
              <div className="ms-3">
                Collaborate with different learners around the globe
              </div>
            </div>
            <div className="d-flex my-3">
              <div className="icon_border ms-2 ">
                <FaUserPlus color="green"></FaUserPlus>
              </div>
              <div className="ms-3">Top instructors around the globe</div>
            </div>
            <div className="d-flex my-3">
              <div className="icon_border ms-2 ">
                <FaBookOpen color="green"></FaBookOpen>
              </div>
              <div className="ms-3">Free E-book, Videos and Kits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
