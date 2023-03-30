import React from "react";
import { useEffect, useState } from "react";
import PlayersTable from "../PlayersTable/PlayersTable";

const LeaderBoard = ({ leaderBoard,setLeaderBoard }) => {
  const [playerBoard, setPlayerBorad] = useState(leaderBoard);

  useEffect(() => {
    const PlayerBoardsList = JSON.parse(localStorage.getItem("players"));
    setPlayerBorad(PlayerBoardsList);
  }, [leaderBoard]);

  const clearTable = () => {
    localStorage.removeItem("players");
    setPlayerBorad([]);
    setLeaderBoard([])

  };

  return (
    <div className="sticky top-0 col-span-1 hidden lg:block">
      <h2 className="font-bold bg-teal-200 text-center mt-2 py-4 px-2 rounded-t-lg rounded-r-lg">
        Players List :
      </h2>

      <PlayersTable playerBoard={playerBoard}></PlayersTable>
      <button
        onClick={() => clearTable()}
        className="btn btn-error my-4 w-full"
      >
        Clear All
      </button>
    </div>
  );
};

export default LeaderBoard;
