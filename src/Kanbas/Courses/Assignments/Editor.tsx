import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
                <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
            </div>
            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label"><strong>Description</strong></label>
                <div id="wd-description" className="form-control" contentEditable>
                    <p>The assignment is <span style={{color: 'red'}}>available online</span></p>
                    <p>Submit a link to the landing page of your Web application running on <span style={{textDecoration: 'underline'}}>Netlify</span>.</p>
                    <p>The landing page should include the following:</p>
                    <ul>
                        <li>Your full name and section</li>
                        <li>Links to each of the lab assignments</li>
                        <li>Link to the <span style={{textDecoration: 'underline'}}>Kanbas</span> application</li>
                        <li>Links to all relevant source code repositories</li>
                    </ul>
                    <p>The <span style={{textDecoration: 'underline'}}>Kanbas</span> application should include a link to navigate back to the landing page.</p>
                </div>
            </div>
            <div className="row justify-content-end mb-3">
                <div className="col-md-12 d-flex align-items-center">
                    <label htmlFor="wd-points" className="form-label frm me-1"><strong>Points</strong></label>
                    <input id="wd-points" className="form-control position-relative w-100" value={100} />
                </div>
            </div>
            <div className="row justify-content-end mb-3">
                <div className="col-md-12 d-flex align-items-center">
                    <label htmlFor="wd-group" className="form-label frm me-1"><strong>Assignment Group</strong></label>
                    <div className="position-relative w-100 input-group">
                        <select id="wd-group" className="form-control custom-select">
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
                        <select id="wd-display-grade-as" className="form-control custom-select">
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
                            <select id="wd-submission-type" className="form-control custom-select">
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
                        <input id="wd-assign-to" type="text" className="form-control" value="Everyone" />
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
                                <input id="wd-due-date" type="datetime-local" className="form-control" value="2024-05-13T23:59" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label>
                                <input id="wd-available-from" type="datetime-local" className="form-control" value="2024-05-06T00:00" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                                <input id="wd-available-until" type="datetime-local" className="form-control" value="2024-05-06T00:00" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
                <button className="btn btn-light me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}
