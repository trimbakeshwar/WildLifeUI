import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import "../Styles/smacss/index.scss"
//import "../Styles/heder.scss"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LaunchIcon from '@material-ui/icons/Launch';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Hedder() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#243238" }} >
        <Toolbar>
          <div className="hedderContainer">
          <div className="launchcontainer">
         <div className="headerName">WildLife - Wild Life Multipage Creative HTML Website Temp...</div>
         <LaunchIcon style={{color:" #B0D2ED"}} />
         </div>
         <div className="buttonContainer">
         <button className="cartbutton"> <div><ShoppingCartOutlinedIcon /> </div>  <div> Add To Cart </div></button>
         </div>
         <div className="heart">
         <FavoriteBorderOutlinedIcon />
         </div>
         </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}