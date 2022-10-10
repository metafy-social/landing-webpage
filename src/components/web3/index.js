import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Spline from "@splinetool/react-spline";
import { Glass, LandingWrapper, Content } from "../python/PythonElements";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const getData = async (value) => {
  const { data } = await axios.get(
    `https://api.hacktoberfest.metafy.social/leaderboard?repo=${value}`
  );
  return data;
};

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
    margin: "auto",
    scrollbar: "hidden",
    overflow: "hidden",
  },
});

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
    getData("web3-smart-contracts").then((data) => {
      console.log(data);
      setCategory(data);
    });
  }, []);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontFamily: "Zen Dots",
      textTransform: "uppercase",
      letterSpacing: "3px",
      fontWeight: "600",
      boxShadow: "0 8px 32px 0 rgba(255, 255, 255, 0.18)",
    },
    body: {
      fontSize: 22,
      fontWeight: "400",
      fontFamily: "Teko",
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      opacity: "0.8",
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.common.white,
      },
    },
  }))(TableRow);

  const classes = useStyles();

  return (
    <div>
      <LandingWrapper>
        <Spline scene="https://prod.spline.design/O4T4WRxvG4luKqG1/scene.splinecode" />

        <Content>
          <Navbar toggle={toggle} />
          <h2 className="header">Web 3.0 Leaderboard</h2>
          <Glass>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Rank</StyledTableCell>
                    <StyledTableCell align="center">Avatar</StyledTableCell>
                    <StyledTableCell align="center">UserName</StyledTableCell>
                    <StyledTableCell align="center">Points</StyledTableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {category.map((item) => {
                    return (
                      <StyledTableRow key={item.username}>
                        <StyledTableCell align="center" scope="row">
                          {item.rank}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <img
                            src={item.avatar_url}
                            alt="avatar"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.username}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.points.toFixed(4)}
                        </StyledTableCell>
                        
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Glass>
        </Content>
      </LandingWrapper>
    </div>
  );
};

export default Python;
