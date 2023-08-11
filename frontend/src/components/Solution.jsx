import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, IconButton, Stack } from "@mui/material/";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";
import SolutionList from "./SolutionList";

function Solution({
  steps,
  currentStep,
  handleStop,
  handlePause,
  handlePlay,
  handleNext,
  time,
  totalSteps,
  isPlaying,
}) {
  const totalStepsWithCommas = totalSteps
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const renderedSolutionList = React.useMemo(
    () => <SolutionList steps={steps} />,
    [steps]
  );
  return (
    <Box
      sx={{
        flexGrow: 0,
        height: "100%",
        position: "relative",
      }}
    >
      {totalSteps > 0 && (
        <Stack>
          <Typography variant="subtitle">
            {totalStepsWithCommas} steps, Solved in: {time} ms
          </Typography>
          <Typography variant="subtitle">Step: {currentStep}</Typography>
        </Stack>
      )}
      <Box>
        <IconButton onClick={handleStop} aria-label="stop">
          <StopIcon />
        </IconButton>
        {isPlaying && (
          <IconButton onClick={handlePause} aria-label="stop">
            <PauseIcon />
          </IconButton>
        )}
        {!isPlaying && (
          <IconButton onClick={handlePlay} aria-label="play">
            <PlayArrowIcon />
          </IconButton>
        )}
        <IconButton
          onClick={handleNext}
          disabled={currentStep == steps.length}
          aria-label="next"
        >
          <SkipNextIcon />
        </IconButton>
      </Box>
      {renderedSolutionList}
    </Box>
  );
}

Solution.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
  handleStep: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default Solution;
