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
  Stack,
} from "@mui/material/";

function NewGameDialog(props) {
  const { onCreate, onCancel, open, disks, type } = props;
  const [newDisks, setNewDisks] = React.useState(disks);
  const [newType, setNewType] = React.useState(type);

  const handleCreate = () => {
    onCreate(parseInt(newDisks), newType);
  };

  const handleCancel = () => {
    // Reset to default values
    setNewDisks(disks);
    setNewType(type);
    onCancel();
  };

  const handleTypeChange = (event) => {
    setNewType(event.target.checked ? "random" : "regular");
  };

  return (
    <Dialog onClose={handleCancel} open={open}>
      <DialogTitle>New Game</DialogTitle>
      <Stack spacing="0.5em" sx={{ margin: "0em 1em 1em 1em" }}>
        <TextField
          label="Disks"
          value={newDisks}
          onChange={(event) => {
            setNewDisks(event.target.value);
          }}
        />
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
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" onClick={handleCreate}>
          Create
        </Button>
      </Stack>
    </Dialog>
  );
}

NewGameDialog.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  disks: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default NewGameDialog;
