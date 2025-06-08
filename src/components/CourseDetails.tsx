import { useParams, useNavigate } from "react-router-dom";
import { students } from "./mockData";
import "../styles/CourseDetails.css";

const CourseDetails = () => {
  const { studentId, courseId } = useParams<{
    studentId: string;
    courseId: string;
  }>();
  const navigate = useNavigate();
  const student = students.find((student) => student.id === studentId);
  const course = student?.courses.find((course) => course.id === courseId);
  if (!course) return <p>Course not found</p>;

  return (
    <div className="course-details-container">
      <h1 className="course-details-title">{course.title} Details</h1>
      <p className="course-description">{course.description}</p>
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅️ Back
      </button>
    </div>
  );
};

export default CourseDetails;
