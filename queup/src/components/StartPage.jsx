import React from "react";
import { useState } from "react";
import "./StartPage.css";
import WelcomeHeader from "./StartPage/WelcomeHeader/WelcomeHeader";
import StartButton from "./StartPage/StartButton/StartButton";
import PlayerCount from "./StartPage/PlayerCount/PlayerCount";
import OnboardingCarousel from "./StartPage/OnboardingCarousel/OnboardingCarousel";

const StartPage = () => {
  //pass data from PlayerCount (child component) to the StartPage (parent component)
  const [playerCount, setPlayerCount] = useState("");

  const passPlayerCount = (playerCount) => {
    setPlayerCount(playerCount);
  };
  // place useState and useEffect functions here to handle routing
  return (
    <div className="start-page-container">
      <WelcomeHeader></WelcomeHeader>
      <OnboardingCarousel></OnboardingCarousel>
      {/* pass the passPlayerCount function as a prop to the child component PlayerCount */}
      <PlayerCount passPlayerCount={passPlayerCount}></PlayerCount>
      {/* pass playerCount data to the StartButton is*/}
      <StartButton playerCount={playerCount}></StartButton>
    </div>
  );
};

export default StartPage;
