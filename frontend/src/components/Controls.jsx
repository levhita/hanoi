import React from "react";
import NewGameDialog from "./NewGameDialog";
import { Button, Typography } from "@mui/material/";

export default function Controls() {
  const [type, setType] = React.useState("regular");
  const [open, setOpen] = React.useState(false);
  const [movements, setMovements] = React.useState(5);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCreate = (movements, type) => {
    setOpen(false);
    setMovements(movements);
    setType(type);
    console.log("signal up new game", { movements, type });
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
      <Typography>{movements}</Typography>
      <Typography sx={{ marginLeft: "1em", textTransform: "capitalize" }}>
        {type}
      </Typography>
      <NewGameDialog
        open={open}
        onCreate={handleCreate}
        onCancel={handleCancel}
        movements={movements}
        type={type}
      />
    </>
  );
}
