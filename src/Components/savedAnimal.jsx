import React, { Component } from 'react';
import "../Styles/MonyDonated.scss"
import "../Styles/savedAnimal.scss"
import image1 from "../Assetes/image1.jpg";
import image2 from "../Assetes/image2.jpg";
import image3 from "../Assetes/image3.jpg";
import image4 from "../Assetes/image4.jpg";
import image5 from "../Assetes/image5.jpg";
import image6 from "../Assetes/image6.jpg";
import image7 from "../Assetes/image7.jpg";
import image8 from "../Assetes/image8.jpg";
export default class SavedAnimal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: "",
            arrays: [{ id: 1, image: image1 }, { id: 2, image: image2 }, { id: 3, image: image3 }, { id: 4, image: image4 },
            { id: 5, image: image5 }, { id: 6, image: image6 }, { id: 7, image: image7 }, { id: 8, image: image8 }]
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
            <div className="savedAnimalContainer">
                <div className="backhedding">
                    GALLERY
</div>
                <div className="fronthedding">
                    Saved Animals
</div>
                <div className="description">
                    In our gallery, you can take a look at the photos of wild cats and other
                    animals that we’ve rescued and helped since our first day.
</div>
                <div className="imgcontainer">
                    {
                        this.state.arrays.map((info, index) => {
                            return (
                                <div className="gallary" onMouseEnter={() => this.Enter(info.id)}
                                    onMouseLeave={() => this.leave(info.id)}>
                                    <img
                                        width="358px"
                                        height="250px"
                                        src={info.image}
                                        alt="First slide"

                                    />
                                    <div className={(this.state.ID === info.id) ? 'ShowIconButtons' : 'hideIconButtons'} >
                                        <div className="zoomButton">zoom</div>
                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}