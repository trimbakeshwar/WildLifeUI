import React, { Component } from 'react';
import "../Styles/smacss/index.scss"
//import "../Styles/ZebraCompo.scss"
import ZebraBackground from "../Assetes/ZebraBackground.jpg"

export default class ZebraCompo extends Component {
    render() {
        return (
            <div className="zebraCon" >
                <div className="ZebraBackground">
                    <img
                        className="d-block w-100"
                        src={ZebraBackground}
                    />
                </div>
                <div className="ZebraFormCon">
                <div className="fronthed">
                    Join Our Newsletter
            </div>
                <div className="backhed">
                    NEWSLETTER
            </div>
                <div className="subscribeContainer">
                    <div>
                        <input type="text" placeholder="E-mail" className="mailInput" />
                    </div>
                    <div className="zebrabutton">
                        SUBSCRIBE
                    </div>
                </div>
                </div>
            </div>
        );
    }
}