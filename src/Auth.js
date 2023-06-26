import React from "react";
import { useNavigate } from "react-router-dom";
export default function Auth() {
  let history = useNavigate();
  const auth = () => {
    history(-1);
  };
  return (
    <div className="container mt-5">
      <div className="container mt-5">
        You are not Allowed to see this page...........!
        <div className="">Let's get you back online!</div>
      </div>
      <button className="btn btn-link" onClick={auth}>
        Click here to go back to
      </button>
    </div>
  );
}
