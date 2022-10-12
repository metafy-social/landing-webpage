import styled from "styled-components";

export const Head = styled.h3`
font-family: "Zen Dots", cursive;
  letter-spacing: 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #fff;
  padding-bottom: 1rem;
  margin-right: 22rem;

  h3 {
    font-family: "Zen Dots", cursive;
  }
  
  @media (max-width: 800px) {
    margin-right: 0rem;
    display:none;
  }
  @media (max-width: 600px) {
    margin-right: 0rem;
    display:none;
  }
  @media (max-width: 375px) {
    margin-right: 0rem;
    display:none;

  }
`
export const SM = styled.div`
  //margin-left:15rem;
  text-align:center;
  justify-content:center;

  @media (max-width: 1920px) {
    // margin-left:16rem;
    
  }

  // @media (max-width: 800px) {
  //   margin-left:12rem;
  // }
  // @media (max-width: 600px) {
  //   margin-left:6rem;
  // }
  // @media (max-width: 375px) {
  //   margin-left:2rem;

  // }

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
    right: auto;
    left: 50%;
    height: 100%;
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
  scrollbar:hidden;

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
  p {
    line-height: 1.8;
    font-size: 1.1rem;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    border-radius: 20px;
    width: 650px;
    height: 420px;
    display: flex;
    margin-top: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(244, 213, 4, 0.37);
    backdrop-filter: blur(15px);

    margin: 50px 30px 0 680px;
    width:680px;
    padding:20px ;

    @media screen and (max-width: 2000px) {
      transition: 0.8s all ease;
      width: 60rem;
      height: 35rem;
      font-size: 1.35rem; 
    }
  
    @media screen and (max-width: 1700px) {
      transition: 0.8s all ease;
      width: 55rem;
      height: 35rem;
      font-size: 1.35rem; 
      
    }
  
    @media screen and (max-width: 1650px) {
      transition: 0.8s all ease;
      width: 50rem;
      height: 35rem;
      font-size: 1.35rem; 
      
    }

    @media screen and (max-width: 1550px) {
      transition: 0.8s all ease;
      width: 45rem;
      height: 35rem;
      font-size: 1.3rem; 
      margin-left:40rem;
      
    }
  
    @media screen and (max-width: 1450px) {
      transition: 0.8s all ease;
      width: 45rem;
      height: 23rem;
      font-size: 1.1rem; 
      margin-left:32rem;
     
    }
  
    @media screen and (max-width: 1350px) {
      transition: 0.8s all ease;
      width: 45rem;
      height: 22rem;
      font-size: 1rem; 
      margin-left:28rem;
    }
  
    @media screen and (max-width: 1250px) {
      transition: 0.8s all ease;
      width: 45rem;
      height: 22rem;
      font-size: 1rem; 
      margin-left:20rem;
      
    }

    @media screen and (max-width: 1150px) {
      transition: 0.8s all ease;
      transition: 0.8s all ease;
      width: 40rem;
      height: 22rem;
      font-size: 1rem; 
      margin-left:10rem;
    }
  
    @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
     
      width: 35rem;
      height: 36rem;
      font-size: 1.0rem; 
      margin-left:10rem;
    }

    @media (max-width: 850px) {
      transition: 0.8s all ease;
      width: 35rem;
      height: 36rem;
      font-size: 1.0rem; 
      margin-left:3rem;
    }


    @media (max-width: 600px) {
      width: 28rem;
      margin-left: 0rem;
      height: 45rem;
    }

    @media (max-width: 450px) {
      width: 24rem;
      margin-left: 1rem;
      height: 50rem;
    }
    
    @media (max-width: 400px) {
      width: 23rem;
      margin-left: 1rem;
      height: 53rem;
    }
  }

  h1{
    margin: 70px 30px 0 800px;
    font-size: 1.75rem;

    @media screen and (max-width: 2000px) {
      transition: 0.8s all ease;
      margin-left: 60rem;
    }
  
    @media screen and (max-width: 1700px) {
      transition: 0.8s all ease;
      margin-left: 55rem; 
    }
  
    @media screen and (max-width: 1650px) {
      transition: 0.8s all ease;
      margin-left: 52rem; 
    }

    @media screen and (max-width: 1550px) {
      transition: 0.8s all ease;
      margin-left:50rem;
      
    }
  
    @media screen and (max-width: 1450px) {
      transition: 0.8s all ease;
      margin-left:40rem;
    }
  
    @media screen and (max-width: 1350px) {
      transition: 0.8s all ease;
      margin-left:35rem;
    }
  
    @media screen and (max-width: 1250px) {
      margin-left:30rem;
    }

    @media screen and (max-width: 1150px) {
      margin-left:25rem;
    }
  
    @media screen and (max-width: 960px) {
      margin-left:20rem;
    }

    @media (max-width: 800px) {
      margin: 1rem;
    width:42rem;
    padding:20px ;
    color: #fff;
    
    }
    @media (max-width: 600px) {
     

    }
    @media (max-width: 375px) {
     
  
    }
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
`

export const Message = styled.div`
background-color: #f4d504;
  color: #333;
  font-weight: 800;
  overflow: hidden;
  position: absolute;
  flex-direction: column;
  padding-right: 25px;
  margin-left: 2.2rem;
  left:20rem;
  margin-top: -0.5rem;

  animation: openclose 8s ease-in-out infinite;

  @media (max-width: 1024px) {
    margin-right: 0rem;
  }
  @media (max-width: 800px) {
    margin-right: 0rem;
  }
  @media (max-width: 600px) {
    display:none;
  }
  @media (max-width: 375px) {
    // left:0rem;
    display:none;

  }
`;
