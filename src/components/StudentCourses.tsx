import { useParams, Link } from "react-router-dom";
import { students } from "./mockData";
import type { Course } from "./utils";

const StudentCourses = () => {
    const {studentId} = useParams<{studentId: string}>()
    const student = students.find(student => student.id === studentId);
    if (!student) return <p>Student not found</p>;

    return (
        <div>
            <h2>{student.name}'s Courses</h2>
            <ul>
                {student.courses.map((course: Course) => (
                    <li key={course.id}>
                        <Link to={`/students/${studentId}/courses/${course.id}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StudentCourses