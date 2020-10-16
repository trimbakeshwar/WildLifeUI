import React, { Component } from 'react';
import "../Styles/smacss/index.scss"
//import "../Styles/InfoCompo.scss"
import sun from "../Assetes/sun.png"
import tigerhand from "../Assetes/tigerhand.png"
import trophy from "../Assetes/trophy.png"
export default class InfoCompo extends Component {
    constructor(props){
        super(props);
        this.state={
            ID: "",
            a:[{id:1,logo:trophy , hedding:"QUALIFIED TEAM",description:"We have gathered a team of highly qualified animal protection experts."},
            {id:2,logo:tigerhand , hedding:"PROTECTING ALL SPECIES",description:"Besides wild cats, we also aim to protect and save other species of wild animals."},
            {id:3,logo:sun , hedding:"GLOBAL WORK", description:"Our organization works globally to help rescue more endangered species."}
        ]
        }
    }
    Enter = (id) => {
        this.setState({
            ID: id
        })
    }
    leave = (id) => {
        this.setState({
            ID: id
        })
    }
    render() {
     
        return (
            <div className="infoContainer">
                {
                   this.state.a.map((info,index)=>{

                    return(
                <div className="subContainer" onMouseEnter={() => this.Enter(info.id)}
                onMouseLeave={() => this.leave(info.id)}>
                    <div className="logoContainer">
                     <img   src={info.logo}/>
                    </div>
                    <div className="hedContainer">
                       {info.hedding} 
                    </div>
                    <div className="descContainer">
                       {info.description} 
                    </div>
                </div>
                )
            })
            }
            </div>
        );
    }
}