import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import * as db from '../../Database';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find(assignment => assignment._id === aid);

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            {assignment && (
                <>
                    <div className="mb-3">
                        <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
                        <input id="wd-name" className="form-control" value={assignment.title} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="wd-description" className="form-label"><strong>Description</strong></label>
                        <div id="wd-description" className="form-control" contentEditable>
                            <p>The assignment is <span style={{ color: 'red' }}>available online</span></p>
                            <p>{assignment.description}</p>
                        </div>
                    </div>
                    <div className="row justify-content-end mb-3">
                        <div className="col-md-12 d-flex align-items-center">
                            <label htmlFor="wd-points" className="form-label frm me-1"><strong>Points</strong></label>
                            <input id="wd-points" className="form-control position-relative w-100" value={assignment.points} readOnly />
                        </div>
                    </div>
                    <div className="row justify-content-end mb-3">
                        <div className="col-md-12 d-flex align-items-center">
                            <label htmlFor="wd-group" className="form-label frm me-1"><strong>Assignment Group</strong></label>
                            <div className="position-relative w-100 input-group">
                                <select id="wd-group" className="form-control custom-select" disabled>
                                    <option value="assignments">ASSIGNMENTS</option>
                                </select>
                                <span className="input-group-text"><FaChevronDown /></span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end mb-3">
                        <div className="col-md-12 d-flex align-items-center">
                            <label htmlFor="wd-display-grade-as" className="form-label frm me-1"><strong>Display Grade as</strong></label>
                            <div className="position-relative w-100 input-group">
                                <select id="wd-display-grade-as" className="form-control custom-select" disabled>
                                    <option value="percentage">Percentage</option>
                                </select>
                                <span className="input-group-text"><FaChevronDown /></span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end mb-3">
                        <div className="col-md-12 d-flex align-items-center">
                            <label htmlFor="wd-submission-type" className="form-label frm me-1"><strong>Submission Type</strong></label>
                            <div className="border p-3 form-control custom-select larger-box">
                                <div className="position-relative w-100 input-group mb-3">
                                    <select id="wd-submission-type" className="form-control custom-select" disabled>
                                        <option value="online">Online</option>
                                    </select>
                                    <span className="input-group-text"><FaChevronDown /></span>
                                </div>
                                <label className="form-label"><strong>Online Entry Options</strong></label>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-website-url" checked />
                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                                    <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end mb-3">
                        <div className="col-md-12 d-flex align-items-center">
                            <label htmlFor="wd-assign" className="form-label frm me-1"><strong>Assign</strong></label>
                            <div className="border p-3 form-control custom-select larger-box">
                                <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
                                <input id="wd-assign-to" type="text" className="form-control" value="Everyone" readOnly />
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
                                        <input id="wd-due-date" type="datetime-local" className="form-control" value={assignment.dueDate} readOnly />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label>
                                        <input id="wd-available-from" type="datetime-local" className="form-control" value={assignment.availableDate} readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                                        <input id="wd-available-until" type="datetime-local" className="form-control" value={assignment.dueDate} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-light me-2">Cancel</Link>
                        <button className="btn btn-danger">Save</button>
                    </div>
                </>
            )}
        </div>
    );
}
