import React, { useState, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import {
  LandingWrapper,
  Content,
  Glass,
  FlipCard,
  Title,
  Container,
  Body,
} from "./CountdownElements";
import Navbar from "../Navbar";
import LKD from "../../assets/linkedin.png";
import GH from "../../assets/github.png";
import INS from "../../assets/instagram.png";
import Sidebar from "../Sidebar";

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
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
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

      if (days < 10) {
        setTimerDays("0" + days);
      }
      if (hours < 10) {
        setTimerHours("0" + hours);
      }
      if (minutes < 10) {
        setTimerMinutes("0" + minutes);
      }
      if (seconds < 10) {
        setTimerSeconds("0" + seconds);
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
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />

          <Glass>
            <div className="body">
              <Container>
                <div className="flexbox">
                  <div class="container-segment">
                    <Title>Days</Title>

                    <FlipCard id="days">
                      <Body>{timerDays}</Body>
                    </FlipCard>
                  </div>
                  <div class="container-segment">
                    <Title>Hours</Title>

                    <FlipCard id="days">
                      <Body> {timerHours}</Body>
                    </FlipCard>
                  </div>
                </div>
                <div className="flexbox">
                  <div class="container-segment">
                    <Title>Minutes</Title>

                    <FlipCard id="minutes">
                      <Body>{timerMinutes}</Body>
                    </FlipCard>
                  </div>
                  <div class="container-segment">
                    <Title>Seconds</Title>

                    <FlipCard id="seconds">
                      <Body>{timerSeconds}</Body>
                    </FlipCard>
                  </div>
                </div>
              </Container>
            </div>
          </Glass>
        </Content>
      </LandingWrapper>
    </div>
  );
};

export default Countdown;
