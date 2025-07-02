import React from 'react';
import hotelImage from '../../assets/Screenshot 2025-07-02 172520.png';

const Sec = () => {
  return (
    <div className="bg-[#3E4F63]">
      {/* First and Second Sections Combined */}
      <div className="px-4 sm:px-8">
        {/* First Section */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-16">
            {/* Left (Star + Image) */}
            <div className="flex flex-col items-center">
              <div className="text-yellow-300 text-6xl sm:text-7xl mb-4 sm:mb-6">✦</div>
              <img
                src={hotelImage}
                alt="Hotel Reception"
                className="w-[350px] sm:w-[500px] md:w-[600px] h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Right (Text) */}
            <div className="text-white text-center lg:text-left mt-8 sm:mt-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 sm:mb-8">
                Are you looking<br />
                to increase<br />
                occupancy rates<br />
                at your tourist<br />
                facility?
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-mono max-w-xl">
                We are a specialized team working on developing a strategy for tourist facilities to increase occupancy rates.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-[#3E4F63]">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-8 sm:gap-12 py-16">
            {/* Title and Star */}
            <div className="flex flex-col justify-between h-full gap-8 sm:gap-10">
              <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide leading-tight">
                OUR GOALS
              </h2>
              <div className="text-white text-7xl sm:text-8xl mt-10 sm:mt-14">
                ✺
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-6 sm:gap-12 w-full lg:w-2/3">
              <div className="border-4 border-white p-6 sm:p-8 text-white text-xl sm:text-2xl font-mono hover:bg-white hover:text-[#3E4F63] transition-all duration-300">
                Develop a strategy to increase occupancy rates.
              </div>
              <div className="border-4 border-white p-6 sm:p-8 text-white text-xl sm:text-2xl font-mono hover:bg-white hover:text-[#3E4F63] transition-all duration-300">
                Minor modifications increase the attractiveness of the facility.
               </div>
              <div className="border-4 border-white p-6 sm:p-8 text-white text-xl sm:text-2xl font-mono hover:bg-white hover:text-[#3E4F63] transition-all duration-300">
                Achieving real and fast results.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec;
