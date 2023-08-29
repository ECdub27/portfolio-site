import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import {  createSvgIcon } from '@mui/material';
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


const UchihaIcon =  createSvgIcon(
  <path d= "/Users/ecwiegand/Desktop/ReactPractice/Material-UI/portfolio-site/src/components/uchihaSymbol 1.svg" />,
  'Home',
);

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="landing-page">
      <CssBaseline enableColorScheme />
     
        
    <BrowserRouter>
    
    <BasicMenu />
   <UchihaIcon />

    
    <Routes>
      
      <Route path="/" exact element={<Home sx={{color: 'primary'}}/>}/>
      <Route path="/:id" />
      
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
    </ThemeProvider>
  );
}

export default App;
