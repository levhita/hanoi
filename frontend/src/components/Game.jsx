import React from "react";
import { Stack } from "@mui/material/";
import Header from "./Header";
import Simulation from "./Simulation";
import Solution from "./Solution";
import _ from "lodash";

export default function Game() {
  const simulationRef = React.useRef();

  const [game, setGame] = React.useState({
    a: [1, 2, 3, 4, 5],
    b: [],
    c: [],
  });
  const [solution, setSolution] = React.useState(
    "acabcbacbabcacabcbcabacbacabcbacbabcacbacbcababcacabcbacbabcacacabcbacbabcacabcbcabacbacabcbacbabcacbacbcababcacabcbacbabcac"
  );

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
  const handleStep = ({ from, to }) => {};

  const handleSolve = () => {
    fetch("http://localhost:3000/api/solve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })
      .then((response) => response.json())
      .then((data) => {
        const { steps, time } = { ...data };
        console.log({ steps, time });
        if (steps > 1000) {
          alert("to many steps to reproduce");
          return;
        }
        setSolution(data.solution);
      });
  };

  return (
    <>
      <Header newGame={newGame} handleSolve={handleSolve} />
      <Stack direction="row" height="100%">
        <Solution solution={solution} handleStep={handleStep} />
        <Simulation
          ref={simulationRef}
          game={game}
          setGame={setGame}
          handleNewGame={newGame}
        />
      </Stack>
    </>
  );
}
