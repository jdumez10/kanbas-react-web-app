import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import { RootState } from '../../store';
import { FaChevronDown } from 'react-icons/fa';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState(existingAssignment || {
    title: '',
    description: '',
    points: 0,
    dueDate: '',
    availableDate: '',
    availableUntilDate: '',
    course: cid
  });

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label"><strong>Description</strong></label>
        <textarea
          id="wd-description"
          className="form-control"
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>
      <div className="row justify-content-end mb-3">
        <div className="col-md-12 d-flex align-items-center">
          <label htmlFor="wd-points" className="form-label frm me-1"><strong>Points</strong></label>
          <input
            id="wd-points"
            type="number"
            className="form-control position-relative w-100"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: +e.target.value })}
          />
        </div>
      </div>
      <div className="row justify-content-end mb-3">
        <div className="col-md-12 d-flex align-items-center">
          <label htmlFor="wd-due-date" className="form-label frm me-1"><strong>Due Date</strong></label>
          <input
            id="wd-due-date"
            type="datetime-local"
            className="form-control w-100"
            value={assignment.dueDate}
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
          />
        </div>
      </div>
      <div className="row justify-content-end mb-3">
        <div className="col-md-6 d-flex align-items-center">
          <label htmlFor="wd-available-from" className="form-label frm me-1"><strong>Available From</strong></label>
          <input
            id="wd-available-from"
            type="datetime-local"
            className="form-control w-100"
            value={assignment.availableDate}
            onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })}
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <label htmlFor="wd-available-until" className="form-label frm me-1"><strong>Available Until</strong></label>
          <input
            id="wd-available-until"
            type="datetime-local"
            className="form-control w-100"
            value={assignment.dueDate}
            onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
          />
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-light me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}