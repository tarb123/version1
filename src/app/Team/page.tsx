 "use client";
import React from "react";
import { team } from "../../../data/data";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

type TeamMember = {
  cover: string;
  name: string;
  work: string;
};

const TeamCard = () => {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        {/* 🔹 Background Video */}
        <video
          src="/explore services.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* 🔹 Content without black overlay */}
        <div className="relative z-20 container mx-auto px-6">
          <h2 className="text-Red font-semibold text-center pb-12 text-4xl">
            Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member: TeamMember, index: number) => (
              <div
                key={index}
                className="bg-white overflow-hidden transition hover:shadow-2xl"
              >
                <div className="relative group">
                  <Image
                    src={member.cover}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <SocialIcon href="https://facebook.com" title="Facebook" color="#1877F2">
                      <FaFacebookF />
                    </SocialIcon>
                    <SocialIcon href="https://twitter.com" title="Twitter" color="#1DA1F2">
                      <FaTwitter />
                    </SocialIcon>
                    <SocialIcon href="https://linkedin.com" title="LinkedIn" color="#0077B5">
                      <FaLinkedinIn />
                    </SocialIcon>
                    <SocialIcon href="https://instagram.com" title="Instagram" color="#E4405F">
                      <FaInstagram />
                    </SocialIcon>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h2>
                  <p className="text-gray-600 text-sm">{member.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamCard;

// 🔧 Social Icon Component
const SocialIcon = ({
  href,
  title,
  color,
  children,
}: {
  href: string;
  title: string;
  color: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="text-white hover:text-white hover:scale-110 transition-all duration-300 text-xl p-2 rounded-full"
    style={{ backgroundColor: color }}
  >
    {children}
  </a>
);
