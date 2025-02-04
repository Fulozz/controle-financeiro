import React from 'react';

const DashboardCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
      <div className="card bg-white shadow-md rounded-lg p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">Card 1</h3>
        <p>Conteúdo do Card 1</p>
      </div>
      <div className="card bg-white shadow-md rounded-lg p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">Card 2</h3>
        <p>Conteúdo do Card 2</p>
      </div>
      <div className="card bg-white shadow-md rounded-lg p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">Card 3</h3>
        <p>Conteúdo do Card 3</p>
      </div>
    </div>
  );
};

export default DashboardCards;