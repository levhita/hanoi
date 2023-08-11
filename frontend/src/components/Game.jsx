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
  const [disks, setDisks] = React.useState(5);
  const [solution, setSolution] = React.useState("");
  const [totalSteps, setTotalSteps] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // For large operations useMemo can cache results
  // will re-run if solution change
  const steps = React.useMemo(() => {
    return splitPairs(solution);
  }, [solution]);

  const handleStop = () => {
    setIsPlaying(false);
    newGame(disks);
    setCurrentStep(0);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  React.useEffect(() => {
    if (isPlaying) {
      if (currentStep > steps.length - 1) {
        setIsPlaying(false);
        return;
      }
      setTimeout(() => {
        handleNext();
      }, 250);
    }
  }, [currentStep, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentStep((currentStep) => currentStep + 1);
    handleMovement(steps[currentStep]);
  };

  const newGame = (newDisks) => {
    const newGame = { a: [], b: [], c: [] };
    newGame.a = _.range(1, newDisks + 1, 1);
    setDisks(newDisks);
    setGame(newGame);
    setSolution("");
    setTime(0);
    setTotalSteps(0);
    setCurrentStep(0);
  };

  const handleMovement = ({ from, to }) => {
    const newGame = _.cloneDeep(game);
    newGame[to].unshift(newGame[from].shift(from));
    setGame(newGame);
  };

  const handleSolve = () => {
    fetch("/api/solve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })
      .then((response) => response.json())
      .then((data) => {
        newGame(disks);
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
          handleStep={handleMovement}
          handlePause={handlePause}
          handleStop={handleStop}
          handlePlay={handlePlay}
          handleNext={handleNext}
          totalSteps={totalSteps}
          time={time}
          isPlaying={isPlaying}
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
