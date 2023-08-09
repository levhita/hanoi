import React from "react";
import Header from "./Header";
import Simulation from "./Simulation";
import _ from "lodash";

export default function Game() {
  const [game, setGame] = React.useState({
    a: [1, 2, 3, 4, 5],
    b: [],
    c: [],
  });

  function newGame(disks, type) {
    const newGame = { a: [], b: [], c: [] };
    const sequence = _.range(1, disks + 1, 1);
    if (type === "regular") {
      newGame.a = sequence;
    } else {
      // Put the disk from lower to higher into a random peg
      sequence.forEach((e) =>
        newGame[String.fromCharCode(_.random(97, 99))].push(e)
      );
    }
    setGame(newGame);
  }

  return (
    <>
      <Header newGame={newGame} />
      <Simulation
        item
        xs={8}
        game={game}
        setGame={setGame}
        handleNewGame={newGame}
      />
    </>
  );
}
