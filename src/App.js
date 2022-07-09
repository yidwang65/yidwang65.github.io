import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Projects from './components/pages/Projects.js'
import Home from './components/pages/Home.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route exact path='/'  element = {<Home />} />
          <Route exact path='/projects' element = {<Projects />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
