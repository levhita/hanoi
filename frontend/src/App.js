import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Container, Stack} from '@mui/material/';
import Controls from './components/Controls';
import Simulation from './components/Simulation';

 function App() {
  return (
    <>
    <CssBaseline/>
    <Container>
      <Stack direction="row" container spacing={1}>
        <Controls item xs={3}/>
        <Simulation item xs={9}/>
      </Stack>
    </Container>
    </>
  );
}

export default App;
