import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'

const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/account/login' element={<Login/>} />
        <Route path='/account/register' element={<Register/>} />
    </Routes>
    </>
  )
}

export default AllRoute