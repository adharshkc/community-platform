import { BrowserRouter, Route, Routes } from "react-router-dom"
import StudentRoute from "./routes/StudentRoute"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<StudentRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
