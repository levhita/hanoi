import React from "react";
import { Paper, Button, Stack } from "@mui/material/";

export default function Controls() {
  return (
    <Paper elevation={3} sx={{ padding: "1em" }}>
      <Stack spacing={0.5}>
        <Button variant="contained">Solve</Button>
        <Button variant="contained">Generate Regular</Button>
        <Button variant="contained">Generate Random</Button>
      </Stack>
    </Paper>
  );
}
