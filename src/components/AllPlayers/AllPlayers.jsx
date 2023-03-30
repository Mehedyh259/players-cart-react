import React, { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import LeaderBoard from "./../LeaderBoard/LeaderBoard";

const AllPlayers = ({leaderBoard, setLeaderBoard}) => {
  const [players, setPlayers] = useState([]);
  

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleSelectPlayer = (id, picture, name, price) => {
    const previousPlayerdata = JSON.parse(localStorage.getItem("players"));
    const players = [];
    const playerdata = { id, picture, name, price };

    if (previousPlayerdata) {
      const isPlayerAdded = previousPlayerdata.find((pd) => pd.id == id);

      if (isPlayerAdded) {
        swal("Sorry", "Player Already added", "error");
      } else {
        players.push(...previousPlayerdata, playerdata);
        localStorage.setItem("players", JSON.stringify(players));
        setLeaderBoard(players);
        swal("Yes!!", "Successfully added", "success");
      }
    } else {
      players.push(playerdata);
      localStorage.setItem("players", JSON.stringify(players));
      setLeaderBoard(players);
      swal("Yes!!", "Successfully added", "success");
    }
  };

  const handleUnSelectPlayer = (id) => {
    const previousPlayerdata = JSON.parse(localStorage.getItem("players"));

    if (previousPlayerdata) {
      const isMatch = previousPlayerdata.find((pd) => pd.id == id);
      if (isMatch) {
        const restOfplayer = previousPlayerdata.filter((pd) => pd.id != id);
        localStorage.setItem("players", JSON.stringify(restOfplayer));
        setLeaderBoard(restOfplayer);
        swal("Yes!!", "Successfully Removed", "success");
      } else {
        swal("Sorry", "Player Not Added Yet", "error");
      }
    } else {
      swal("Sorry", "Player Not Added Yet", "error");
    }
  };

  return (
    <div className="grid grid-cols-4 gap-6 container mx-auto my-10">
      <div className="col-span-4 lg:col-span-3 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {players.map((player) => (
          <SinglePlayer
            key={player.id}
            player={player}
            handleSelectPlayer={handleSelectPlayer}
            handleUnSelectPlayer={handleUnSelectPlayer}
          ></SinglePlayer>
        ))}
      </div>
      <LeaderBoard leaderBoard={leaderBoard} setLeaderBoard={setLeaderBoard}></LeaderBoard>
    </div>
  );
};

export default AllPlayers;
