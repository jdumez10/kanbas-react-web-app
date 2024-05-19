export default function Dashboard() { 
    return ( 
      <div id="wd-dashboard"> 
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr /> 
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr /> 
        
        <div id="wd-dashboard-courses"> 
            {/*Couse 1*/}
            <div className="wd-dashboard-course"> 
                <img src="/images/cs5001_logo.jpg" width={200} /> 
                <div> 
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/5001/Home"> 
                    CS5001 Foundations in CS
                </a> 
                <p className="wd-dashboard-course-title"> 
                    Intensive Foundations in CS 
                </p> 
                <a href="#/Kanbas/Courses/5001/Home"> Go </a> 
                </div> 
            </div> 
            {/*Couse 2*/}
            <div className="wd-dashboard-course"> 
                <img src="/images/cs5002_logo.jpg" width={200} /> 
                <div> 
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/5002/Home"> 
                    CS5002 Discrete  
                </a> 
                <p className="wd-dashboard-course-title"> 
                    Discrete Structures
                </p> 
                <a href="#/Kanbas/Courses/5002/Home"> Go </a> 
                </div> 
            </div> 
            {/*Couse 3*/}
            <div className="wd-dashboard-course"> 
                <img src="/images/cs5004_logo.jpg" width={200} /> 
                <div> 
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/5004/Home"> 
                    CS5004 OOD
                </a> 
                <p className="wd-dashboard-course-title"> 
                    Object Oriented Design
                </p> 
                <a href="#/Kanbas/Courses/5004/Home"> Go </a> 
                </div> 
            </div>
            {/*Couse 4*/}
            <div className="wd-dashboard-course"> 
                <img src="/images/cs5008_logo.jpg" width={200} /> 
                <div> 
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/5008/Home"> 
                    CS5008 Data Structures
                </a> 
                <p className="wd-dashboard-course-title"> 
                    Data Str, Algo & App in Cmp Sys
                </p> 
                <a href="#/Kanbas/Courses/5008/Home"> Go </a> 
                </div> 
            </div>
            {/*Couse 5*/}
            <div className="wd-dashboard-course">
                <img src="/images/cs5800_logo.jpg" width={200} /> 
                <div> 
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/5800/Home"> 
                    CS5800 Algo
                </a> 
                <p className="wd-dashboard-course-title"> 
                    Algorithms
                </p> 
                <a href="#/Kanbas/Courses/5800/Home"> Go </a> 
                </div> 
            </div>
            {/*Couse 6*/}
            <div className="wd-dashboard-course">
                <img src="/images/cs5200_logo.jpg" width={200} /> 
                <div> 
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/5200/Home"> 
                    CS5200 DBMS 
                </a> 
                <p className="wd-dashboard-course-title"> 
                    Database Management Systems
                </p> 
                <a href="#/Kanbas/Courses/5200/Home"> Go </a> 
                </div> 
            </div>
            {/*Couse 7*/}
            <div className="wd-dashboard-course">
                <img src="/images/cs5610_logo.jpg" width={200} /> 
                <div> 
                <a className="wd-dashboard-course-link" 
                    href="#/Kanbas/Courses/5610/Home"> 
                    CS5610 WebDev 
                </a> 
                <p className="wd-dashboard-course-title"> 
                    Web Development
                </p> 
                <a href="#/Kanbas/Courses/5610/Home"> Go </a> 
                </div>     
            </div> 
        </div> 
      </div> 
);}     