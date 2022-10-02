import React, { useState} from "react";
import Spline from "@splinetool/react-spline";
import { LandingWrapper, Content, Glass } from "./CountdownElements";
import Navbar from "../Navbar";
import LKD from "../../assets/linkedin.png";
import GH from "../../assets/github.png";
import INS from "../../assets/instagram.png";

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

          {/* Countdown */}
          <Glass>
            <div className="flex">
              <a href="https://github.com/metafy-social">       
                <img className="logos" src={GH} alt="logo" />
              </a>
              <a href="https://www.linkedin.com/company/81321951/admin/">
                <img className="logos" src={LKD} alt="logo" />
              </a>
              <a href="/">
                <img className="logos" src={INS} alt="logo" />
              </a>
            </div>
          </Glass>
        </Content>
      </LandingWrapper>
    </div>
  );
};

export default Countdown;
