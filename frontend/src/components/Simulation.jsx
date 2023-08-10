import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { Stack } from "@mui/material/";
import Tower from "./Tower";

function Simulation({ game, setGame }) {
  const [selectedTower, setSelectedTower] = React.useState("");
  const [invalidTower, setInvalidTower] = React.useState("");

  function handleClick(tower) {
    if (selectedTower === "") {
      if (game[tower].length > 0) {
        setSelectedTower(tower);
      } else {
        // Elaborated way to signal invalid move
        setInvalidTower(tower);
        setTimeout(() => setInvalidTower(""), 500);
        return;
      }
    } else {
      if (game[tower].length > 0 && game[tower][0] < game[selectedTower][0]) {
        // Elaborated way to signal invalid move
        setInvalidTower(tower);
        setTimeout(() => setInvalidTower(""), 500);
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

  function makeMove(from, to) {
    // Pull up the disk from "from"
    setSelectedTower(from);
    setTimeout(() => {
      const newGame = _.cloneDeep(game);
      // remove disk from "from"
      const disk = newGame[from].shift();
      // and move it to "to"
      newGame[to].unshift(disk);
      // The tower must be in selected/pulled state
      setSelectedTower(to);
      setGame(newGame);
      //pull it down after a second
      setTimeout(() => setSelectedTower(""), 100);
    }, 100);
  }

  return (
    <Stack
      direction="row"
      flexWrap="nowrap"
      sx={{ height: "100%", paddingBottom: "1em", flexGrow: 1 }}
    >
      <Tower
        disks={game.a}
        selected={selectedTower === "a"}
        isInvalid={invalidTower === "a"}
        handleClick={() => handleClick("a")}
      />
      <Tower
        disks={game.b}
        selected={selectedTower === "b"}
        isInvalid={invalidTower === "b"}
        handleClick={() => handleClick("b")}
      />
      <Tower
        disks={game.c}
        selected={selectedTower === "c"}
        isInvalid={invalidTower === "c"}
        handleClick={() => handleClick("c")}
      />
    </Stack>
  );
}

Simulation.propTypes = {
  game: PropTypes.object.isRequired,
  setGame: PropTypes.func.isRequired,
};

export default Simulation;
