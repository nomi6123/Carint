import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about">
      <div className="w-full mt-5  min-h-screen max-lg:min-h-0 flex justify-center items-center px-4">
        <div className="w-full max-w-[1200px] flex justify-center items-center gap-4 max-lg:flex-wrap">
          {/* About Section */}
          <div className="w-full lg:w-[45%] flex flex-col justify-start items-start gap-5 p-4">
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <span className="hidden sm:block w-14 h-1 bg-[#0A97B0]"></span>
              <h2 className="font-bold text-2xl lg:text-4xl text-center lg:text-left">
                About <span className="text-[#0A97B0]">Us</span>
              </h2>
              <span className="hidden sm:block w-14 h-1 bg-[#0A97B0]"></span>
            </div>
            <p className="text-sm lg:text-lg max-lg:text-start text-center lg:text-left">
            We provide reliable transport solutions to streamline logistics and enhance service efficiency. Our team delivers exceptional experiences tailored to your unique needs, ensuring secure and timely deliveries.
            </p>
            {/* Button */}
            <button
              className="
                bg-[#0A97B0] text-white text-sm lg:text-lg
                hover:bg-[#065968] hover:text-white
                border border-white rounded-l-[22px] rounded-tr-[22px]
                transition transform duration-300 ease-in-out
                px-5 py-2 lg:px-10 lg:py-2"
            >
              Read More
            </button>
          </div>
          {/* Image Section */}
          <div className="relative w-full px-5 lg:w-[45%] h-[300px] lg:h-[400px]">
            <Image
              src="/about-img.jpg"
              alt="About Us"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
