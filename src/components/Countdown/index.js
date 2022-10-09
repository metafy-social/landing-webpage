import React, { useState,useRef,useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { LandingWrapper, Content, Glass } from "./CountdownElements";
import Navbar from "../Navbar";
import LKD from "../../assets/linkedin.png";
import GH from "../../assets/github.png";
import INS from "../../assets/instagram.png";

const Countdown = () => {

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("November 01, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor( 
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

      if(days<10){
        setTimerDays("0"+days);
      }
      if(hours<10){
        setTimerHours("0"+hours);
      }
      if(minutes<10){
        setTimerMinutes("0"+minutes);
      }
      if(seconds<10){
        setTimerSeconds("0"+seconds);
      }


    }, 1000);
  }; 

  //componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });


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
            <div className="glass">
              <div className="body">
                <div class="container">
                  <div class="container-segment">
                    <div class="segment-title">Days</div>
                    <div class="segment">
                      <div class="flip-card" id="days">
                        {timerDays}
                      </div>
                    </div>
                  </div>
                  <div class="container-segment">
                    <div class="segment-title">Hours</div>
                    <div class="segment">
                      <div class="flip-card" id="days">
                      {timerHours}
                      </div>
                    </div>
                  </div>
                  <div class="container-segment">
                    <div class="segment-title">Minutes</div>
                    <div class="segment">
                      <div class="flip-card" id="minutes">
                      {timerMinutes}
                      </div>
                    </div>
                  </div>
                  <div class="container-segment">
                    <div class="segment-title">Seconds</div>
                    <div class="segment">
                      <div class="flip-card" id="seconds">
                      {timerSeconds}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          </Glass>
        </Content>
      </LandingWrapper>
    </div>
  );
};

export default Countdown;
