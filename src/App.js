import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Volunteer from './Pages/Volunteer';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/volunteer" element={<Volunteer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
