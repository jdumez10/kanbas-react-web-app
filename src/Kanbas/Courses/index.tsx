import CoursesNavigation from "./Navigation"; 
import Modules from "./Modules"; 
import Home from "./Home"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import Assignments from "./Assignments"; 
import AssignmentEditor from "./Assignments/Editor"; 
import Grades from "./Grades"; 
import { Navigate, Route, Routes } from "react-router";
 
export default function Courses() { 
  return ( 
    <div id="wd-courses"> 
      <h2 className="text-danger">
        <FontAwesomeIcon icon={faAlignJustify}  className="me-4 fs-4 mb-1" />
        Course Main Menu
      </h2>

      <hr /> 
      <div className="d-flex">
        <div className="d-none d-md-block">
            <CoursesNavigation /> 
        </div>
        <div className="flex-fill">
            <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div> 
);} 