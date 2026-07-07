import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FloatingElements from "@/components/FloatingElements";

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