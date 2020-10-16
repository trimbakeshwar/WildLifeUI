import React, { Component } from 'react';
import "../Styles/smacss/index.scss"
//import "../Styles/TigerBackground.scss"
import TigherBackground from "../Assetes/TigherBackground.jpg"

export default class TigerBackground extends Component {
    render(){
        return(
            <div className="tigersContainer">
            <div className="tigerBackground">
            <img
        className="d-block w-100"
       
        src={TigherBackground}
       
     />
            </div>
            <div className="DealiyDonation">
                <div className="digitContainer">
                <div className="digits">
                50


                </div>
                <div className="sections">
                SAVED SPECIES

                </div>
                </div>
                <div className="digitContainer">
                <div className="digits">

                92

                </div>
                <div className="sections">
                TEAM MEMBERS


                </div>
                </div>
                <div className="digitContainer">
                <div className="digits">
                340

                </div>
                <div className="sections">
                DAILY DONATIONS


                </div>
                </div>
                <div className="digitContainer">
                <div className="digits">
               4

                </div>
                <div className="sections">
                PARTNERS

                </div>
                </div>
            </div>
            </div>
        );
    }
}
