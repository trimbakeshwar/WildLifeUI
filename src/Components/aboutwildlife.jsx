import React, { Component } from 'react';
import "../Styles/smacss/index.scss"
//import "../Styles/AboutWildlife.scss"
//import "../Styles/elemphant.scss"
import humanPhoto from "../Assetes/humanPhoto.jpg"
export default class AboutWildLife extends Component {
    render() {
        return (
            <div className="AboutWildLifeContainer">
                <div className="humanPhoto">
                    <img src={humanPhoto} />
                </div>
                <div className="Aboutinfo">
                    <div className="backshedding">
                    ABOUT US
                    </div>
                    <div className="frontshedding">
                    About Wildlife
                    </div>
                    <div className="desc">
                    Wildlife is devoted to the conservation of the world’s 
                    wild cats and dozens of other endangered species.
                    </div>
                    <div className="desc">
                    Our team of leading biologists and law enforcement experts develop
                    innovative strategies to address the dire threats facing the wild animals globally.
                    </div>
                    <div>
                    <button className="ReadMoresbuttonss">READ MORE</button>
                    </div>
                </div>

            </div>
        );
    }
}