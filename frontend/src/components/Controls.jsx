import React from "react";
import PropTypes from "prop-types";
import { Button, Typography, Paper } from "@mui/material/";
import NewGameDialog from "./NewGameDialog";

function Controls({ newGame, handleSolve }) {
  const [open, setOpen] = React.useState(false);
  const [disks, setdisks] = React.useState(5);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCreate = (disks) => {
    setOpen(false);
    setdisks(disks);
    newGame(disks);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="inherit" onClick={handleSolve}>
        Solve
      </Button>
      <Button color="inherit" onClick={handleClickOpen}>
        New Game
      </Button>
      <Paper sx={{ padding: "0.5em" }}>
        <Typography variant="subtitle1">{disks} disks</Typography>
      </Paper>
      <NewGameDialog
        open={open}
        onCreate={handleCreate}
        onCancel={handleCancel}
        disks={disks}
      />
    </>
  );
}

Controls.propTypes = {
  newGame: PropTypes.func.isRequired,
  handleSolve: PropTypes.func.isRequired,
};
export default Controls;
