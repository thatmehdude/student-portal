import { Outlet } from "react-router-dom"
import "./styles/HomePage.css"

const HomePage = () => {
    return (
        <>
        <div className="container">
            <div className="header">
                <header>🏠 Home</header>
            </div>
            <Outlet />
        </div>
        </>
    )
}

export default HomePage