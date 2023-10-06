import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./navigation/Nav";
import Footer from "./footer/Footer";
import MobileNav from "./navigation/MobileNav";

const PageLayout = () => {
  return (
    <div className="bg-slate-100">
      <Nav />
      <MobileNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
