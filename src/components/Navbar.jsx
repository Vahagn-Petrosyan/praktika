import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const navbarRef = useRef();
  const handleNavbarToggle = () => {
    setScrollWidth(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleNavbarToggle);

    return () => document.removeEventListener("scroll", handleNavbarToggle);
  }, []);
  return (
    <nav
      className={`flex flex-row gap-[170px] h-[126px] w-full fixed ${!scrollWidth ? "bg-transparent " : "bg-white"} items-center justify-center`}
      ref={navbarRef}
    >
      <h1 className="text-yellow text-4xl mb-[5px]">EvenTracking</h1>
      <ul className="flex flex-row items-center gap-x-11">
        <li className={`${!scrollWidth ? 'text-white' : 'text-black'}`}>Home</li>
        <li className={`${!scrollWidth ? 'text-white' : 'text-black'}`}>About</li>
        <li className={`${!scrollWidth ? 'text-white' : 'text-black'}`}>Events</li>
        <li className={`${!scrollWidth ? 'text-white' : 'text-black'}`}>Blog</li>
      </ul>

      <div className="flex flex-row item-center gap-10">
        <button className="bg-transparent text-yellow border border-yellow">log in</button>
        <button>sign up</button>
      </div>
    </nav>
  );
}
