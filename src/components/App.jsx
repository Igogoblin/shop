import React from "react";
import AppRoutes from "./routes/Routes";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideBar from "./sidebar/SideBar";

export default function App() {
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
