import React, { useState } from "react";
import "./App.css";
import AllPlayers from "./components/AllPlayers/AllPlayers";

import Header from "./components/Header/Header";


function App() {

  const [leaderBoard, setLeaderBoard] = useState([]);

  return (
    <React.Fragment>
      <Header leaderBoard={leaderBoard} setLeaderBoard={setLeaderBoard} ></Header>
      <AllPlayers leaderBoard={leaderBoard} setLeaderBoard={setLeaderBoard} />
    </React.Fragment>
  );
}

export default App;
