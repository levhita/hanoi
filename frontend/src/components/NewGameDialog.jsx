import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  Stack,
} from "@mui/material/";

function NewGameDialog(props) {
  const { onCreate, onCancel, open, disks } = props;
  const [newDisks, setNewDisks] = React.useState(disks);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (open && inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [open]);

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      handleCreate();
    }
  };

  const handleCreate = () => {
    onCreate(parseInt(newDisks));
  };

  const handleCancel = () => {
    // Reset to default values
    setNewDisks(disks);
    onCancel();
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
          inputRef={inputRef}
          onKeyDown={keyPress}
        />
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button variant="contained" onClick={handleCreate}>
            Create
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
}

NewGameDialog.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  disks: PropTypes.number.isRequired,
};

export default NewGameDialog;
