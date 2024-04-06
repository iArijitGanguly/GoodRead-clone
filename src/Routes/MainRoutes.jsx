import Signin from 'Pages/Auth/Signin';
import Signup from 'Pages/Auth/Signup';
import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';
import React from 'react';
import { Routes, Route } from "react-router-dom"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes