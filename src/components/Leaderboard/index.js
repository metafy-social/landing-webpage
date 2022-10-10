import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { LandingWrapper, Content, Glass, Menu } from "./LeaderboardElements";
import Navbar from "../Navbar";

const LearderBoard = () => {

  

  //toggle media-query
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
          <Glass>
            <Menu>
            </Menu>
          </Glass>
        </Content>
      </LandingWrapper>
    </div>
  );
};

export default LearderBoard;
