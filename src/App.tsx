import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';  
// import BasicMenu from './components/Menu';'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



  
 
function App() { 
  
 return (
    
    <div className="landing-page">
      
      
      <CssBaseline enableColorScheme />
     
        
    <BrowserRouter>
    
    {/* <BasicMenu /> */}
   

    
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/:id" />
      
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
    
    
  );
}


export default App;
