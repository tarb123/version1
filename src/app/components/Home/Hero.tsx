"use client";
import React, { useState } from 'react'
import Link from "next/link";
import ServicesList from './ServicesList';import Awrapper from '@/app/aboutus/Awrapper';

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  return (
    <div>
      <ServicesList/>
       <section className="hero top-1 bg-cover h-52 flex items-center justify-center bg-gradient-to-r from-[#7f81d1] to-[#0cbaf4]">
    <div className="container mx-auto px-6 sm:px-6 lg:px-8 md:px-2 xl:px-1">
      <div className="row flex flex-col items-center text-center text-Blue space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold -mt-6">
          Sanjeed<span className="text-Red">a!</span> Stands For:
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center max-w-xl mx-auto leading-relaxed text-Red font-bold">
          Career development for people serious about
        </p>
        <div className="font-bold">
          <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center max-w-xl mx-auto leading-relaxed text-Red">
            <ul className="flex justify-center space-x-4">
              {/* Readiness Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("readiness")}
                  className="text-Blue font-semibold focus:outline-none"
                >
                  <span className="text-Blue hover:shadow-md hover:shadow-Red rounded-lg text-xs lg:text-xl ">
                     {/* <i class="fa fa-angle-down" aria-hidden="true"></i>  */}
                     Readiness</span>
                  <span className="text-Red"> |</span>
                </button>
                {openDropdown === "readiness" && (
                  <ul className="absolute mt-2 bg-white shadow-lg rounded-md p-2 space-y-1">
                    <li>
                      <Link
                         href="Registration#Registration"
                        className="block px-4 py-2 text-xs text-black"
                      >
                        Student
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="Registration#Registration"
                        className="block px-4 py-2 text-xs text-black"
                      >
                        Job Seeker
                      </Link>
                    </li>
                    <li>
                      <Link
                        href ="Registration#Registration"
                        className="block px-4 py-2 text-xs text-black"
                      >
                         Professional
                      </Link>
                    </li>
                    <li>
                      <Link
                         href="Registration#Registration"
                        className="block px-4 py-2 text-xs text-black"
                      >
                        Mentor
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="Registration#Registration"
                        className="block px-4 py-2 text-xs text-black"
                      >
                      Employer  
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Opportunities Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("opportunities")}
                  className="text-Blue font-semibold focus:outline-none "
                >
                  <span className="text-Blue hover:shadow-md hover:shadow-Red rounded-lg text-xs lg:text-xl ">Opportunities</span>
                  <span className="text-Red"> |</span>
                </button>
                {openDropdown === "opportunities" && (
                  <ul className="absolute mt-2 bg-white shadow-lg rounded-md p-2 space-y-1">
                    <li>
                      <Link
                         href="/#self-discovery"
                        className="block px-4 py-2 text-xs text-black"
                      >
                        Training & development 
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#cv-profile"
                        className="block px-4 py-2 text-xs text-black"
                      >
                        Counseling
                      </Link>
                    </li>
                   
                  </ul>
                )}
              </li>

              {/* Success Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("success")}
                  className="text-Blue font-semibold  focus:outline-none"
                >
                  <span className="text-Blue hover:shadow-md hover:shadow-Red rounded-lg text-xs lg:text-xl">Success</span>
                  
                </button>
                {openDropdown === "success" && (
                  <ul className="absolute mt-2 bg-white shadow-lg rounded-md p-2 space-y-1">
                    <li>
                      <Link
                         href="/#self-discovery"
                        className="block px-4 py-2 text-xs text-black"
                      >
                      Success Stories  
                      </Link>
                    </li>
                   
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
      <Awrapper/>

  </div>
  
  )
}

export default Home