import { BrowserRouter, Route, Routes } from "react-router-dom"
import StudentRoute from "./routes/StudentRoute"
import TutorRoute from "./routes/TutorRoute"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<StudentRoute />} />
          <Route path="/tutor/*" element={<TutorRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
