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
import Registerall from "./registerall/Registerall";
import AddStudent from "./registerall/AddStudent";
import Announcement from "./registerall/Announcement";
import Comment from "./registerall/Comment";
import Subjects from "./admin/component/Subjects";
import Teacher from "./teacher/Teacher";
import Grade from "./teacher/component/Grade";
import TeacherAttendance from "./teacher/component/TeacherAttendance";
import CreateAssessment from "./teacher/component/CreateAssessment";
import Complian from "./teacher/component/Complian";
import DetialAttendance from "./admin/component/DetialAttendance";
import AttendDetial from "./teacher/component/AttendDetial";
import Family from "./family/Family";
import PrintStud from "./registerall/component/PrintStud";
import Auth from "./Auth";
import PrintFam from "./family/printFam";
import Assessment from "./family/component/Assessment";
import AssessPage from "./family/AssessPage";

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
        <Route path="/subject" element={<Subjects />} />
        <Route path="/print" element={<PrintPass />}></Route>
        <Route path="/detial" element={<DetialAttendance />}></Route>
        <Route path="/anAuthenticated" element={<Auth />}></Route>
        {
          //Register Route
        }
        <Route path="/registerall" element={<Registerall />}></Route>
        <Route path="/add_Student" element={<AddStudent />}></Route>
        <Route path="/announcement" element={<Announcement />}></Route>
        <Route path="/comment" element={<Comment />}></Route>
        <Route path="/printstud" element={<PrintStud />}></Route>
        {
          //Teacher Route
        }
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/fillmark" element={<Grade />} />
        <Route path="/teacherAttendance" element={<TeacherAttendance />} />
        <Route path="/manageAssessment" element={<CreateAssessment />} />
        <Route path="/viewComplian" element={<Complian />} />
        <Route path="/teacherDetial/:id" element={<AttendDetial />} />

        {
          //Family Route
        }
        <Route path="/family" element={<Family />} />
        <Route path="/printFamily" element={<PrintFam />} />
        <Route path="/familyAssessment" element={<AssessPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
