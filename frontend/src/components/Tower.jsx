import React from "react";
import PropTypes from "prop-types";
import { Stack, Box } from "@mui/material/";
import { brown } from "@mui/material/colors";
import Disk from "./Disk";
import { grey } from "@mui/material/colors";

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
        paddingBottom: "1.5em",
        width: "33%",
        ["&:hover"]: {
          backgroundColor: grey[300],
          cursor: "pointer",
        },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          position: "absolute",
          height: `${(disks.length + 1) * 1.75 + 2}em`,
          width: "1em",
          bottom: "0",
          backgroundColor: brown[500],
          zIndex: "0",
          borderRadius: "0.25em",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          height: "1.5em",
          width: "60%",
          backgroundColor: brown[500],
          zIndex: "0",
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
