import './App.css'
import React from 'react'
import Home from './page/Home'
import Menubar from './component/Menubar'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import Create from './page/Create'

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
