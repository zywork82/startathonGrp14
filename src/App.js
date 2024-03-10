import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import CustomPage from './pages/CustomPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import HelpPage from './pages/HelpPage';
import CustomizationPage from './pages/CustomizationPage';

function App() {
    const [updatedFunctions, setUpdatedFunctions] = useState([]);

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home updatedFunctions={updatedFunctions} />} />
                    <Route path="/custompage" element={<CustomPage setUpdatedFunctions={setUpdatedFunctions} />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/customisation" element={<CustomizationPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;