import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import HomePage from './pages/home/HomePage'
import BuilderPage from './pages/builder/BuilderPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/builder' element={<BuilderPage/>}/>
      </Routes>
    </div>
  )
}

export default App