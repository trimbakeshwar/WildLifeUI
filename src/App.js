import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Hedder from "./Components/hedder"
import Swiper from "./Components/swiper"
import LowerHedder from "./Components/lowerheder"
import Dashbord from "./Components/dashbord"
function App() {
  return (
    <div className="App">
      <Router>
  <Route exact path="/dashbord" component={Dashbord}/>
   
  </Router>
    </div>
  );
}

export default App;
