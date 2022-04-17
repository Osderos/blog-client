import React from "react";
import { AnimatedGradientTitle } from "./Animations/Animations";

function Header() {
  return (
    <header>
      <AnimatedGradientTitle
        duration="5s"
        timingFunction="ease-in-out"
        iterationCount="infinite"
      >
        OsDeRos's Blog Mock
      </AnimatedGradientTitle>
    </header>
  );
}

export default Header;
