"use client";

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
    <section className="relative w-full h-screen overflow-hidden">
      <video src="/t1.mp4" className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay muted loop playsInline
      />

      {/* ✏️ Input Form */}
      <div className="flex items-center justify-center h-full px-4">
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl p-10 w-full max-w-md">

          {/* Logo + Title */}
          <div className="flex items-center gap-4 mb-6">
          
          <Image src="/courses/cc1.png" alt="Logo" width={64} height={64}
          className="h-16 w-auto object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-800">Enter Your Name</h1>
          </div>

          {/* Input Field */}
          <input type="text"
            className="w-full border-b border-gray px-4 py-2 text-xm mb-6 focus:outline-none focus:border-blue-500"
            placeholder="Your full name"value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Start Button */}
          <button onClick={handleStart}
            className="w-full text-Blue font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Start Questions
          </button>

        </div>
      </div>
    </section>
);};

export default EnterNamePage;