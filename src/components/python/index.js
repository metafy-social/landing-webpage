import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Spline from "@splinetool/react-spline";
import {
  LandingWrapper,
  Content,
  Glass,
  Menu,
} from "../Leaderboard/LeaderboardElements";
import { useQuery } from "react-query";
import axios from "axios";

const getData = async (value) => {
  const { data } = await axios.get(
    `https://api.hacktoberfest.metafy.social/leaderboard?repo=${value}`
  );

  return data;
};

const Python = () => {
  const [category, setCategory] = useState([]);
  //serach
  // const [search, setSearch] = useState("");

  //toggle media-query
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //query
  // const {data}= useQuery(['leaderboard','repo',category], getData);
  // console.log(data);

  useEffect(() => {
    getData("daily-python-scripts").then((data) => {
      console.log(data);
      setCategory(data);
    });
  }, []);

  return (
    <div>
      <LandingWrapper>
        <Spline scene="https://prod.spline.design/O4T4WRxvG4luKqG1/scene.splinecode" />

        <Content>
          <Navbar toggle={toggle} />
          <Glass>
            <Menu>
              {category.map(item =>{
                  return(
                    <div key={item.username}>
                      <h1>{item.rank}</h1>
                      <h1>{item.points}</h1>
                      <h1>{item.username}</h1>
                      <h1>{item.avatar_url}</h1> 
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

export default Python;
