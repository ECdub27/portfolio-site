import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Recruiter from './components/Recruiter';

const App = () => (
  <>
    <CssBaseline enableColorScheme />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
