import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sitemap from './Sitemap'; // Importe o componente Sitemap
import App from './App'; // Importe o componente App
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Use o componente Routes aqui */}
        <Route path="/" element={<App />} /> 
        <Route path="/sitemap.xml" element={<Sitemap /> } exact />
      </Routes>
    </Router>
  </React.StrictMode> 
);