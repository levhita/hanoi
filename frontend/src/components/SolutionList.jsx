import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "@mui/material/";

function SolutionList({ steps }) {
  const cappedSteps = steps.slice(0, 1000);
  return (
    <List
      sx={{
        position: "absolute",
        top: "5em",
        bottom: 0,
        overflowY: "scroll",
        padding: "0.5em",
      }}
    >
      {cappedSteps.map((step, i) => {
        return (
          <ListItem disablePadding key={i + step}>
            <ListItemText
              primary={`${i + 1}.- ${step.from.toUpperCase()} →
              ${step.to.toUpperCase()}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
SolutionList.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default SolutionList;
