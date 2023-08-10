import React from "react";
import PropTypes from "prop-types";
import { Button, Divider } from "@mui/material/";
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
      <Button color="inherit" onClick={handleClickOpen}>
        New Game
      </Button>
      <Divider
        variant="middle"
        orientation="vertical"
        sx={{ padding: "1em 0em", borderColor: "rgba(255, 255, 255, 0.12)" }}
      />
      <Button color="inherit" onClick={handleSolve}>
        Solve
      </Button>
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
