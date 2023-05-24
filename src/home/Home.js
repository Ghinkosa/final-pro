import React, { useState } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Portifilo from "./Portifilo";
import Offers from "./Offers";
import Footer from "./Footer";
import Contact from "./Contact";
import Model from "react-modal";
import Login from "../Login";
export default function Home() {
  const [model, setModel] = useState(false);
  function modelfunction(value) {
    setModel(value);
  }
  return (
    <div>
      <NavBar modelfunction={modelfunction}></NavBar>
      <HomePage></HomePage>
      <Portifilo></Portifilo>
      <Offers></Offers>
      <Contact></Contact>
      <Footer></Footer>
      <Model isOpen={model}>
        <Login modelfunction={modelfunction}></Login>
      </Model>
    </div>
  );
}
