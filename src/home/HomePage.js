import React from "react";
import photo from "./image/school gril.jpg";
export default function () {
  return (
    <div>
      <div className="d-flex flex-wrap container justify-content-center mt-4">
        <div className="fs-1 widths">
          <div className=" fw-bolder">A community with high</div>{" "}
          <div className="colorings fw-bolder">expectation and high</div>{" "}
          <div className="fw-bolder">academic achievement</div>
        </div>
        <div className="back_image mx-5">
          <img src={photo} alt="no image" className=""></img>
        </div>
      </div>
    </div>
  );
}
