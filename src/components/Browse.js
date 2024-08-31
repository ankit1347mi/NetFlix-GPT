import React, { useEffect } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/constants";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
      {/* <div>
        <img src={BG_IMG} alt="backgroundimg" />
      </div> */}
    </div>
  );
};

export default Browse;
