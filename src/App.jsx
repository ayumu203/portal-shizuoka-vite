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
        <Route path="/" element={<Home />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/timeTable" element={<TimeTable />}></Route>
        <Route path="/written" element={<Written />}></Route>
      </Routes>
    </div>
  )
}

export default App
