import React, { Component } from 'react';
import "../Styles/elemphant.scss"
import Elephant from "../Assetes/Elephant.jpg"
export default class ElephantCompo extends Component {
    render(){
      return(
        <div>            <img
        className="d-block w-100"
        src={Elephant}
        alt="First slide"
      >
       
    </img>
  
  <div className="elephanthedding">
  IT'S
  <span className="timeStyle"> TIME </span>
     TO ACT
  </div>

  <div>
  <button className="ReadMorebuttonss">READ MORE</button>

  </div>
  </div>
   
      )
    }
}