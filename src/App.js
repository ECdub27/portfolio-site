import React from 'react';
import {BrowserRouter, Routes,Route, Link} from "react-router-dom";
import Home from './pages/Home';
import {  createSvgIcon } from '@mui/material';
import BasicMenu from './components/Menu';

const UchihaIcon =  createSvgIcon(
  <path d= "/Users/ecwiegand/Desktop/ReactPractice/Material-UI/portfolio-site/src/components/uchihaSymbol 1.svg" />,
  'Home',
);
function App() {
  return (
    <>
    <BrowserRouter>
    <BasicMenu  />
   <UchihaIcon />
   
    <Routes>
      
      <Route path="/" exact element={<Home />}/>
      <Route path="/:id" />
      
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
