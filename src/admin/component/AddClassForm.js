import React, { useState } from "react";

export default function (props) {
  const [sessionYear, setSessionYear] = useState("");
  const [error, setError] = useState("");
  function addclass(event) {
    event.preventDefault();
    if (sessionYear === "") {
      setError("this field is important");
      return;
    }
    props.addNewClass({ sessionYear });
  }
  return (
    <form className="d-flex ms-5" onSubmit={addclass}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Session year
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter Session Year"
          value={sessionYear}
          onChange={(e) => {
            setSessionYear(e.target.value);
          }}
        />
        {error && <div className="text-danger ms-3">{error}</div>}
      </div>
      <div className="pt-2">
        <button type="submit" className="btn btn-success ms-4 mt-4">
          Add Class
        </button>
      </div>
    </form>
  );
}
