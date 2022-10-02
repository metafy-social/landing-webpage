import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { LandingWrapper, Content, Glass } from "./CountdownElements";
import Navbar from "../Navbar";
import LKD from "../../assets/linkedin.png";
import GH from "../../assets/github.png";
import INS from "../../assets/instagram.png";

const countToDate = new Date().setHours(new Date().getHours() + 24);
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);

  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-ones]"), hours % 10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  topHalf.textContent = startNumber
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}

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
         

          <Glass>
            <div className="glass">
            
            
          
            <div className="body">
              <div class="container">
              <div class="container-segment">
                <div class="segment-title">Hours</div>
                <div class="segment">
                  <div class="flip-card" data-hours-tens>
                    <div class="top">2</div>
                    <div class="bottom">2</div>
                  </div>
                  <div class="flip-card" data-hours-ones>
                    <div class="top">4</div>
                    <div class="bottom">4</div>
                  </div>
                </div>
              </div>
              <div class="container-segment">
                <div class="segment-title">Minutes</div>
                <div class="segment">
                  <div class="flip-card" data-minutes-tens>
                    <div class="top">0</div>
                    <div class="bottom">0</div>
                  </div>
                  <div class="flip-card" data-minutes-ones>
                    <div class="top">0</div>
                    <div class="bottom">0</div>
                  </div>
                </div>
              </div>
              <div class="container-segment">
                <div class="segment-title">Seconds</div>
                <div class="segment">
                  <div class="flip-card" data-seconds-tens>
                    <div class="top">0</div>
                    <div class="bottom">0</div>
                  </div>
                  <div class="flip-card" data-seconds-ones>
                    <div class="top">0</div>
                    <div class="bottom">0</div>
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
