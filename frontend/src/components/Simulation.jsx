import { React, useState } from "react";
import _ from "lodash";
// import PropTypes from "prop-types";
import { Stack } from "@mui/material/";
import Tower from "./Tower";

export default function Simulation() {
  const [game, setGame] = useState({
    a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    b: [21],
    c: [12],
  });

  const [selectedTower, setSelectedTower] = useState("");

  function handleClick(tower) {
    if (selectedTower === "") {
      setSelectedTower(tower);
    } else {
      if (game[tower].length >= 0 && game[tower][0] < game[selectedTower][0]) {
        console.log("cant do");
        return;
      }
      const newGame = _.cloneDeep(game);
      const disk = newGame[selectedTower].shift();
      newGame[tower].unshift(disk);
      setGame(newGame);

      // Elaborated way to make the disk fall down into the new position
      setSelectedTower(tower);
      setTimeout(() => setSelectedTower(""), 100);
    }
  }

  return (
    <Stack direction="row" sx={{ height: "100%", paddingBottom: "1em" }}>
      <Tower
        disks={game.a}
        selected={selectedTower === "a"}
        handleClick={() => handleClick("a")}
      />
      <Tower
        disks={game.b}
        selected={selectedTower === "b"}
        handleClick={() => handleClick("b")}
      />
      <Tower
        disks={game.c}
        selected={selectedTower === "c"}
        handleClick={() => handleClick("c")}
      />
    </Stack>
  );
}
