import { useSearchParams, Link } from "react-router-dom";
import { students } from "./mockData";
import type { Student } from "./utils";

const Search = () => {
  const [searchParams] = useSearchParams();
  const nameFilter = searchParams.get("name")?.toLowerCase() || "";
  const gradeFilter = searchParams.get("grade")?.toLowerCase() || "";

  const filtered: Student[] = students.filter(
    (student) =>
      student.name.toLowerCase().includes(nameFilter) &&
      student.grade.toLowerCase().includes(gradeFilter)
  );

  return (
    <div>
        <h2>Search Results</h2>
        <ul>
            {filtered.map(student => (
                <li key={student.id}>
                    {student.name} ({student.grade}) - <Link to={`/students/${student.id}`}><button>View</button></Link>
                </li>
            ))}
        </ul>
    </div>
  )
};

export default Search