import React from "react";
import PropTypes from "prop-types";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import Controls from "./Controls";

function Header({ newGame, handleSolve, isSolvable }) {
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
          <Controls
            newGame={newGame}
            handleSolve={handleSolve}
            isSolvable={isSolvable}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
Header.propTypes = {
  newGame: PropTypes.func.isRequired,
  handleSolve: PropTypes.func.isRequired,
  isSolvable: PropTypes.bool.isRequired,
};
export default Header;
