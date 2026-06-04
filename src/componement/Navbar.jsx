import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between px-6 md:px-20 py-6">
      {/* Logo */}
      <h1 className="heading font-gerbil font-bold text-3xl">Elementum</h1>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 font-bold text-sm md:gap-14 md:text-base">
        <a href="#">Home</a>
        <a href="#">Studio</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">FAQs</a>
      </div>

      {/* Hamburger Menu */}
      <div className="flex flex-col gap-2 cursor-pointer ">
        <div className="w-8 h-[2px] bg-black"></div>
        <div className="w-8 h-[2px] bg-black"></div>
      </div>
    </nav>
  );
}