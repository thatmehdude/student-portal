import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./HomePage"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/student" element/>
    </Routes>
    </BrowserRouter>
      <HomePage />
    </>
  )
}

export default App
