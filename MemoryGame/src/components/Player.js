
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.css';


class Player extends Component {
    render(){
        return(
   
        <img className="rounded float-left img-thumbnail img-size"
            src = {this.props.playerImg}
            onClick = {this.handleImgClick}
            data-isClicked = {false}

        />
        )
    }

}

export default Player;
