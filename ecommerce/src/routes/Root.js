import React from "react";
import { NotFound } from '../pages/NotFound';
import { Sobre } from '../pages/sobre/Index';
import { Home } from '../pages/Home/index';
import { Routes, Route } from "react-router-dom";
import AdmPedido from '../pages/AdmPedido'
import { Carrinho } from '../pages/Carrinho'


export const Root =() =>{
    return(
        <Routes>
    
        <Route path='*' element={<NotFound/>} />
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/pedido" element={<AdmPedido/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
        
     
       
    </Routes>
    )
    
}