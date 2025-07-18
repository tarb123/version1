'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="hidden md:flex flex-col fixed w-full bg-[#dcdce8] z-50 ">
        <div className="flex items-baseline justify-start px-6 py-2 mb-[-10px]">
          <h1 className="text-[30px] font-bold text-[#e63946] font-quicksand">
            Sanjeed<span className="text-[#081b9c]">a!</span>
          </h1>
        </div>

        <nav className="flex justify-center items-center bg-[#081b9c]">
          <Link href="/EnterNamePage" className="relative text-white text-base px-3 py-1 transition duration-300 group">
            <span className="font-[Jameel Noori Nastaleeq] transition-colors duration-300 text-white group-hover:text-Red">خودی</span>{' '}
            <span className="font-sans serif font-semibold">Personality Assessment</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-Red transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      </header>

      {/* MOBILE HEADER */}
        <div className="flex justify-center items-baseline py-2">
          <h1 className="text-[30px] font-bold text-[#e63946] font-quicksand">
            Sanjeed<span className="text-[#081b9c]">a!</span>
          </h1>
        </div>

      <div className="mb-20 flex md:hidden justify-between items-center px-4 py-2 shadow-md h-[58px] fixed top-0 w-full z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none text-black font-bold">☰</button>
      </div>

      {/* MOBILE NAVBAR */}
      {menuOpen && (
      <nav className="fixed top-[60px] left-0 h-[600px] w-[250px] bg-gradient-to-t from-Blue to-Red backdrop-blur-lg z-50 flex flex-col p-4 shadow-lg">
          <button onClick={() => setMenuOpen(false)} className="self-end text-1xl text-white font-bold mb-4">X</button>
          <Link href="/EnterNamePage" className="relative text-white text-m font-medium px-3 py-2 transition duration-300 group">
            <span className="font-[Jameel Noori Nastaleeq] transition-colors duration-300 text-white group-hover:text-Red">خودی</span>{' '}
            <span className="ml-1">Personality Assessment</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-Red transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      )}
    </>
  );
};

export default Header;
