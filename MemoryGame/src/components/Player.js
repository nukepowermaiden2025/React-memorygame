
import React from 'react';
import './Player.css';


const Player = props=> {
   
    return(
    <img className="rounded float-left img-thumbnail img-size" 
        id={props.id}
        alt={props.playerAlt}
        src = {props.playerImg}
        onClick={() => props.handleImgClick(props.id)}
        
    />
    )   

}

export default Player;
