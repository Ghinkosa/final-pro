import Admin from "./admin/Admin";
import "./App.css";
import Login from "./Login";
import {Routes, Route,useNavigate} from "react-router-dom";
import NotFound from "./NotFound";
import { useEffect } from "react";
import Students from "./admin/Students";

function App() {
  return (
    <div className="app-color">
      <Routes>
         <Route path="/" element={<Login />}/>
         <Route path="/dashboard" element={<Admin />}/>
         <Route path="/das" element={<Students />}/>
         <Route path="*" element={< NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
