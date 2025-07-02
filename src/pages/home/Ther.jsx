import React from 'react';

const Ther = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 min-h-screen">
      {/* مربع 1 */}
      <div className="bg-[#F5F5EF] p-4 sm:p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-[#3E4F63] text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
            Questionnaire<br />stage
          </h2>
          <p className="text-[#3E4F63] text-sm sm:text-base md:text-lg pt-4 font-mono">
We send a simple questionnaire to the client, requesting important information about the facility. The goal is to obtain the information upon which we will later build our marketing plan.        </p>
        </div>
      </div>

      {/* مربع 2 */}
      <div className="bg-[#3E4F63] flex items-center justify-center text-[#F5F5EF] text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
        OTM
      </div>

      {/* مربع 3 */}
      <div className="bg-[#3E4F63] p-4 sm:p-6 md:p-8 flex items-center">
        <h2 className="text-[#F5F5EF] text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
          Business<br />strategy
        </h2>
      </div>

      {/* مربع 4 */}
      <div className="bg-[#F5F5EF] p-4 sm:p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-[#3E4F63] text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
            Analysis<br />and study<br />stage
          </h2>
          <p className="text-[#3E4F63] text-sm sm:text-base md:text-lg pt-4 font-mono">
            The team analyzes the facility's information and develops a study aimed at increasing the facility's occupancy rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ther;
