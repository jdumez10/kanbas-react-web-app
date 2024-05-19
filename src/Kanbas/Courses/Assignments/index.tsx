export default function Assignments() { 
    return ( 
    <div id="wd-assignments"> 
        <input id="wd-search-assignment" 
        placeholder="Search for Assignments" /> 
        <button id="wd-add-assignment-group">+ Group</button> 
        <button id="wd-add-assignment">+ Assignment</button> 
        <h3 id="wd-assignments-title"> 
            ASSIGNMENTS 40% of Total <button>+</button> 
        </h3> 
        <ul id="wd-assignment-list"> 
            <li className="wd-assignment-list-item"> 
                <a className="wd-assignment-link" 
                href="#/Kanbas/Courses/1234/Assignments/123"> 
                A1 - ENV + HTML 
                </a>
                <div>
                    Multiple Modules| <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 22 at 11:59pm | 100 pts
                </div>
            </li> 
            <li className="wd-assignment-list-item"> 
                <a className="wd-assignment-link" 
                href="#/Kanbas/Courses/1234/Assignments/123"> 
                A2 - CSS + Bootstrap 
                </a>
                <div>
                    Multiple Modules| <strong>Not available until</strong> May 22 at 12:00am | <strong>Due</strong> Jun 5 at 11:59pm | 100 pts
                </div>
            </li> 
            <li className="wd-assignment-list-item"> 
                <a className="wd-assignment-link" 
                href="#/Kanbas/Courses/1234/Assignments/123"> 
                A3 - JavaScript + React 
                </a>
                <div>
                    Multiple Modules| <strong>Not available until</strong> Jun 5 at 12:00am | <strong>Due</strong> Jun 19 at 11:59pm | 100 pts
                </div>
            </li> 
            <li className="wd-assignment-list-item"> 
                <a className="wd-assignment-link" 
                href="#/Kanbas/Courses/1234/Assignments/123"> 
                A4 - State & Redux 
                </a>
                <div>
                    Multiple Modules| <strong>Not available until</strong> Jun 19 at 12:00am | <strong>Due</strong> Jul 3 at 11:59pm | 100 pts
                </div>
            </li> 
            <li className="wd-assignment-list-item"> 
                <a className="wd-assignment-link" 
                href="#/Kanbas/Courses/1234/Assignments/123"> 
                A5 - Node + Session 
                </a>
                <div>
                    Multiple Modules| <strong>Not available until</strong> Jul 3 at 12:00am | <strong>Due</strong> Jul 17 at 11:59pm | 100 pts
                </div>
            </li> 
            <li className="wd-assignment-list-item"> 
                <a className="wd-assignment-link" 
                href="#/Kanbas/Courses/1234/Assignments/123"> 
                A6 - MongoDB + Mongoose 
                </a>
                <div>
                    Multiple Modules| <strong>Not available until</strong> Jul 17 at 12:00am | <strong>Due</strong> Jul 31 at 11:59pm | 100 pts
                </div>
            </li> 
        </ul> 
</div> 
);} 