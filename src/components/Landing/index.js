import React, { useState, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { LandingWrapper, Content } from "./LandingElements";
import Navbar from "../Navbar";
import VanillaTilt from "vanilla-tilt";
import LKD from "../../assets/linkedin.png";
import GH from "../../assets/github.png";
import INS from "../../assets/instagram.png";

function Card(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <LandingWrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/O4T4WRxvG4luKqG1/scene.splinecode"
      />

      <Content>
        <Navbar />

        <h1>
          <h3 className="head2">AT METAFY</h3>

          <div class="message">
            <div class="word1">we build</div>
            <div class="word2">we connect</div>

            <div class="word3">we expand</div>
          </div>
        </h1>
        {/* <Card> */}
        <div className="css-typing">
          <div className="text">
            <p className="line">
            <div className="sm">
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
              We are building blockchain based solutions for real-world problems
              and making the blockchain more easily accessible to the public. We
              are a team of developers, designers, and blockchain enthusiasts
              who are passionate about building a better future for the world.
              We are currently working on a few projects and are looking for
              more people to come join us in our mission to make the world a
              better place for everyone.
              
            </p>
          </div>
        </div>
        {/* </Card> */}
      </Content>
    </LandingWrapper>
  );
};

export default Landing;
