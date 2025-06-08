import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./HomePage"
import StudentList from "./components/StudentList"
import StudentCourses from "./components/StudentCourses"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/students" element={<StudentList />}/>
      <Route path="/students/:studentId" element={<StudentCourses />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
