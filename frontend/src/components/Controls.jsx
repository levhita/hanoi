import React from "react";
import PropTypes from "prop-types";
import { Button, Typography, Paper } from "@mui/material/";
import NewGameDialog from "./NewGameDialog";

function Controls({ newGame }) {
  const [type, setType] = React.useState("regular");
  const [open, setOpen] = React.useState(false);
  const [disks, setdisks] = React.useState(5);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCreate = (disks, type) => {
    setOpen(false);
    setdisks(parseInt(disks));
    setType(type);
    newGame(parseInt(disks), type);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="inherit">Solve</Button>
      <Button color="inherit" onClick={handleClickOpen}>
        New Game
      </Button>
      <Paper sx={{ padding: "0.5em" }}>
        <Typography variant="caption">{disks}</Typography>
        <Typography
          variant="caption"
          sx={{ marginLeft: "1em", textTransform: "uppercase" }}
        >
          {type}
        </Typography>
      </Paper>
      <NewGameDialog
        open={open}
        onCreate={handleCreate}
        onCancel={handleCancel}
        disks={disks}
        type={type}
      />
    </>
  );
}

Controls.propTypes = {
  newGame: PropTypes.func.isRequired,
};
export default Controls;
