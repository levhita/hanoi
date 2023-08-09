import React from "react";
import PropTypes from "prop-types";
import {
  grey,
  red,
  pink,
  deepPurple,
  blue,
  teal,
  lightGreen,
  amber,
  orange,
} from "@mui/material/colors";
import { Box, Typography } from "@mui/material/";

const colors = [
  red[500],
  deepPurple[500],
  pink[500],
  teal[500],
  blue[500],
  amber[500],
  lightGreen[500],
  orange[500],
];

function Disk({ number }) {
  const color = colors[number % colors.length];
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: `${number + 1 - number / 2}em`,
        height: "1.5em",
        textAlign: "center",
        borderRadius: "0.5em",
      }}
    >
      <Typography sx={{ color: grey[50] }}>{number}</Typography>
    </Box>
  );
}

Disk.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Disk;
