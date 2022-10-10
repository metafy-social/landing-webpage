
import styled from "styled-components";

export const Glass = styled.div`
  display: flex;
  justify-content: space-between;
  height: 500px;
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

  @media (max-width: 1024px) {
    width:60rem;
    margin:0 3rem;
    height:50rem;
  }
  @media (max-width: 800px) {
    width:40rem;
    margin:0 3rem;
    height:50rem;
  }
  @media (max-width: 600px) {
    width:20rem;
    margin:0 3rem;
    height:50rem;
   
  }
  @media (max-width: 375px) {
    transform: scale(0.5) transform(-50px);
    width:375px;

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

  @media (max-width: 1024px) {
    transform: scale(0.8) transform(200px);
  }
  @media (max-width: 800px) {
    transform: scale(0.7) transform(600px);
  }
  @media (max-width: 600px) {
    transform: scale(0.5) transform(-100px);
    scrollbar:hidden;
  }
  @media (max-width: 375px) {
    transform: scale(0.5) transform(-50px);
    width:375px;

  }
}
`;

export const Content = styled.div`
  position: absolute;
  top: 30px;
  flex-direction: column;
  gap: 70px;
  scrollbar:hidden;

  @media (max-width: 1024px) {
    transform: scale(0.8) transform(200px);
  }
  @media (max-width: 800px) {
    transform: scale(0.7) transform(600px);
  }
  @media (max-width: 600px) {
   scrollbar:hidden;
   width: 100%;


  }
  @media (max-width: 375px) {
    transform: scale(0.5) transform(-50px);
    width:375px;
  }
 


`;
