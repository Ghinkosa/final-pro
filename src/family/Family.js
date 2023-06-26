import React from "react";
import NavBar from "./component/NavBar";
import Footer from "../home/Footer";
import DetialAttendance from "../teacher/component/DetialAttendance";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DetialAttendace from "./component/DetialAttendace";
import axios from "axios";
export default function Family() {
  let history = useNavigate();
  const auth = () => {
    if (localStorage.getItem("role") != "family") {
      history("/anAuthenticated");
    } else {
      Register();
    }
  };

  const Register = (event) => {
    let token = localStorage.getItem("token");
    let fname = localStorage.getItem("user_id");
    const formData = new FormData();
    formData.append("user_id", fname);

    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios
      .get("http://localhost:8000" + "/sanctum/csrf-cookie")
      .then((response) => {
        //console.log(response);
        // LOGIN
        axios
          .post("http://localhost:8000/" + "api/getIdOfStud", formData, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(
            (response) => {
              localStorage.setItem("stud_id", response.data.user_id);
            },
            (error) => {
              console.log(error);
            }
          );
      });
  };

  useEffect(() => {
    const getPost = async () => {
      auth();
    };
    getPost();
  }, []);
  return (
    <div>
      <NavBar active="3"></NavBar>
      <div className="family-bg ">
        <DetialAttendace></DetialAttendace>
        <Footer></Footer>
      </div>
    </div>
  );
}
