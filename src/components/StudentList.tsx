import { Link } from "react-router-dom";
import { students } from "./mockData";
import type { Student } from "./utils";

const StudentList = () => {
    return (
        <div>
            <h2>Students</h2>
            <ul>
                {students.map((student: Student) => (
                    <li key={student.id}>
                        {student.name} ({student.grade})
                        <Link to={`/students/${student.id}`}><button>View Courses</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StudentList