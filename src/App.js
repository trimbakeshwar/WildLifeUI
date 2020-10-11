import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Hedder from "./Components/hedder"
import Swiper from "./Components/swiper"
import LowerHedder from "./Components/lowerheder"
function App() {
  return (
    <div className="App">
      <Router>
  <Route exact path="/hedder" component={Hedder}/>
  <Route exact path="/swiper" component={Swiper}/> 
  <Route exact path="/lowerheder" component={LowerHedder}/> 
  </Router>
    </div>
  );
}

export default App;
