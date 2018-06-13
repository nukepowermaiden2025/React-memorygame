
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.css';


class Player extends Component {
    render(){
        return(
   
        <img className="rounded float-left img-thumbnail img-size" src={this.props.playerImg}/>
      
        )
    }

}

export default Player;
