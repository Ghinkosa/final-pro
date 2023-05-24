import React from "react";
import photo from "./image/edu1.jpg";
import photo1 from "./image/edu2.jpg";
import photo2 from "./image/edu3.jpg";
import photo3 from "./image/edu4.jpg";
export default function Portifilo() {
  return (
    <div>
      <div className="ms-5 mt-5 fw-bolder">Learn A New Skill</div>
      <div className="d-flex flex-wrap all-portifilo px-5 pb-5">
        <div className="photo1">
          <img src={photo} alt="no image" className=""></img>
          <div>All You need In Bussiness Strategy</div>
        </div>
        <div className="photo1">
          <img src={photo1} alt="no image" className=""></img>
          <div>All You need In Bussiness Strategy</div>
        </div>
        <div className="photo1">
          <img src={photo2} alt="no image" className=""></img>
          <div>All You need In Bussiness Strategy</div>
        </div>
        <div className="photo1">
          <img src={photo3} alt="no image" className=""></img>
          <div>All You need In Bussiness Strategy</div>
        </div>
        <div className="photo1">
          <img src={photo1} alt="no image" className=""></img>
          <div>All You need In Bussiness Strategy</div>
        </div>
        <div className="photo1">
          <img src={photo3} alt="no image" className=""></img>
          <div>All You need In Bussiness Strategy</div>
        </div>
        <div className="photo1">
          <img src={photo2} alt="no image" className=""></img>
          <div>All You need In Bussiness Strategy</div>
        </div>
        <div className="photo1">
          <img src={photo} alt="no image" className=""></img>
          <div>All You need In Bussiness Strategy</div>
        </div>
      </div>
    </div>
  );
}
