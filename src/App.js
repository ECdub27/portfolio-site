import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import {  createSvgIcon } from '@mui/material';
import BasicMenu from './components/Menu';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import DadJokeComponent from './components/dadJoke';
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


const UchihaIcon =  createSvgIcon(
  <svg xmlns='data:image/png;base64,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'
  fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  'UchihaClan'
);

function App() {
  const [jokes, setJokes] = useState([]);
const fetchUserData = () =>{
    fetch('https://dad-jokes.p.rapidapi.com/random/jokes').then(response => {
        return response.json()
    })
    .then(data =>{
        setJokes(data);
    })
    
}
useEffect(() => {
  fetchUserData();
}, []);

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
      <DadJokeComponent />
    </footer>
    </ThemeProvider>
  );
}

export default App;
