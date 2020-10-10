import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Hedder from "./Components/hedder"
function App() {
  return (
    <div className="App">
      <Router>
  <Route exact path="/hedder" component={Hedder}/> 
  </Router>
    </div>
  );
}

export default App;
