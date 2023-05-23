import React from 'react';
import './App.css';
import Homepage from './pages/Home/Homepage.jsx';
import { Routes, Route } from "react-router-dom";
import DetailsPage from './pages/Detail/DetailsPage';
import { CountryProvider } from './context/CountryContext';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Set the app element to the root div

function App() {
  return (
    <>
    <CountryProvider>
    <div className="App">
      <div className="App-content">
      <Routes>
       <Route path="/" element={<Homepage/>} />
       <Route path="/countries/:code" element={<DetailsPage/>} />
       </Routes>
      </div>
    </div>
    </CountryProvider>
    </>
  );
}

export default App;