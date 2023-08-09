import React from "react";
import PropTypes from "prop-types";
import { Stack, Box } from "@mui/material/";
import { brown } from "@mui/material/colors";
import Disk from "./Disk";

function Tower({ disks, selected, handleClick }) {
  return (
    <Stack
      item
      xs={4}
      sx={{
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        position: "relative",
        paddingBottom: "1.25em",
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          position: "absolute",
          height: "90%",
          width: "0.75em",
          bottom: "0",
          backgroundColor: brown[500],
          zIndex: "-1",
          borderRadius: "0.5em",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          height: "1em",
          width: "90%",
          backgroundColor: brown[500],
          zIndex: "-1",
          borderRadius: "0.5em",
        }}
      ></Box>
      {disks.map((number, index) => (
        <Disk
          key={number}
          number={number}
          selected={index === 0 && selected ? true : false}
        />
      ))}
    </Stack>
  );
}

Tower.propTypes = {
  disks: PropTypes.arrayOf(PropTypes.number).isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tower;
