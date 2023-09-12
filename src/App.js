import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import BasicMenu from './components/Menu';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';

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
  const options = {
    method: 'GET',
    url: 'https://dad-jokes.p.rapidapi.com/random/joke',
    params: {punchline: '', setup:''},
    headers: {
      'X-RapidAPI-Key': 'b5e892b6abmsh21c7215beb4fc40p19d633jsn9b0fadd6d271',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      
    }
  };
 
function App(props) {
  
  const [joke, setJoke] = useState(false);

  useEffect(() =>{
    try {
      const response =  axios.request(options);
      setJoke(typeof response);
    } catch (error) {
      console.error(error);
    }
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
    <h2>Dad Joke of the Day is: </h2>
    <p>{joke}</p>
      
    
    </footer>
    </ThemeProvider>
  );
}

export default App;
