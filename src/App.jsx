import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import Collections from './pages/Collections'
import FabricsPage from './pages/FabricsPage'
import ModalPage from './pages/ModalPage'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/collection/:category' element={<Collections />}/>
            <Route path='/fabric/:fabric' element={<FabricsPage />}/>
            <Route path='/product/:id' element={<ModalPage />}/>
        </Routes>
    </>
  )
}

export default App