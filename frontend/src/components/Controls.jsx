import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material/";

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
      <Typography>{`${movements} ${type}`}</Typography>
      <DisksDialog
        open={open}
        onCreate={handleCreate}
        onCancel={handleCancel}
        movements={movements}
        type={type}
      />
    </>
  );
}

function DisksDialog(props) {
  const { onCreate, onCancel, open, movements, type } = props;
  const [newMovements, setNewMovements] = React.useState(movements);
  const [newType, setNewType] = React.useState(type);

  const handleCreate = () => {
    onCreate(newMovements, newType);
  };

  const handleCancel = () => {
    // Reset to default values
    setNewMovements(movements);
    setNewType(type);
    onCancel();
  };

  const handleTypeChange = (event) => {
    setNewType(event.target.checked ? "random" : "regular");
  };

  return (
    <Dialog onClose={handleCancel} open={open}>
      <DialogTitle>New Game</DialogTitle>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={newType !== "regular"}
              onChange={handleTypeChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Random"
        />
      </FormGroup>
      <TextField
        label="movements"
        value={newMovements}
        onChange={(event) => {
          setNewMovements(event.target.value);
        }}
      />
      <Button color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
      <Button variant="contained" color="success" onClick={handleCreate}>
        Create
      </Button>
    </Dialog>
  );
}

DisksDialog.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  movements: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
