"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'Interview Struggles',
    image: '/interview.jpeg',
    description: `Why do so many candidates struggle with Job Interviews? And what steps should be taken to improve the job interview process. 
    Job interviews are an important step in getting a job as they give the employers a chance to see if the candidate is….`,
  },
  {
    id: 2,
    title: 'Workplace Culture',
    image: '/culture.jpeg',
    description: `Should we stress upon the importance of Workplace Culture and promote ways to improve it?
Workplace culture plays a crucial role in shaping employee behaviour, satisfaction, engagement, and overall organizational success....`,
  },
  {
    id: 3,
    title: 'Staying in Pakistan or Working Abroad',
    image: '/abroad.jpeg',
    description: `Is staying in Pakistan for work worth it? Would you get a better life and job opportunities abroad?
These are the questions that plague the mind of many Pakistanis especially the current mixture of Gen Z and ....`,
  },
];

const BlogCard = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        src="/explore services.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🔹 Blog content on top of video */}
      <div className="relative z-10 py-3">
          <h2 className="text-Red font-semibold text-center pb-10 text-4xl">
            Blogs
          </h2>        <div className="flex flex-wrap justify-center gap-8 px-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-80 px-7 transition-transform transform hover:scale-105"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={64}
                height={64}
                className="w-full h-48 px-2 object-cover mt-5"
              />
              <h3 className="text-lg font-bold text-center text-Blue">{blog.title}</h3>
              <p className="text-sm text-black mt-2">
                {blog.description}
                <label>
                  <Link href={`/Blogpage/${blog.id}`} className="text-Blue hover:text-Red">
                    Read More
                  </Link>
                </label>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;