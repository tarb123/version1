'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Main } from 'next/document';
import QuestionBlock from '../PP/QuestionBlock';
import ResultsPage from '../PP/ResultsPage';
import SpiderChart from '../PP/SpiderChart';

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


// I have a folder project
// my-project\src
// my-project\src\app
  
//   my-project\src\app\api
//     my-project\src\app\api\add-questions
//     my-project\src\app\api\candidates
//     my-project\src\app\api\get-responses
//     my-project\src\app\api\ping
//     my-project\src\app\api\questions
//     my-project\src\app\api\saveResponses

//   my-project\src\app\components
//     my-project\src\app\components\Home
//       my-project\src\app\components\Home\Habout.tsx
//       my-project\src\app\components\Home\Hero.tsx
//       my-project\src\app\components\Home\Home.tsx
//       my-project\src\app\components\Home\ServiceList.tsx
  
//     my-project\src\app\components\nav
//       my-project\src\app\components\nav\Header.tsx
//       my-project\src\app\components\nav\ResponsiveNav.tsx
  
//   my-project\src\app\EnterNamePage
//     my-project\src\app\EnterNamePage\page.tsx 

//   my-project\src\app\footer
//     my-project\src\app\footer\page.tsx  

//   my-project\src\app\Main
//     my-project\src\app\Main\page.tsx
    
//   my-project\src\app\PP 
//   my-project\src\app\PP\QuestionBlock.tsx
//   my-project\src\app\ResultsPage.tsx
//   my-project\src\app\SpiderChart.tsx 
     
// my-project\src\utils
//   my-project\src\utils\dbConnect.js
// my-project\src\App.css
// my-project\.env.local
// my-project\.gitignore
// my-project\.hintrc
// my-project\config.js
// my-project\eslint.config.mjs
// my-project\next-env.d.ts
// my-project\next.config.ts
// my-project\package-lock.json
// my-project\package.json
// my-project\postcss.config.mjs
// my-project\README.md
// my-project\tailwind.config.ts
// my-project\tsconfig.json