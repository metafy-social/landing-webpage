import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { LandingWrapper,Content } from "./LeaderboardElements";
import Navbar from "../Navbar";

const Countdown = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <LandingWrapper>
      <Spline scene="https://prod.spline.design/O4T4WRxvG4luKqG1/scene.splinecode" />

      <Content>
        <Navbar toggle={toggle} />
       

        
      </Content>
    </LandingWrapper>
    </div>
  )
}

export default Countdown