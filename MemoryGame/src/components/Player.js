
import React, { Component } from 'react';
import './Player.css';


class Player extends Component {
    render(){
        return(
   
        <img className="rounded float-left img-thumbnail img-size" 
            alt={this.props.playerAlt}
            src = {this.props.playerImg}
            onClick = {this.props.onClick}
            name ={this.props.name}
        />
        )
    }

}

export default Player;
