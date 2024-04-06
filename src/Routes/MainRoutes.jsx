import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';
import React from 'react';
import { Routes, Route } from "react-router-dom"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes