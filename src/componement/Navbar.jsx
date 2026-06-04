import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">
          Elementum
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-bold">
          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">FAQs</a>
        </div>

        {/* Mobile Menu Button */}
        {open === false ?(<button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <div className="w-7 h-[2px] bg-black"></div>
          <div className="w-7 h-[2px] bg-black"></div>
          <div className="w-7 h-[2px] bg-black"></div>
        </button>):(<button onClick={()=>setOpen(!open)}>X</button>)}
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-6 font-bold">
          <a href="#">Home</a>
          <a href="#">Studio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">FAQs</a>
        </div>
      )}
    </nav>
  );
}