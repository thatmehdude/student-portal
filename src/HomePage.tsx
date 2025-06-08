import "./styles/HomePage.css"

const HomePage = () => {
    return (
        <>
        <div className="container">
            <div className="header">
                <header>🏠 Home</header>
            </div>
            <div className="title-div">
                <h1>🎓 Student Portal</h1>
            </div>
            <div className="search-div">
                <button>📚 View All Students</button>
                <input type="text" />
                <button>🔍Search</button>
            </div>
        </div>
        </>
    )
}

export default HomePage