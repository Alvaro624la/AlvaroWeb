import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

function Nav() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}>Inicio</Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Nav