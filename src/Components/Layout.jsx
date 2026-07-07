import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/Components/Navbar";
import FooterSection from "@/Components/FooterSection";
import FloatingElements from "@/Components/FloatingElements";

export default function Layout() {
  return (
    <div className="bg-midnight min-h-screen">
      <Navbar />
      <Outlet />
      <FooterSection />
      <FloatingElements />
    </div>
  );
}