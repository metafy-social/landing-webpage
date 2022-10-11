
import styled from "styled-components";

export const Header = styled.h3`
  
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #f4d504;
  margin-top: 3.5rem;
  gap:2px;
  margin-left: 35rem;
  margin-bottom:2rem;

  .h3{
    font-family: "Zen Dots", cursive;
  }

  @media screen and (max-width: 2000px) {
    transition: 0.8s all ease;
    margin-left: 45rem;
    margin-bottom:3rem;
    
  }

  @media screen and (max-width: 1800px) {
    transition: 0.8s all ease;
    margin-left: 42rem;
    margin-bottom:3rem;
  }

  @media screen and (max-width: 1650px) {
    transition: 0.8s all ease;
    margin-left: 38rem;
  }

  @media screen and (max-width: 1600px) {
    transition: 0.8s all ease;
    margin-left: 35rem;
  }

  @media screen and (max-width: 1550px) {
    transition: 0.8s all ease;
    margin-left: 32rem;
  }

  @media screen and (max-width: 1450px) {
    transition: 0.8s all ease;
    margin-left: 10rem;
  }

  @media screen and (max-width: 1350px) {
    transition: 0.8s all ease;
    margin-left: 8rem;
  }

  @media screen and (max-width: 1250px) {
    margin-left: 5rem;
  }

  @media (max-width: 1150px) {
    width: 50rem;
    margin-left: 20rem;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 15rem;
  }

  @media screen and (max-width: 960px) {
    margin-left: 4rem;
    width: 50rem;
  }

  @media (max-width: 900px) {
    width: 40rem;
    margin-left: 7rem;
  }
  @media (max-width: 600px) {
    width: 20rem;
    margin-left: 5rem;
  }
  @media (max-width: 450px) {
    margin-left: 2rem;
  }
`

export const Glass = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30rem;
  z-index: 1;
  width:100wh;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(244, 213, 4, 0.37);
  margin: 1.2rem 5rem 0 5rem;

  @media screen and (max-width: 2000px) {
    transition: 0.8s all ease;
    margin-left: 14rem;
    
  }

  @media screen and (max-width: 1800px) {
    transition: 0.8s all ease;
    margin-left:6rem;
  }

  @media screen and (max-width: 1650px) {
    transition: 0.8s all ease;
    margin-left: 8rem;
  }

  @media screen and (max-width: 1550px) {
    transition: 0.8s all ease;
    margin-left: 10rem;
  }

  @media screen and (max-width: 1450px) {
    transition: 0.8s all ease;
    margin-left: 10rem;
  }

  @media screen and (max-width: 1350px) {
    transition: 0.8s all ease;
    margin-left: 8rem;
  }

  @media screen and (max-width: 1250px) {
    margin-left: 5rem;
  }

  @media (max-width: 1150px) {
    width: 50rem;
    margin-left: 10rem;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 6rem;
  }

  @media screen and (max-width: 960px) {
    margin-left: 4rem;
    width: 50rem;
  }

  @media (max-width: 900px) {
    width: 40rem;
    margin-left: 3rem;
  }

  @media (max-width: 750px) {
    width: 40rem;
    margin-left: 3rem;
  }
  @media (max-width: 600px) {
    width: 28rem;
    height: 24rem;
  }
  @media (max-width: 500px) {
    width: 20rem;
    height: 22rem;
    margin-left: 1.75rem;
  }
`
export const LandingWrapper = styled.div`
  
color: #fff;
position: relative;
display: flex;
min-height:100%;
position:fixed;
overflow-y:scroll;
scrollbar:hidden;
overflow-x:hidden;
}
`;

export const Content = styled.div`
  position: absolute;
  top: 30px;
  flex-direction: column;
  scrollbar:hidden;

  @media (max-width: 1024px) {
    transform: scale(0.8) transform(200px);
  }
  @media (max-width: 800px) {
    transform: scale(0.7) transform(600px);
  }
  @media (max-width: 600px) {
   scrollbar:hidden;

  }
  
  @media (max-width: 375px) {
    
    width:375px;
  }
 


`;
