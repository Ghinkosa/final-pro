import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "./image/login1.jpg";
import axios from "axios";
function Login({ modelfunction }) {
  const [user_id, setUser_id] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      history("/dashboard");
    }
  }, []);
  /*async function loginTo(event){
        event.preventDefault();
        let item={user_id,password}
        let result= await fetch('http://localhost:8000/api/login',{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
                },
                body:JSON.stringify(item)
            })

            result=await result.json();

            //localStorage.setItem("user_info", JSON.stringify(result));
            //localStorage.setItem("token", 'result.token')
            console.log(result)
    }*/
  // REACT APP src/contexts/AppContext.js - login()
  const login = (event) => {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/login", {
            user_id: user_id,
            password: password,
          })
          .then(
            (response) => {
              console.log(response);
              if (response.data.user) {
                localStorage.setItem("user_id", response.data.user.user_id);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.user.role);
                history("/dashboard");
              } else {
                setError("incorrect user_id or password");
              }
              // GET USER
              // GET USER ERROR
              // LOGIN ERROR
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };

  return (
    <div className="m-auto d-flex flex-wrap">
      <div className="imgcontainer">
        <img src={photo} alt="Avatar" className="avatar"></img>
      </div>
      <div className="form-body mt-5">
        <form className=" m-auto bg-white p-4" onSubmit={login}>
          <div className="fw-bolder fs-4 mb-1">Sign in to your account</div>
          <div className=" mb-2">
            Don't have an account?
            <i className="text-danger border-bottom border-danger"> Sign up</i>
          </div>
          <div className="mb-3 row px-2">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <input
              className="form-control"
              value={user_id}
              onChange={(e) => setUser_id(e.target.value)}
              id="email"
              placeholder="Email"></input>
          </div>
          <div className="mb-3 row px-2">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              password
            </label>
            <input
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="password"></input>
          </div>
          <div className="d-flex my-4">
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"></input>
              <label className="form-check-label" for="flexCheckChecked">
                Remember me
              </label>
            </div>
            <div className="text-danger ms-auto">Forgot password?</div>
          </div>
          <button className="btn btn-danger w-100">Login</button>
          <button
            className="btn btn-white border border-danger w-100 mt-3"
            onClick={() => modelfunction(false)}>
            Cancel
          </button>
          <div>{error}</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
