import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import Simulation from './components/Simulation';

 function App() {
  return (
    <>
    <CssBaseline/>
    <Header/> 
    <Simulation item xs={8}/>
    </>
  );
}

export default App;
