import React from 'react';

const Ther = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 grid-rows-2 min-h-screen">
      {/* مربع 1 */}
      <div className="bg-[#F5F5EF] p-6 sm:p-8 md:p-12 flex flex-col justify-between">
        <div>
          <h2 className="text-[#3E4F63] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Questionnaire<br />stage
          </h2>
          <p className="text-[#3E4F63] text-lg sm:text-xl md:text-2xl pt-8 sm:pt-12 md:pt-16 font-mono mb-6 sm:mb-8">
            At this stage, we send a questionnaire to the client, requesting some necessary information about the facility.
          </p>
        </div>
      </div>

      {/* مربع 2 */}
      <div className="bg-[#3E4F63] flex items-center justify-center text-[#F5F5EF] text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-serif font-bold">
        OTM
      </div>

      {/* مربع 3 */}
      <div className="bg-[#3E4F63] p-6 sm:p-8 md:p-12 flex items-center">
        <h2 className="text-[#F5F5EF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Business<br />strategy
        </h2>
      </div>

      {/* مربع 4 */}
      <div className="bg-[#F5F5EF] p-6 sm:p-8 md:p-12 flex flex-col justify-between">
        <div>
          <h2 className="text-[#3E4F63] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Analysis<br />and study<br />stage
          </h2>
          <p className="text-[#3E4F63] text-lg sm:text-xl md:text-2xl pt-8 sm:pt-12 md:pt-16 font-mono mb-6 sm:mb-8">
            The team analyzes the facility's information and develops a study aimed at increasing the facility's occupancy rates. The plan is then assigned to the client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ther;