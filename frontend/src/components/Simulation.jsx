import React from "react";
import { Stack, Grid, Box } from "@mui/material/";

export default function Simulation() {
  return (
    <Grid container spacing={5}>
      <Stack item sx={{ flexGrow: 1 }}>
        <Box>
          <h1>A</h1>
        </Box>
      </Stack>
      <Stack item sx={{ flexGrow: 1 }}>
        <Box>
          <h1>B</h1>
        </Box>
      </Stack>
      <Stack item sx={{ flexGrow: 1 }}>
        <Box>
          <h1>C</h1>
        </Box>
      </Stack>
    </Grid>
  );
}
