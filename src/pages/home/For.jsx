import React from 'react';

const For = () => {
  return (
    <div className="bg-[#f6f6f1] text-[#3a4a62] px-6 sm:px-8 py-12 sm:py-16 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Strategy Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-[#2c3b52]">
          Our strategy includes:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-20 sm:mb-24">
          <div className="border-2 border-[#3a4a62] rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-xl sm:text-2xl mb-6 text-[#2c3b52]">SHORT-TERM PLAN</h3>
            <div className="bg-[#3a4a62] text-white p-6 sm:p-8 text-lg sm:text-xl rounded-lg">
              Includes direct promotion plans via social media and direct booking applications.
            </div>
          </div>
          
          <div className="border-2 border-[#3a4a62] rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-xl sm:text-2xl mb-6 text-[#2c3b52]">LONG-TERM PLAN</h3>
            <div className="bg-[#3a4a62] text-white p-6 sm:p-8 text-lg sm:text-xl rounded-lg">
              Includes seasonal plans, cooperation with travel agents and long-term evaluation efficiency.
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-[#2c3b52]">
          Our Clients
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
          {[
            {
              name: 'Celine Guajardo',
              company: 'Koa & Sons',
              img: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            {
              name: 'Connor Hamilton',
              company: 'Randelo Co.',
              img: 'https://randomuser.me/api/portraits/men/45.jpg',
            },
            {
              name: 'Aaron Loeb',
              company: 'Anissa & Tam',
              img: 'https://randomuser.me/api/portraits/men/44.jpg',
            },
          ].map((client, index) => (
            <div 
              key={index} 
              className="text-left bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-[#3a4a62]"
                />
                <div className="ml-6">
                  <h4 className="font-bold text-xl sm:text-2xl text-[#2c3b52]">{client.name}</h4>
                  <p className="text-lg sm:text-xl text-[#3a4a62]">{client.company}</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#3a4a62]">
                Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from actual clients is invaluable.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default For;