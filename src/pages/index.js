import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Landing from "../components/Landing";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle =() =>{
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      
      <Landing />
    </>
  );
};

export default Home;
