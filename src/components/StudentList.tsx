import { Link } from "react-router-dom";
import { students } from "./mockData";
import type { Student } from "./utils";
import "../styles/StudentList.css";

const StudentList = () => {
  return (
    <div className="student-list-container">
      <h1 className="student-list-title">All Students</h1>
      <div className="student-cards-grid">
        {students.map((student: Student) => (
          <div key={student.id} className="student-card">
            <h3>
              {student.name} (Grade {student.grade})
            </h3>
            <Link to={`/students/${student.id}`}>
              <button>View Courses</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
