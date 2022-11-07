import React from "react";
import { NotFound } from '../pages/NotFound';
import { Sobre } from '../pages/sobre/Index';
import { Home } from '../pages/Home/index';
import { Routes, Route } from "react-router-dom";


export const Root =() =>{
    return(
        <Routes>
    
        <Route path='*' element={<NotFound/>} />
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
     
       
    </Routes>
    )
    
}