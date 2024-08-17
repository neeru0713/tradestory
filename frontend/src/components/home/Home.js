import React from "react";

const Home = () => {
  return (
    <div className="home h-full bg-gray-100 w-full flex flex-col gap-4 p-10">
      <h1 className="text-xl font-semibold text-left">Hello Ritish</h1>
      <div className="flex gap-5">
        <div className="p-4 bg-white">Total returns</div>
        <div className="p-4 bg-white">Total P&L</div>
        <div className="p-4 bg-white">R Multiple</div>
      </div>
    </div>
  );
};

export default Home;
