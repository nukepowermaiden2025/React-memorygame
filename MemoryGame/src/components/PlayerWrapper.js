import React, { Component } from 'react';
import './Player.css';
import Player from'./Player.js';
import players from "../players.json";


class PlayerWrapper extends Component {
    state ={
        players,
        // score//Todo
      };

    
//  randomSort = () => {
//    const shuffleArr  = this.state.players.sort(function(a, b){return 0.5 - Math.random()});
//    this.setState({players:shuffleArr})
//   };
  
//  resetGame = () => {//Need to figure out if this is suppose to have the actual data spelled out or do i use placeholder?
//     {this.randomSort().map(item => (
//       <Player
//         playerName ={item.name}
//         playerImg ={item.image}
//       />
//     ));}
    
//   };
  
 handleImgClick = event => {
    event.preventDefault();

    let name = event.target.name;
    const alt = event.target.alt
    console.log("This name =", name);
    console.log("This alt =", alt);
    
    name !== alt
    ?  this.setState({name:alt})//Need to set state.name to state.alt
    : console.log(name)
  //Todo

 
  };
    render(){
      console.log(this.state.name);
        return(
        <div className="players">
            {this.state.players.map(player => (
              <Player
                key = {player.id}
                playerAlt = {player.name}
                playerImg = {player.image}
                onClick = {this.handleImgClick}
                name = {player.location}
              />
            ))}
        </div>
        )
    }

}

export default PlayerWrapper;
