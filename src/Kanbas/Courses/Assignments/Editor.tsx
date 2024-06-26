export default function AssignmentEditor() { 
    return ( 
    <div id="wd-assignments-editor"> 
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
        <br /><br />  
        <input id="wd-name" value="A1 - ENV + HTML" /> 

        <br /><br /> 

        <textarea id="wd-description"> 
        The assignment is available online 
        Submit a link to the landing page of your
        Web application running on Netlify. The 
        landing page should include the following:
        Your full name and section Links to each of the
        lab assignments Link to the Kanbas application
        Links to all relevant source code repositories
        The Kanbas application should include a link
        to navigate back to the landing page.
        </textarea> 

        <br /><br /> 

        <table> 
            <tr> 
                <td align="right" valign="top"> 
                <label htmlFor="wd-points">Points</label> 
                </td> 
                <td> 
                <input id="wd-points" value={100} /> 
                </td> 
            </tr> 
            <br /><br />
            
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                <select id="wd-group">
                    <option value="assignments">ASSIGNMENTS</option>
                </select>
                </td>
            </tr>
            <br /><br />

            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                        <option value="percentage">Percentage</option>
                    </select>
                </td>
            </tr>
            <br /><br />

            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                <select id="wd-submission-type">
                    <option value="online">Online</option>
                </select>
                </td>
            </tr>
            <br /><br />

            <tr>
                <td align="right" valign="top"> 
                </td>
                <td>
                <label>Online Entry Options</label>
                <div>
                    <input type="checkbox" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div>
                    <input type="checkbox" id="wd-website-url" />
                    <label htmlFor="wd-website-url">Website URL</label>
                </div>
                <div>
                    <input type="checkbox" id="wd-media-recordings" />
                    <label htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div>
                    <input type="checkbox" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div>
                    <input type="checkbox" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Uploads</label>
                </div>
                </td>
            </tr>
            <br /><br />

            <tr>
                <td align="right" valign="top">
                    <label htmlFor="assign-to">Assign</label> 
                </td>
                <td>
                    <label htmlFor="wd-assign-to">Assign To</label> 
                    <div>    
                        <input id="wd-assign-to" type="text" value="Everyone" />
                    </div>
                </td>
            </tr>
            <br /><br />

            <tr>
                <td align="right" valign="top">
                </td>
                <td>
                    <label htmlFor="wd-due-date">Due</label>
                    <div>
                        <input id="wd-due-date" type="date" value="2024-05-13" />
                    </div>
                </td>
            </tr>
            <br /><br />

            <tr>
                <td align="right" valign="top">
                </td>
                <td>
                    <div>
                        <td align="left" valign="top">
                            <label htmlFor="wd-available-from">Available from</label>
                            <div>
                            <input id="wd-available-from" type="date" value="2024-05-06" />
                            </div>    
                        </td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-available-until">Until</label>
                            <div>
                            <input id="wd-available-until" type="date" value="2024-05-06" />
                            </div>    
                        </td>
                    </div>
                </td>
                
            </tr>     
        </table> 
        <br /><br />

        <hr />
        <div style={{ textAlign: 'right' }}>
            <button>Cancel</button>
            <button>Save</button>
        </div>

    </div> 
);} 