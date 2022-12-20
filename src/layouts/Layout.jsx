import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
