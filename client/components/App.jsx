import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Welcome from './Welcome'
import { Routes, Route } from 'react-router-dom'
import Tips from './Tips'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/tips' element={<Tips />} />
      </Routes>
    </>
  )
}

export default App
