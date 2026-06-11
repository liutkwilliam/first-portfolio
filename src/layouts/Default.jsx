import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Default = () => {
  return (
    <>
      <NavBar />
      <div className="bg-page min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Default;
