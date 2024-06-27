import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./routes/Routes";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideBar from "./sidebar/SideBar";
import { getCategories } from "../features/categories/categoriesSlice";
import { getProducts } from "../features/products/productsSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <div className="container">
        <SideBar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
}
