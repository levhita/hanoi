import React from "react";
import { Stack } from "@mui/material/";
import Header from "./Header";
import Simulation from "./Simulation";
import Solution from "./Solution";
import _ from "lodash";

export default function Game() {
  const [game, setGame] = React.useState({
    a: [1, 2, 3, 4, 5],
    b: [],
    c: [],
  });
  const [solution, setSolution] = React.useState("");
  const [totalSteps, setTotalSteps] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [currentStep, setCurrentStep] = React.useState(0);
  //const [playInterval, setPlayInterval] = React.useState(0);

  // For large operations useMemo can cache results
  // will re-run if solution change
  const steps = React.useMemo(() => {
    return splitPairs(solution);
  }, [solution]);

  const handleStop = () => {
    setCurrentStep(0);
    // clearInterval(playInterval);
  };
  const handlePlay = () => {
    // clearInterval(playInterval);
    // setPlayInterval(setInterval(() => handleNext(), 1000));
  };
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    handleStep(steps[currentStep]);
  };

  const newGame = (disks) => {
    const newGame = { a: [], b: [], c: [] };
    newGame.a = _.range(1, disks + 1, 1);
    setGame(newGame);
  };

  const handleStep = ({ from, to }) => {
    const newGame = _.cloneDeep(game);
    newGame[to].unshift(newGame[from].shift(from));
    setGame(newGame);
  };

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
        setSolution(data.solution);
        setTime(time);
        setTotalSteps(steps);
        setCurrentStep(0);
      });
  };

  return (
    <>
      <Header newGame={newGame} handleSolve={handleSolve} />
      <Stack direction="row" height="100%">
        <Solution
          steps={steps}
          currentStep={currentStep}
          handleStep={handleStep}
          handleStop={handleStop}
          handlePlay={handlePlay}
          handleNext={handleNext}
          totalSteps={totalSteps}
          time={time}
        />
        <Simulation game={game} setGame={setGame} handleNewGame={newGame} />
      </Stack>
    </>
  );
}

const splitPairs = (input) => {
  if (!input) return [];
  let pairs = [];
  for (let i = 0; i < input.length; i += 2) {
    pairs.push({ from: input[i], to: input[i + 1] });
  }
  return pairs;
};
