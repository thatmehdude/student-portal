import { useParams, Link } from "react-router-dom";
import { students } from "./mockData";
import type { Course } from "./utils";
import "../styles/StudentCourses.css";

const StudentCourses = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const student = students.find((student) => student.id === studentId);
  if (!student) return <p>Student not found</p>;

  return (
    <div className="student-courses-container">
      <h1 className="student-courses-title">Courses for {student.name}</h1>
      <div className="courses-grid">
        {student.courses.map((course: Course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <Link to={`/students/${studentId}/courses/${course.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
