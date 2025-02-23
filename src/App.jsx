import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { TimeTable } from "./pages/TimeTable"
import { Schedule } from "./pages/Schedule"
import Header from "./Components/Header"
import Written from "./pages/Written"


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/portal-shizuoka-vite/" element={<Home />}></Route>
        <Route path="/portal-shizuoka-vite/Schedule" element={<Schedule />}></Route>
        <Route path="/portal-shizuoka-vite/TimeTable" element={<TimeTable />}></Route>
        <Route path="/portal-shizuoka-vite/Written" element={<Written />}></Route>
      </Routes>
    </div>
  )
}

export default App
