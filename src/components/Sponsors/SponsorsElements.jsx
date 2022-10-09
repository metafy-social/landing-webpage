import styled from "styled-components";

export const LandingWrapper = styled.div`
  
color: #fff;
position: relative;
display: flex;
min-height:100%;
position:fixed;
overflow-y:scroll;
overflow-x:hidden;

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
    gap: 40px;
  }
  p {
    line-height: 1.8;
    font-size: 1.05rem;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    border-radius: 20px;
    width: 650px;
    height: 370px;
    display: flex;
    margin-top: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(244, 213, 4, 0.37);
    backdrop-filter: blur(15px);
  }

  h1{
    margin: 70px 30px 0 800px;
    font-size: 1.75rem;
  }
  p {
    margin: 50px 30px 0 800px;
    width:680px;
    padding:20px ;
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
  height: 500px;
  z-index: 1;
  width: 100%;
  width: 1050px;
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
  margin: 80px 0 0 240px;
`

