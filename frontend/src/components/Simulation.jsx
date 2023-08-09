import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { Stack } from "@mui/material/";
import Tower from "./Tower";

function Simulation({ game, setGame }) {
  const [selectedTower, setSelectedTower] = React.useState("");

  function handleClick(tower) {
    if (selectedTower === "") {
      console.log(tower, game[tower]);
      if (game[tower].length > 0) {
        setSelectedTower(tower);
      } else {
        console.log("cant do");
        return;
      }
    } else {
      if (game[tower].length > 0 && game[tower][0] < game[selectedTower][0]) {
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
    <Stack
      direction="row"
      flexWrap="nowrap"
      sx={{ height: "100%", paddingBottom: "1em" }}
    >
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

Simulation.propTypes = {
  game: PropTypes.array.isRequired,
  setGame: PropTypes.func.isRequired,
};

export default Simulation;
