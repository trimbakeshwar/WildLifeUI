import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "../Styles/smacss/index.scss"
//import "../Styles/lowerHedder.scss"
import IconButton from '@material-ui/core/IconButton';
import WildLifeLogo from "../Assetes/WildLifeLogo.png"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 10,
//     },
  
// }));

export default class LowerHedder extends Component {
    state = {
        color: 'transparent'
      }
    // const classes = useStyles();
    listenScrollEvent = e => {
        if (window.scrollY > 40) {
          this.setState({color: '#343A3A'})
        } else {
          this.setState({color: 'transparent'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render(){
    return (
      //  <div className={classes.root}>
      <div>
            <AppBar style={{ backgroundColor: this.state.color, height: "80px" , marginTop:"60px" }} elevation={0}>
                <Toolbar>
                    <div className="lowerhedderContainer">
                        <div className="logo">
                            <img
                                className="d-block w-100"
                                src={WildLifeLogo}
                                alt="Second slide"
                            />
                        </div >
                        <div className="iconContainer">
                            <div className="iconStyle"> ABOUT US </div>
                            <div className="iconStyle"> PROJECTS </div>
                            <div className="iconStyle"> DONATE </div>
                            <div className="iconStyle"><FacebookIcon /></div>
                            <div className="iconStyle"><InstagramIcon /></div>
                            <div className="iconStyle"><TwitterIcon /></div>
                            <div className="iconStyle"><YouTubeIcon /></div>
                            <div className="iconStyle"><MenuIcon /></div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
}