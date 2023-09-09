import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import BasicMenu from './components/Menu';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette:{
    primary:{
      light: '#7a777b',
      main: '#c2bfc4' ,
      dark: '#252226',
      contrastText: '#f8f4fa'
    },
    secondary:{
      light: '#df86d1',
      main: '#c609b1' ,
      dark: '#67008b',
      contrastText: '#f8f4fa'
    },
    typography:{
      fontFamily: [
        'League Spartan',
        'Montserrat',
         'Inter'
      ].join(','),
    },
  }
  });

 // const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
 // "b5e892b6abmsh21c7215beb4fc40p19d633jsn9b0fadd6d271", api key
function App(props) {
  
  
  


  return (
    <ThemeProvider theme={theme}>
    <div className="landing-page">
      
      
      <CssBaseline enableColorScheme />
     
        
    <BrowserRouter>
    
    <BasicMenu />
   

    
    <Routes>
      
      <Route path="/" exact element={<Home sx={{color: 'primary'}}/>}/>
      <Route path="/:id" />
      
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
    <footer className='footer'>
    
      
    
    </footer>
    </ThemeProvider>
  );
}

export default App;
