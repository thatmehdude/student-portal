import { useSearchParams, Link } from "react-router-dom";
import { students } from "./mockData";
import type { Student } from "./utils";
import "../styles/Search.css";

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
    <div className="search-container">
      <h1 className="search-title">Search Results</h1>
      <div className="search-results-grid">
        {filtered.map((student) => (
          <div key={student.id} className="search-result-card">
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

export default Search;
