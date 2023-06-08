import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Dashboard from "./components/dashboard/Dashboard"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
