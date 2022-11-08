import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductList } from "../pages/ProductList";
import { ProductPage } from "../pages/ProductPage";

export const Root = () => {
  <Routes>
    <Route path="/productPage" element={<ProductPage />} />
    <Route path="/productList" element={<ProductList />} />
  </Routes>;
};
