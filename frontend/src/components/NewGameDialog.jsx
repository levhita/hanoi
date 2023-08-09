import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material/";

function NewGameDialog(props) {
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
      <Button onClick={handleCancel}>Cancel</Button>
      <Button variant="contained" onClick={handleCreate}>
        Create
      </Button>
    </Dialog>
  );
}

NewGameDialog.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  movements: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default NewGameDialog;
