import React from "react";
import { Stack, Grid } from "@mui/material/";
import Disk from "./Disk";
const game = { a: [1, 2, 3, 4, 5], b: [3, 4], c: [3, 4] };

export default function Simulation() {
  return (
    <Grid container>
      <Stack
        item
        spacing={0.5}
        sx={{ flexGrow: 1, justifyContent: "flex-end", alignItems: "center" }}
        xs={4}
      >
        {game.a.map((number) => (
          <Disk key={number} number={number} />
        ))}
      </Stack>
      <Stack
        item
        spacing={0.5}
        sx={{ flexGrow: 1, justifyContent: "flex-end", alignItems: "center" }}
        xs={4}
      >
        {game.b.map((number) => (
          <Disk key={number} number={number} />
        ))}
      </Stack>
      <Stack
        item
        spacing={0.5}
        sx={{ flexGrow: 1, justifyContent: "flex-end", alignItems: "center" }}
        xs={4}
      >
        {game.c.map((number) => (
          <Disk key={number} number={number} />
        ))}
      </Stack>
    </Grid>
  );
}
