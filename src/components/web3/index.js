import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Spline from "@splinetool/react-spline";
import { LandingWrapper, Content, Glass, Menu } from "../Leaderboard/LeaderboardElements";
import { useQuery } from "react-query";
import axios from "react-axios";

const Web3 = () => {

    const [repo, setRepo] = useState([]);
    const [search, setSearch] = useState("");
  
    //toggle media-query
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    //query
  
    const getData = async () =>{
      try {
        const data = await axios.get(
          "https://api.hacktoberfest.metafy.social/leaderboard"
        );
        console.log(data.data);
        setRepo(data.data);
      } catch (e) {
        console.log(e);
      }
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <div>
        <LandingWrapper>
          <Spline scene="https://prod.spline.design/O4T4WRxvG4luKqG1/scene.splinecode" />
  
          <Content>
            <Navbar toggle={toggle} />
            <Glass>
              <Menu>
                
                {repo.map(item =>{
                  return(
                    <div>
                      <h1>{item.rank}</h1>
                      {/* <h1>{item.}</h1>
                      <h1>{item.username}</h1>
                      <h1>{item.username}</h1> */}
                      {/* <h1>{item.repo}</h1> */}
                    </div>
                  )
                })}
              </Menu>
            </Glass>
          </Content>
        </LandingWrapper>
      </div>
    );
  };
  
  export default Web3;
  