import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        action=""
        className="w-1/2 bg-black grid grid-cols-12 bg-opacity-40 rounded-2xl"
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[languageKey].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4  m-4 col-span-3 bg-red-500 text-white rounded-lg">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
