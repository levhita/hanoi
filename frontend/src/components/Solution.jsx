import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
} from "@mui/material/";

function Solution({ solution, handleStep }) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [playInterval, setPlayInterval] = React.useState(0);

  const steps = React.useMemo(() => {
    return splitPairs(solution);
  }, [solution]);

  const handleStop = () => {
    clearInterval(playInterval);
  };
  const handlePlay = () => {
    clearInterval(playInterval);
    setPlayInterval(setInterval(() => handleNext(), 1000));
  };
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep + 1);
    handleStep(steps[currentStep]);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        height: "100%",
        position: "relative",
      }}
    >
      <Typography variant="h3">Steps</Typography>

      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handlePlay}>Play</Button>
      <Button onClick={handleNext}>Next</Button>

      <List
        sx={{
          position: "absolute",
          top: "5em",
          bottom: 0,
          overflowY: "scroll",
          padding: "0.5em",
        }}
      >
        {steps.map((step, i) => {
          return (
            <ListItem disablePadding key={i + step}>
              <ListItemText
                sx={{ backgroundColor: currentStep === i ? "#DDD" : "#FFF" }}
                primary={`${i + 1}.- ${step.from.toUpperCase()} →
              ${step.to.toUpperCase()}`}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
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

Solution.propTypes = {
  solution: PropTypes.string.isRequired,
};

export default Solution;
