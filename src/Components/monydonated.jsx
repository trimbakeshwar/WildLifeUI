import React, { Component } from 'react';
import "../Styles/MonyDonated.scss"


export default class MonyDonated extends Component {
    constructor(props){
        super(props);
        this.state={
            isMouseInside:false,
            isMouseInside1:false,
            isMouseInside2:false
        }
    }
    mouseEnter = () => {
        this.setState({ isMouseInside: true,isMouseInside1:false,
            isMouseInside2:false });
      }
      mouseLeave = () => {
        this.setState({ isMouseInside: false,isMouseInside1:false,
            isMouseInside2:false });
      }
      mouseEnter1 = () => {
        this.setState({ isMouseInside1: true,isMouseInside:false,
            isMouseInside2:false });
      }
  
      mouseEnter2 = () => {
        this.setState({ isMouseInside2: true,isMouseInside1:false,
            isMouseInside1:false });
      }
    
    render() {
       
        return (
            <div className="donatedContainer">
                <div className="backhedding">
                    OUR PROJECTS
</div>
                <div className="fronthedding">
                    Help Animals Worldwide
</div>
                <div className="description">
                    Below are some of our recent charity projects that helped us protect
                    wild cat speciesand save them from from retaliatory killings in 28 countries.
</div>
                <div className="donatedGallary">
                    <div>
                        <div className="Lion" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                       {this.state.isMouseInside? <button className="buttonss">  DONATE</button>:undefined}
                        </div>
                        <div className="animalname">LIONS</div>
                        <br />
                        <div className="amount">$340K DONATED</div>
                    </div>
                    <div>
                        <div className="Cheetahs" onMouseEnter={this.mouseEnter1} onMouseLeave={this.mouseLeave}>
                       {this.state.isMouseInside1? <button className="buttonss">  DONATE</button>:undefined}
                        </div>
                        <div className="animalname">CHEETAHS</div>
                        <br />
                        <div className="amount">$550K DONATED</div>
                    </div>
                    <div>
                        <div className="Tigercubs" onMouseEnter={this.mouseEnter2} onMouseLeave={this.mouseLeave}>
                       {this.state.isMouseInside2? <button className="buttonss">  DONATE</button>:undefined}
                        </div>
                        <div className="animalname">TIGER CUBS</div>
                        <br />
                        <div className="amount">$610K DONATED</div>
                    </div>
                </div>
            </div>
        );
    }
}