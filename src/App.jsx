import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/landing'
import Resume from './pages/resume'
import Protectedroute from './components/protectedroute/protectedroute'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<Protectedroute />}>
            <Route path="/welcome" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App