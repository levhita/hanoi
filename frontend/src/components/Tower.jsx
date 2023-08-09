import React from "react";
import PropTypes from "prop-types";
import { Stack, Box } from "@mui/material/";
import { brown } from "@mui/material/colors";
import Disk from "./Disk";

function Tower({ disks }) {
  return (
    <Stack
      item
      spacing={0.5}
      xs={4}
      sx={{
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        position: "relative",
        paddingBottom: "1.25em",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "400px",
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
      {disks.map((number) => (
        <Disk key={number} number={number} />
      ))}
    </Stack>
  );
}

Tower.propTypes = {
  disks: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Tower;
