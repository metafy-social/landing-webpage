import styled from "styled-components";

export const LandingWrapper = styled.div`
  
color: #fff;
position: relative;
display: flex;
text-align: center;
min-height:100%;
position:fixed;
overflow-y:scroll;
overflow-x:hidden;

  @media (max-width: 1400px) {
  transform: scale(0.8) transform(200px);
  //text-align: center;
  }

  @media (max-width: 1200px) {
    transform: scale(0.8) transform(200px);
    //text-align: left;
  }

  @media (max-width: 1110px) {
    transform: scale(0.8) transform(200px);
    //text-align: left;
  }
  @media (max-width: 800px) {
    transform: scale(0.7) transform(600px);
  }
  @media (max-width: 600px) {
    left: 50%;
    margin-left: -600px;

  }
  @media (max-width: 375px) {
    width:375px;
  }
}
`;

export const Content = styled.div`
  position: absolute;
  top: 30px;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 1024px) {
    transform: scale(0.8) transform(200px);
  }
  @media (max-width: 800px) {
    transform: scale(0.7) transform(600px);
  }
  @media (max-width: 600px) {
    transform: scale(0.5) transform(-100px);
    right: auto;
    left: 50%;
    margin-left: -600px;
  }
  @media (max-width: 375px) {
    transform: scale(0.5) transform(-50px);
    width: 375px;
  }
  p {
    line-height: 1.8;
    font-size: 1.05rem;
    border-radius: 20px;
    width: 650px;
    height: 370px;
    display: flex;
    margin-top: 20px;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
  text-transform:uppercase;
  font-weight: 600;
  letter-spacing: 3px;
  margin-top:0rem;
  color:#F2F2F2;
  // text-align: center;
  // justify-content: center;


  @media (max-width: 1150px) {
    font-size: 1.4rem;
    gap:0;
  }

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media (max-width: 800px) {
    margin-right: 0rem;
    font-size: 1rem;
    margin-top:1.5rem;
  }
  @media (max-width: 600px) {
    margin-left: 0px;
    flex-direction:column;
    font-size: 0.8rem;
    width: 100%;
    margin-top:1rem;
    justify-content: center;
  }
  @media (max-width: 375px) {
    left:0rem;
    margin-top:1.5rem;
  }
}

`;

export const Body = styled.button`
  color: #f4d504;
  font-family: "Courier New", Courier, monospace;
  font-size: 7rem;
  background: #383838;

  @media (max-width: 1150px) {
    font-size: 5rem;
  }
  @media (max-width: 800px) {
    font-size: 5rem;
  }
  @media (max-width: 600px) {
    font-size: 4rem;
  }
  @media (max-width: 375px) {
    font-size: 3rem;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  margin-top: 1.25rem;
  justify-content: left;
  align-items: left;
  // margin-left: 18rem;

  @media (max-width: 1150px) {
    gap: 3rem;
    margin-left: 4rem;
    align-items: left;
    margin-left: 15rem;
  }
  @media (max-width: 960px) {
    gap: 1.5rem;
    margin-left: 1.4rem;
    align-items: left;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    margin-left: 0rem;
    margin-top: 0rem;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
    margin-top: 0rem;
  }
`;

export const FlipCard = styled.div`
  display: inline-flex;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.1em;
  //background-color: #383838;
  margin-top: 20px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 11rem;
  height: 11rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(244, 213, 4, 0.37);
  gap: 1rem;

  @media screen and (max-width: 1150px) {
    width: 8rem;
    height: 8rem;
    margin-left: 0rem;
    gap: 0rem;
  }

  @media (max-width: 800px) {
    width: 40rem;
    margin-left: 30px;
    height: 40rem;
  }
  @media (max-width: 600px) {
    transform: scale(0.5) transform(-100px);
    right: auto;
    left: 50%;
    width: 7rem;
    margin-left: 1rem;
    height: 7rem;
  }
  @media (max-width: 375px) {
    transform: scale(0.5) transform(-50px);
    width: 375px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 100px;
  align-items: center;
  padding: 0;
  margin: 0 30px 0 100px;
  font-size: 1rem;
  flex-direction: row;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 50px;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 8px 20px;
    border-radius: 14px;

    // &:hover {
    //   border: 1px solid rgba(255, 255, 255, 0.5);
    // }
  }
`;

export const Glass = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 1000px;
  height: 32rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(244, 213, 4, 0.37);
  margin: 20px 0 0 0px;

  @media screen and (max-width: 2000px) {
    transition: 0.8s all ease;
    margin-left: 30rem;
    margin-top: 4rem;
  }

  @media screen and (max-width: 1700px) {
    transition: 0.8s all ease;
    margin-left: 15rem;
  }

  @media screen and (max-width: 1650px) {
    transition: 0.8s all ease;
    margin-left: 20rem;
  }

  @media screen and (max-width: 1550px) {
    transition: 0.8s all ease;
    margin-left: 17rem;
  }

  @media screen and (max-width: 1450px) {
    transition: 0.8s all ease;
    margin-left: 12rem;
  }

  @media screen and (max-width: 1350px) {
    transition: 0.8s all ease;
    margin-left: 8rem;
    height: 32rem;
  }

  @media screen and (max-width: 1250px) {
    margin-left: 5rem;
    height: 32rem;
  }

  @media (max-width: 1150px) {
    width: 50rem;
    margin-left: 10rem;
    height: 32rem;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 6rem;
    height: 32rem;
  }

  @media screen and (max-width: 960px) {
    margin-left: 4rem;
    width: 50rem;
    height: 32rem;
  }

  @media (max-width: 900px) {
    width: 30rem;
    margin-left: 6rem;
    height: 35rem;
  }
  @media (max-width: 600px) {
    transform: scale(0.5) transform(-100px);
    width: 30rem;
    margin-left: 1rem;
    height: 35rem;
  }
  @media (max-width: 375px) {
    transform: scale(0.5) transform(-50px);
    width: 30rem;
    margin-left: 1rem;
    height: 32rem;
  }
`;
