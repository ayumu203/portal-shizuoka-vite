import React from "react"
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
        <Route path="/portal-shizuoka-vite/schedule" element={<Schedule />}></Route>
        <Route path="/portal-shizuoka-vite/timeTable" element={<TimeTable />}></Route>
        <Route path="/portal-shizuoka-vite/written" element={<Written />}></Route>
      </Routes>
    </div>
  )
}

export default App
