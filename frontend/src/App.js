import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Game from './components/Game';

 function App() {
  return (
    <>
    <CssBaseline/>
    <Game/>
    </>
  );
}

export default App;
