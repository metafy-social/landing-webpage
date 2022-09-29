import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Home from './pages';

import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Home/>
        </Router>
      
       {/* <Route exact path="/" component={Home} />
       <Route exact path="/leaderboard" component={Leaderboard} />
       <Route exact path="/countdown" component={Countdown} /> */}
    </div>
  );
}

export default App;
