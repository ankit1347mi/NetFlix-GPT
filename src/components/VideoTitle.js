import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black text-xl p-3 px-10 mx-2 rounded-lg hover:bg-opacity-80">
          ▶Play
        </button>
        <button className="bg-gray-500 text-white text-xl p-3 px-10 mx-2 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
