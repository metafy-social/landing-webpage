import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";
import Leaderboard from "./components/Leaderboard";
import Countdown from "./components/Countdown";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle =() =>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
      
      
      </Router>

      {/* <Route exact path="/" component={Home} />
       <Route exact path="/leaderboard" component={Leaderboard} />
       <Route exact path="/countdown" component={Countdown} /> */}
    </div>
  );
}

export default App;
