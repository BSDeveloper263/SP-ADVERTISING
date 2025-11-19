import React from 'react'
import Dashboard from "./Component/Dashboard2/Dashboard"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
