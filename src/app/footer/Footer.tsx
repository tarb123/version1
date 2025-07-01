 "use client";
import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  
  const socialLinks = [
    { href: "https://www.facebook.com", icon: "fab fa-facebook-f", color: "hover:text-Blue" },
    { href: "https://www.instagram.com", icon: "fab fa-instagram", color: "hover:text-Pink" },
    { href: "https://www.youtube.com", icon: "fab fa-youtube", color: "hover:text-Red" },
    { href: "https://twitter.com", icon: "fab fa-twitter", color: "hover:text-Blue" },
    { href: "https://www.linkedin.com", icon: "fab fa-linkedin-in", color: "hover:text-Blue" },
  ];

  return (
    <>
      {/* Newsletter Section */}
      <section className="newsletter bg-gradient-to-r from-Red to-Blue text-white py-1 lg:py-10 ">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-8">
          <div className="left mb-8 lg:mb-0">
            <h1 className="font-bold mb-2 text-center lg:text-left text-xl lg:text-xl sm:text-xs">
              Newsletter - Stay tuned and get the latest updates
            </h1>
          </div>
          <div className="right flex items-center">
            <input
              type="email"
              placeholder="Enter email address"
              aria-label="Email address input"
              className="p-4 rounded-l w-58 md:w-60 md:h-10 h-10 text-black mb-4 lg:mb-0 focus:outline-none"
            />
            <button
              className="p-3 bg-Red hover:bg-gray text-white rounded-r -mt-4 lg:mt-0"
              title="Send"
              aria-label="Send email"
            >
              <VscSend />
            </button>
          </div>
        </div>
      </section>

      
      {/* Footer Section */}
      <footer className="bg-[#041580] text-white py-8 px-4 lg:px-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Logo and Social Links */}
    <div className="text-center lg:text-left -ml-52 lg:ml-0">
      <h1 className="text-2xl lg:text-4xl font-bold">
        <span className="text-white">Sanjeed</span>
        <span className="text-Red">a!</span>
      </h1>
      <div className="flex justify-center lg:justify-start space-x-2 -mt-7  lg:mt-0 ml-96 lg:ml-auto">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit our page on ${link.href}`}
            aria-label={`Visit our page on ${link.href}`}
            className="text-sm lg:text-lg hover:text-red-500 transition-colors"
          >
            <i className={`${link.icon} ${link.color}`}></i>
          </a>
        ))}
      </div>
    </div>

    {/* Quick Links */}
    <div className="text-center lg:text-left">
      <h3 className="text-lg font-semibold ">Quick Links</h3>
      <ul className="space-y-1 text-sm lg:text-sm lg:-ml-14 -ml-36 lg:mt-2 ">
        {[ { name: "About Us", path: "/aboutus" },
      { name: "Services", path: "/allServices" },
      { name: "Privacy", path: "/privacy" },
      { name: "Blog", path: "/Blogs/" },].map((item, i) => (
          <li key={i} className="hover:text-Red transition-colors">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-1 lg:scroll-mt-1 -mt-24 text-sm lg:text-sm lg:ml-20 -mr-48 ">
        {[{ name: "Terms & Conditions", path: "/terms" },
      { name: "Feedback", path: "/feedback" },
      { name: "Have a Question?", path: "/contact" },].map((item, i) => (
          <li key={i} className="hover:text-Red transition-colors">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    {/* <div className="text-center lg:text-left">
  <h3 className="text-lg font-semibold">Quick Links</h3>
  <ul className="space-y-1 text-sm lg:text-sm lg:-ml-14 -ml-36 lg:mt-2">
    {[
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Privacy", path: "/privacy" },
      { name: "Blog", path: "/blog" },
    ].map((item, i) => (
      <li key={i} className="hover:text-red transition-colors">
        <Link to={item.path}>{item.name}</Link>
      </li>
    ))}
  </ul>
  <ul className="space-y-1 lg:scroll-mt-1 -mt-24 text-sm lg:text-sm lg:ml-20 -mr-48">
    {[
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Feedback", path: "/feedback" },
      { name: "Have a Question?", path: "/contact" },
    ].map((item, i) => (
      <li key={i} className="hover:text-red transition-colors">
        <Link to={item.path}>{item.name}</Link>
      </li>
    ))}
  </ul>
</div>; */}

    {/* Contact Info */}
    <div className="text-center lg:text-left">
      <h3 className="lg:text-lg text:sm font-semibold mb-4 lg:ml-28">Contact Info</h3>
      <ul className="space-y-2">
        <li className="flex items-center justify-center lg:justify-start lg:text-sm text-xs lg:ml-28">
          <i className="fa fa-map-marker-alt mr-2"></i>
          B-65, Block2, Gulshan-e-Iqbal, Karachi, Pakistan
        </li>
        <li className="flex items-center justify-center lg:justify-start lg:text-sm text-xs lg:ml-28">
          <i className="fa fa-phone-alt mr-2"></i>
          +92 21 34832777 , 03132193503
        </li>
        <li className="flex items-center justify-center lg:justify-start lg:text-sm text-xs lg:ml-28">
          <i className="fa fa-paper-plane mr-2"></i>
          info@conductivity.com.pk
        </li>
      </ul>
    </div>
  </div>
</footer>

      {/* Legal Section */}
      <div className="bg-Blue text-white py-2">
        <div className="container mx-auto text-center ">
          <p className="text-xs lg:text-lg">
            {/* Copyright  */}
            &copy; {new Date().getFullYear()} 
            {/* All rights reserved | Made with */}
            {" "}
            <i className="fa fa-heart text-Red"></i> 
            {/* by GorkhCoder */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

