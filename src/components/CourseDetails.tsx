import { useParams, useNavigate } from "react-router-dom";
import { students } from "./mockData";

const CourseDetails = () => {
    const {studentId, courseId} = useParams<{studentId: string; courseId: string}>();
    const navigate = useNavigate();
    const student = students.find(student => student.id === studentId);
    const course = student?.courses.find(course => course.id === courseId);
    if (!course) return <p>Course not found</p>;

    return (
        <div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default CourseDetails