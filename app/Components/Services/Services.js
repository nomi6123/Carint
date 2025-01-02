"use client";
import Image from "next/image";

const cards = [
  {
    img: "/s1.png",
    title: "Air Transport",
    description: "Efficient and reliable air transport solutions designed to meet your global logistics needs. We ensure quick and secure deliveries across international borders.",
    btn: "Read More",
  },
  {
    img: "/s2.png",
    title: "Cargo Transport",
    description: "Comprehensive cargo transport services tailored for heavy and large-scale shipments. We prioritize safe handling and timely delivery for all your goods.",
    btn: "Read More",
  },
  {
    img: "/s3.png",
    title: "Trucks Transport",
    description: "Dependable truck transport services ideal for regional and cross-country logistics. We guarantee on-time deliveries with utmost care.",
    btn: "Read More",
  },
  {
    img: "/s4.png",
    title: "Train Transport",
    description: "Sustainable and cost-effective train transport services for bulk goods. Experience reliable freight solutions for long-distance transportation.",
    btn: "Read More",
  },
];

const Services = () => {
  return (
    <div id="services" className="w-full py-12 bg-white mt-5">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center px-4">
        {/* Heading */}
        <div className="w-full flex flex-col items-center gap-5">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <span className="hidden sm:block w-14 h-1 mt-1 bg-[#0A97B0]"></span>
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
              Our <span className="text-[#0A97B0]">Services</span>
            </h2>
            <span className="hidden sm:block w-14 h-1 mt-1 bg-[#0A97B0]"></span>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-center px-2 sm:px-6">
          We offer reliable transport solutions across air, cargo, truck, and train modes, ensuring secure and timely deliveries tailored to your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-5 bg-gray-100 p-5 rounded-md shadow-blue-600 shadow-sm transition-transform transform hover:scale-105"
            >
              <Image
                src={item.img}
                alt="Service Image"
                width={80}
                height={80}
                className="object-cover mx-auto sm:mx-0"
              />
              <div className="flex flex-col gap-1 justify-start items-start">
                <h3 className="uppercase text-xl sm:text-2xl font-semibold tracking-tighter text-center sm:text-left">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center sm:text-left">
                  {item.description}
                </p>
                <button className="font-bold text-sm sm:text-base mt-2 text-center sm:text-left transition-colors hover:text-[#0A97B0]">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
