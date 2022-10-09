import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { LandingWrapper, Content, Glass, Menu } from "./LeaderboardElements";
import Navbar from "../Navbar";
import { useQuery } from "react-query";
import axios from "react-axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

const LearderBoard = () => {

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

  const [num, setNum] = React.useState("");

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <div>
      <LandingWrapper>
        <Spline scene="https://prod.spline.design/O4T4WRxvG4luKqG1/scene.splinecode" />

        <Content>
          <Navbar toggle={toggle} />
          <Glass>
            <Menu>
              <Box sx={{ minWidth: 150,minHeight:50}}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Repo</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={num}
                    label="Repo"
                    onChange={handleChange}
                  >
                    <Link
                    to="/leaderboard?repo=daily-python-scripts"
                    >
                    <MenuItem value={1}>Python</MenuItem>
                    </Link>
                    <Link 
                    to="/leaderboard?repo=web3-smart-contracts"
                    >
                    <MenuItem value={2}>Web3</MenuItem>
                    </Link>
                    
                    
                  </Select>
                </FormControl>
              </Box>

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

export default LearderBoard;
