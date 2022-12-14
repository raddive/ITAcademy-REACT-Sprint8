import React from 'react';
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import './css/App.css';
import './css/output.css'

import Landing from './pages/Landing';
import Main from './pages/Main';
import NoPage from './pages/NoPage';
import ShipDetails from './pages/ShipDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/StarshipDetails" element={<ShipDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
