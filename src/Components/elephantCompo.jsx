import React, { Component } from 'react';
import "../Styles/elemphant.scss"
import Elephant from "../Assetes/Elephant.jpg"
export default class ElephantCompo extends Component {
    render(){
      return(
        
        <img
        className="d-block w-100"
        src={Elephant}
        alt="First slide"
      >
    </img>
      )
    }
}