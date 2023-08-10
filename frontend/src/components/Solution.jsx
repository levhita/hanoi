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
import { grey, blue } from "@mui/material/colors";

function Solution({ steps, currentStep, handleStop, handlePlay, handleNext }) {
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
      <Button onClick={handleNext} disabled={currentStep == steps.length}>
        Next
      </Button>

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
                sx={{
                  backgroundColor:
                    currentStep === i ? blue[500] : "rgba(0,0,0,0)",
                  color: currentStep === i ? grey[50] : grey[900],
                }}
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

Solution.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
  handleStep: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Solution;
