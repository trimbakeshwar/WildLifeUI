import React, { Component } from 'react';
import "../Styles/MonyDonated.scss"
import "../Styles/savedAnimal.scss"
import "../Styles/partner.scss"
import Partner1 from "../Assetes/Partner1.png"
import Partner2 from "../Assetes/Partner2.png"
import Partner3 from "../Assetes/Partner3.png"
import Partner4 from "../Assetes/Partner4.png"

export default class Partners extends Component {
      
    render() {
        return (
            <div className="parantcon" >
                <div className="backhedding">
                PARTNERS
                </div>
                <div className="fronthedding">
                   Our Partners
                </div>
                <div className="partnerContainer">
                <div > 
                <img src={Partner1} className="partners" />
                </div>
                <div > 
                <img src={Partner2} className="partners" />
               </div>
               <div > 
               <img src={Partner3} className="partners" />
                </div>
                <div > 
                <img src={Partner4} className="partners" />
                </div>
                </div>
            </div>
        )
    }
}