import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./HomePage"
import StudentList from "./components/StudentList"
import StudentCourses from "./components/StudentCourses"
import CourseDetails from "./components/CourseDetails"
import Search from "./components/Search"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/students" element={<StudentList />}/>
      <Route path="/students/:studentId" element={<StudentCourses />}/>
      <Route path="/students/:studentId/courses/:courseId" element={<CourseDetails />}/>
      <Route path="/search" element={<Search />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
