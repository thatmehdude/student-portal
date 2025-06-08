import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const HomeContent = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (query) params.set(`name`, query);
        navigate(`/search?${params.toString()}`);
    };

    return (
        <>
            <div className="title-div">
                <h1>🎓 Student Portal</h1>
            </div>
            <div className="search-div">
                <Link to="/students"><button>📚 View All Students</button></Link>
                <input type="text"
                value={query}
                onChange={e => setQuery(e.target.value)} 
                placeholder="Search students..."/>
                <button onClick={handleSearch}>🔍Search</button>
            </div>
        </>
    )
}

export default HomeContent