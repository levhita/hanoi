import React from "react";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import Controls from "./Controls";

export default function Simulation() {
  return (
    <Box sx={{ marginBottom: "1em" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hanoi
          </Typography>
          <Controls />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
