import Admin from "./admin/Admin";
import "./App.css";
import Login from "./Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import { useEffect } from "react";
import AddTeachers from "./admin/component/AddTeachers";
import PrintPass from "./admin/component/PrintPass";
import { ManageClasses } from "./admin/component/ManageClasses";
import ManageSections from "./admin/component/ManageSections";
import Attendances from "./admin/component/Attendances";
import Home from "./home/Home";
import Register from "./family/Register";

function App() {
  return (
    <div className="app-color">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home">
          <Route index element={<Home />} />
        </Route>
        <Route path="/dashboard" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboa" element={<Admin />} />
        <Route path="/add_Teacher" element={<AddTeachers />} />
        <Route path="/manage_class" element={<ManageClasses />} />
        <Route path="/manage_section" element={<ManageSections />} />
        <Route path="/attendance" element={<Attendances />} />
        <Route path="/print" element={<PrintPass />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
