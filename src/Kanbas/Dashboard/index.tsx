import { FaEllipsisV } from 'react-icons/fa'
import { MdOutlineAssignment } from "react-icons/md";


export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

            <div id="wd-dashboard-courses" className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {/* Course 1 */}
                    <div className="wd-dashboard-course col">
                        <div className="card">
                            <FaEllipsisV className="three-dots-menu" />
                            <img src="/images/cs5001_logo.jpg" className="card-img-top" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5001/Home">
                                    CS5001 Foundations in CS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Intensive Foundations in CS
                                </p>
                                <p className="course-info">2022_2 Fall Semester Full Term</p>
                                <MdOutlineAssignment className="assignment-icon" href="#/Kanbas/Courses/5001/Assignments" />
                            </div>
                        </div>
                    </div>
                    {/* Repeat for other courses */}
                    <div className="wd-dashboard-course col">
                        <div className="card">
                            <FaEllipsisV className="three-dots-menu" />
                            <img src="/images/cs5002_logo.jpg" className="card-img-top" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5002/Home">
                                    CS5002 Discrete
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Discrete Structures
                                </p>
                                <p className="course-info">2022_2 Fall Semester Full Term</p>
                                <MdOutlineAssignment className="assignment-icon" href="#/Kanbas/Courses/5002/Assignments" />
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col">
                        <div className="card">
                            <FaEllipsisV className="three-dots-menu" />
                            <img src="/images/cs5004_logo.jpg" className="card-img-top" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5004/Home">
                                    CS5004 OOD
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Object Oriented Design
                                </p>
                                <p className="course-info">2023_1 Spring Semester Full Term</p>
                                <MdOutlineAssignment className="assignment-icon" href="#/Kanbas/Courses/5004/Assignments" />
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col">
                        <div className="card">
                            <FaEllipsisV className="three-dots-menu" />
                            <img src="/images/cs5008_logo.jpg" className="card-img-top" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5008/Home">
                                    CS5008 Data Structures
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Data Str, Algo & App in Cmp Sys
                                </p>
                                <p className="course-info">2023_1 Spring Semester Full Term</p>
                                <MdOutlineAssignment className="assignment-icon" href="#/Kanbas/Courses/5008/Assignments" />
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col">
                        <div className="card">
                            <FaEllipsisV className="three-dots-menu" />
                            <img src="/images/cs5800_logo.jpg" className="card-img-top" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5800/Home">
                                    CS5800 Algo
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Algorithms
                                </p>
                                <p className="course-info">2023_1 Summer Semester Full Term</p>
                                <MdOutlineAssignment className="assignment-icon" href="#/Kanbas/Courses/5800/Assignments" />
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col">
                        <div className="card">
                            <FaEllipsisV className="three-dots-menu" />
                            <img src="/images/cs5200_logo.jpg" className="card-img-top" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5200/Home">
                                    CS5200 DBMS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Database Management Systems
                                </p>
                                <p className="course-info">2023_2 Fall Semester Full Term</p>
                                <MdOutlineAssignment className="assignment-icon" href="#/Kanbas/Courses/5200/Assignments" />
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col">
                        <div className="card">
                            <FaEllipsisV className="three-dots-menu" />
                            <img src="/images/cs5610_logo.jpg" className="card-img-top" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5610/Home">
                                    CS5610 WebDev
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Web Development
                                </p>
                                <p className="course-info">2024_1 Summer Semester Full Term</p>
                                <MdOutlineAssignment className="assignment-icon" href="#/Kanbas/Courses/5610/Assignments" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}