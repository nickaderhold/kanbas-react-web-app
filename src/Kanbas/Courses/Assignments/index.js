import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2>Assignments for Course {courseId}</h2>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush" id="a-list">
            {courseAssignments.map((assignment) => (
              <li key={assignment._id} className="list-group-item">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
