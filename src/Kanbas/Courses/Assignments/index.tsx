import React from 'react';
import { FaPlus, FaEllipsisV, FaSearch } from 'react-icons/fa';
import { MdOutlineAssignment } from 'react-icons/md';
import { BsGripVertical, BsThreeDotsVertical } from 'react-icons/bs';

import GreenCheckmark from '../Modules/GreenCheckmark';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50 position-relative">
          <input type="text" id="wd-search-assignment" placeholder="Search..." className="form-control ps-5" />
          <FaSearch className="search-icon" />
        </div>
        <div className="d-flex align-items-center">
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary btn-sm me-2">
            <FaPlus className="button-icon" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger btn-sm">
            <FaPlus className="button-icon" /> Assignment
          </button>
        </div>
      </div>
      <ul className="list-group p-0">
        <li id="assignments-header" className="d-flex justify-content-between align-items-center list-group-item p-0">
          <div className="d-flex align-items-center p-3 ps-2">
            <BsGripVertical className="me-2 fs-3" />
            <h2 className="mb-0">Assignments</h2>
          </div>
          <div className="d-flex align-items-center pe-3">
            <span className="percentage-badge">40% of Total</span>
            <div className="icon-button">
              <FaPlus />
            </div>
            <div className="icon-button">
              <FaEllipsisV />
            </div>
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray position-relative">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
            <div>
              <a className="wd-assignment-link fs-5 d-block" href="#/Kanbas/Courses/1234/Assignments/123">
                <MdOutlineAssignment className="me-2 text-success" />
                A1 - ENV + HTML
              </a>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 22 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="d-flex align-items-center ms-2">
              <GreenCheckmark />
              <BsThreeDotsVertical className="fs-4 text-secondary" />
            </div>
          </div>
          <div className="border-start border-3 border-success position-absolute top-0 bottom-0 start-0"></div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray position-relative">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
            <div>
              <a className="wd-assignment-link fs-5 d-block" href="#/Kanbas/Courses/1234/Assignments/123">
                <MdOutlineAssignment className="me-2 text-success" />
                A2 - CSS + Bootstrap
              </a>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 22 at 12:00am | <strong>Due</strong> Jun 5 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="d-flex align-items-center ms-2">
              <GreenCheckmark />
              <BsThreeDotsVertical className="fs-4 text-secondary" />
            </div>
          </div>
          <div className="border-start border-3 border-success position-absolute top-0 bottom-0 start-0"></div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray position-relative">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
            <div>
              <a className="wd-assignment-link fs-5 d-block" href="#/Kanbas/Courses/1234/Assignments/123">
                <MdOutlineAssignment className="me-2 text-success" />
                A3 - JavaScript + React
              </a>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Jun 5 at 12:00am | <strong>Due</strong> Jun 19 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="d-flex align-items-center ms-2">
              <GreenCheckmark />
              <BsThreeDotsVertical className="fs-4 text-secondary" />
            </div>
          </div>
          <div className="border-start border-3 border-success position-absolute top-0 bottom-0 start-0"></div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray position-relative">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
            <div>
              <a className="wd-assignment-link fs-5 d-block" href="#/Kanbas/Courses/1234/Assignments/123">
                <MdOutlineAssignment className="me-2 text-success" />
                A4 - State & Redux
              </a>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Jun 19 at 12:00am | <strong>Due</strong> Jul 3 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="d-flex align-items-center ms-2">
              <GreenCheckmark />
              <BsThreeDotsVertical className="fs-4 text-secondary" />
            </div>
          </div>
          <div className="border-start border-3 border-success position-absolute top-0 bottom-0 start-0"></div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray position-relative">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
            <div>
              <a className="wd-assignment-link fs-5 d-block" href="#/Kanbas/Courses/1234/Assignments/123">
                <MdOutlineAssignment className="me-2 text-success" />
                A5 - Node + Session
              </a>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Jul 3 at 12:00am | <strong>Due</strong> Jul 17 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="d-flex align-items-center ms-2">
              <GreenCheckmark />
              <BsThreeDotsVertical className="fs-4 text-secondary" />
            </div>
          </div>
          <div className="border-start border-3 border-success position-absolute top-0 bottom-0 start-0"></div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 fs-5 border-gray position-relative">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3 text-secondary" />
            <div>
              <a className="wd-assignment-link fs-5 d-block" href="#/Kanbas/Courses/1234/Assignments/123">
                <MdOutlineAssignment className="me-2 text-success" />
                A6 - MongoDB + Mongoose
              </a>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> Jul 17 at 12:00am | <strong>Due</strong> Jul 31 at 11:59pm | 100 pts
              </div>
            </div>
            <div className="d-flex align-items-center ms-2">
              <GreenCheckmark />
              <BsThreeDotsVertical className="fs-4 text-secondary" />
            </div>
          </div>
          <div className="border-start border-3 border-success position-absolute top-0 bottom-0 start-0"></div>
        </li>
      </ul>
    </div>
  );
}