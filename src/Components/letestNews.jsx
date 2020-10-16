import React, { Component } from 'react';
import "../Styles/smacss/index.scss"
//import "../Styles/LetestNews.scss"

export default class LetestNews extends Component {
    constructor(props){
        super(props);
        this.state={
            ID: "",
            a:[{id:1,date:"AUG 02, 2019" , hedding:"AN INCREDIBLE FIRST FOR LIONS AND LEOPARDS",
            description:"Recently, we have received a first-ever evidence of a wild lioness nursing a leopard cub. Taken on Tuesday by a Ndutu Lodge guest in Tanzania’s..."},
            {id:2,date:"JUL 02, 2019" , hedding:"MODELING THE GHOST OF THE MOUNTAIN",
            description:"The snow leopard is a notoriously elusive species, inhabiting some of the most remote and inaccessible tracts of Central and South Asia. Still..."},
            {id:3,date:"JUL 16, 2019" , hedding:"WHY SNARES ARE DANGEROUS THREATS TO WILDCATS",
             description:"Snares are silent killers laid by poachers across wild places to trap and kill animals for the illegal bushmeat trade. Every year across Africa’s..."}
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
            <div className="mainCon">
                <div className="backhedding">
                LATEST NEWS
</div>
                <div className="fronthedding">
                  Latest News
</div>
            <div className="infoCon">
                {
                   this.state.a.map((info,index)=>{

                    return(
                <div className="subCon" onMouseEnter={() => this.Enter(info.id)}
                onMouseLeave={() => this.leave(info.id)}>
                   <div className="dateCon">{info.date}</div>
                    <div className="hedCon">
                       {info.hedding} 
                    </div>
                    <div className="descCon">
                       {info.description} 
                    </div>
                    <div className="readMore">
                        Read More ->
                        </div>
                </div>

                )
            })
            }
            </div>
            </div>
        );
    }
}