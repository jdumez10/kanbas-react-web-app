import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { courses } from "../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  // Extract the section name from the pathname
  const sectionName = pathname.split("/")[4];
  const formattedSectionName = sectionName ? sectionName.charAt(0).toUpperCase() + sectionName.slice(1) : '';

  return (
    <div id="wd-courses">
      {course && (
        <h2 className="text-danger">
          <FontAwesomeIcon icon={faAlignJustify} className="me-4 fs-4 mb-1" />
          {course.name}
          {formattedSectionName && ` > ${formattedSectionName}`}
        </h2>
      )}
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
  );
}
