'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const EnterNamePage: React.FC = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleStart = () => {
    if (name.trim() !== '') {
      localStorage.setItem('userName', name);
      router.push('/Main');
    }
  };

  return (
    // <section className="relative w-full h-screen overflow-hidden">
    <section className="bg-[#f5f5f5] relative w-full h-screen overflow-hidden">  

      {/* 🎥 Background Video */}
      {/* <video
        src="/explore services.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
        playsInline
      /> */}

      {/* 📦 Form Container */}
<div className="flex items-center justify-center h-full px-2 relative -translate-y-60 sm:-translate-y-10">
  <div className="bg-[#f5f5f5] backdrop-blur-md shadow-xl rounded-xl p-4 sm:p-6 md:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md">

          {/* 🖼 Logo + Heading */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 gap-2 mb-6 text-center sm:text-left">
            <Image
              src="/courses/cc1.png"
              alt="Logo"
              width={64}
              height={64}
              className="h-16 w-auto object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-Red">Enter Your Name</h1>
          </div>

          {/* 🧑‍💻 Name Input */}
          <input
            type="text"
            className="w-full border-gray px-2 py-2 text-base mb-6 bg-transparent placeholder-gray focus:outline-none focus:border-Blue"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* 🚀 Start Button */}
          <button
            onClick={handleStart}
            className="w-full bg-Blue hover:bg-Blue text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Start Questions
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnterNamePage;
