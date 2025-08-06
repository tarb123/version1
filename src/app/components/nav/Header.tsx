'use client';
import { useState } from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
   
   <>
  {/* DESKTOP HEADER */}
  <header className="hidden md:flex flex-col fixed w-full bg-white z-50">
    <div className="flex items-center justify-between px-6 py-2">
      {/* Left: Logo */}
      <h1 className="text-[30px] font-bold text-[#e63946] font-quicksand">
        Sanjeed<span className="text-[#081b9c]">a!</span>
      </h1>

      {/* Right: Social Icons */}
      <div className="flex gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-Blue hover:text-black text-xl">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-black text-xl">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-black text-xl">
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:text-black text-xl">
          <FaInstagram />
        </a>
      </div>
    </div>
        <nav className="flex justify-center items-center gap-6 bg-[#081b9c] py-2 text-white text-base relative">

 
        {/* Services Dropdown */}
<div className="relative group">
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    aria-expanded={servicesOpen}
    className="group-hover:text-white text-gray-300 transition duration-200 relative px-2 py-1 overflow-hidden"
  >
    <span className="flex items-center text-inherit">
      <i className="fa fa-graduation-cap mr-2 text-inherit" aria-hidden="true"></i>
      Services
    </span>
    <span className="absolute bottom-0 left-0 h-[3px] bg-Red transition-all duration-300 w-0 group-hover:w-full"></span>
  </button>

  {servicesOpen && (
    <ul className="absolute mt-2 bg-[#081b9c] shadow-md rounded py-1 w-44 z-50">
      <li>
        <Link href="/FinancialOffer" className="block px-4 py-2 hover:bg-[#e63946] hover:text-white">
        <span className="flex items-center text-sm">
        <i className="fa fa-calculator mr-2 text-inherit" aria-hidden="true"></i>Offer Calculator 
        </span>
        </Link>
      </li>
      <li>
        <Link href="/cv" className="block px-4 py-2 hover:bg-[#e63946] hover:text-white">
        <span className="flex items-center text-sm">
        <i className="fa fa-cube mr-2 text-inherit" aria-hidden="true"></i>3D CVs 
        </span>           
        </Link>
      </li>
      <li>
        <Link href="/cv-upload" className="block px-4 py-2 hover:bg-[#e63946] hover:text-white">
        <span className="flex items-center text-sm">
        <i className="fa fa-upload mr-2 text-inherit" aria-hidden="true"></i>Upload CV
        </span>              
        </Link>
      </li>
    </ul>
  )}
</div>


<Link href="/Team" className="relative text-white text-base px-3 py-1 transition duration-300 group">
<i className="fa fa-users mr-2" aria-hidden="true"></i>
<span className="font-[Jameel Noori Nastaleeq] transition-colors duration-300 text-white">Team</span>
<span className="absolute bottom-0 left-0 w-0 h-[3px] bg-Red transition-all duration-300 group-hover:w-full"></span>
</Link>

          <Link href="/Blogs/" className="relative text-white text-base px-3 py-1 transition duration-300 group">
            <i className="fa fa-file-alt mr-2 group-hover:text-white transition-colors duration-300" aria-hidden="true"></i>
            <span className="font-[Jameel Noori Nastaleeq] transition-colors duration-300 text-white">Blogs</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-Red transition-all duration-300 group-hover:w-full"></span>
          </Link>
      
          <Link href="/EnterNamePage" className="relative text-white text-base px-3 py-1 transition duration-300 group">
              <i className="fa fa-clipboard-list fa-brain mr-2 group-hover:text-white transition-colors duration-300" aria-hidden="true"></i>
              <span className="font-[Jameel Noori Nastaleeq] transition-colors duration-300 text-white group-hover:text-Red">خودی</span>{' '}
            <span className="font-sans serif font-semibold">Personality Assessment</span>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-Red transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div
          className="absolute -mr-20 right-20 text-white bg-Blue px-1 py-3 -mt-1 lg:-mt-3 hover:bg-[#0620cc] xs:px-4 xs:py-3 xs:right-3"
          
          >
            <a href="/logo" className="text-white px-3 py-3 rounded-md">
              Log In
            </a>
          </div>
        
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
    
          
      <Link href="/Team" className="mb-2 relative text-white text-base py-1 transition duration-300 group">
      <i className="fa fa-users mr-2" aria-hidden="true"></i>
      <span className="font-[Jameel Noori Nastaleeq] transition-colors duration-300 text-white">Team</span>
      <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-Red transition-all duration-300 group-hover:w-full"></span>
      </Link>
    
      <Link href="/Blogs/" className="mb-2 relative text-white text-base py-1 transition duration-300 group">
      <i className="fa fa-file-alt mr-2" aria-hidden="true"></i>
      <span className="font-[Jameel Noori Nastaleeq] transition-colors duration-300 text-white">Blogs</span>
      <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-Red transition-all duration-300 group-hover:w-full"></span>
      </Link>

      <Link href="/EnterNamePage" className="mb-2 relative text-white text-base py-1 transition duration-300 group">
        <i className="fa fa-clipboard-list fa-brain mr-2" aria-hidden="true"></i>
        <span className="font-[Jameel Noori Nastaleeq] transition-colors duration-300 text-white group-hover:text-Red">خودی</span>{' '}
        <span className="ml-1">Personality Assessment</span>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-Red transition-all duration-300 group-hover:w-full"></span>
      </Link>

      <div className="text-white">
        <i className="fa fa-graduation-cap mr-2 text-inherit" aria-hidden="true"></i>
        <button onClick={() => setServicesOpen(!servicesOpen)} className='mb-2'>Services
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green transition-all duration-300 group-hover:w-full"></span>

        </button>

        {servicesOpen && (
        <div className="pl-4 space-y-2">
        <ul>
        <li>
          <Link href="/FinancialOffer" className="text-white "> 
          <span className="flex items-center text-sm mb-2">
            <i className="fa fa-calculator mr-2 text-inherit  " aria-hidden="true"></i>Offer Calculator 
          </span>         
          </Link>
        </li>

        <li>
          <Link href="/cv"> 
          <span className="flex items-center text-sm mb-2">
            <i className="fa fa-cube mr-2 text-inherit" aria-hidden="true"></i>3D CVs 
          </span> 
          </Link>
        </li>
        <li>
          <Link href="/cv-upload"> 
          <span className="flex items-center text-sm mb-2">
            <i className="fa fa-upload mr-2 text-inherit" aria-hidden="true"></i>Upload CV
          </span>  
          </Link>
        </li> 
         </ul>
          </div>
        
        )}
      </div>
      
        </nav>
      )}
    </>
  );
};

export default Header;


        <h1 className="text-Red font-semibold text-center py-4 text-4xl" >Management</h1>
