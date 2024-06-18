import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as db from '../Database';

export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="wd-dashboard-course col">
                            <div className="card">
                                <FaEllipsisV className="three-dots-menu" />
                                <img src={course.image} className="card-img-top" alt={course.name} />
                                <div className="card-body">
                                    <Link className="wd-dashboard-course-link" to={`/Kanbas/Courses/${course._id}/Home`}>
                                        {course.name}
                                    </Link>
                                    <p className="wd-dashboard-course-title card-text">
                                        {course.description}
                                    </p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary btn-small">
                                        Go
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}