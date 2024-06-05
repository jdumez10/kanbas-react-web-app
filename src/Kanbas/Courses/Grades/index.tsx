import { FaFileImport, FaFileExport, FaCog, FaFilter, FaSearch, FaChevronDown } from 'react-icons/fa';

export default function Grades() {
  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col d-flex justify-content-end">
          <button type="button" className="btn btn-apply-filters me-2">
            <FaFileImport className="me-2" /> Import
          </button>
          <button type="button" className="btn btn-apply-filters me-2">
            <FaFileExport className="me-2" /> Export
          </button>
          <button type="button" className="btn btn-apply-filters">
            <FaCog />
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="studentSearch" className="form-label fw-bold">Student Names</label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" id="studentSearch" className="form-control search-input" placeholder="Search Students" />
            <span className="input-group-text"><FaChevronDown /></span>
          </div>
        </div>
        <div className="col">
          <label htmlFor="assignmentSearch" className="form-label fw-bold ">Assignment Names</label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" id="assignmentSearch" className="form-control search-input" placeholder="Search Assignments" />
            <span className="input-group-text"><FaChevronDown /></span>
          </div>
        </div>
      </div>
      <div className="mb-3 text-start">
        <button type="button" className="btn btn-apply-filters">
          <FaFilter className="me-2" /> Apply Filters
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>
                <div>A1 SETUP</div>
                <div className="small-text">Out of 100</div>
              </th>
              <th>
                <div>A2 HTML</div>
                <div className="small-text">Out of 100</div>
              </th>
              <th>
                <div>A3 CSS</div>
                <div className="small-text">Out of 100</div>
              </th>
              <th>
                <div>A4 BOOTSTRAP</div>
                <div className="small-text">Out of 100</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger text-start">Jane Adams</td>
              <td>100%</td>              
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td className="text-danger text-start">Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger text-start">Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger text-start">Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <input type="text" className="form-control text-center small-input" value="88.03%" />
                </div>
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td className="text-danger text-start">Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger text-start">Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
