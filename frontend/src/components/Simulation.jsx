import React from "react";
// import PropTypes from "prop-types";
import { Stack } from "@mui/material/";
import Tower from "./Tower";

const game = {
  a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  b: [21],
  c: [12],
};

export default function Simulation() {
  return (
    <Stack direction="row" sx={{ height: "100%", paddingBottom: "1em" }}>
      <Tower disks={game.a} />
      <Tower disks={game.b} />
      <Tower disks={game.c} />
    </Stack>
  );
}
