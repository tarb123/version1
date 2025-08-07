import React from "react";
import Awrapper from "./Awrapper";


const AboutCard = () => {
  return (
    <div className="bg-[#dcdce8] w-full pt-[16vh] md:pt-12 h-screen">
      <section className="py-20 lg:top-12 w-full ">
        {/* Title Section */}
        <h1 className="absolute lg:top-40 top-56 left-1/2 transform -translate-x-1/2 flex items-baseline space-x-1">
          <span className="text-Red font-bold text-3xl">Sanjeed</span>
          <span className="text-[#081b9c] font-bold text-2xl">a!</span>
        </h1>

        {/* Video Section */}
        <div className="container mx-auto flex flex-col md:flex-row px-4 sm:px-6">
          <div className="video-container w-full md:w-1/2 mt-2 md:mt-0 md:pl-1 lg:w-4/5 lg:m-auto py-5 ">
            <video
              src="/Video.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <Awrapper/>
      <div className="margin mt-32"></div>
     
    </div>
  );
};

export default AboutCard;
