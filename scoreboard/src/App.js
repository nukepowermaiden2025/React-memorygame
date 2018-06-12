import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import players from "./players.json";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Player from "./components/Player";
import Wrapper from "./components/Wrapper";



class App extends Component {
  state ={
    players
  }
  render(){
    return (
     <Wrapper>
       <Navbar>
       <Title/>
       </Navbar>
        <div className="players">
         {this.state.players.map(player => (
          <Player
            playerName={player.name}
            playerImg = {player.image}
          />
        ))}
        </div>
      </Wrapper>
    );
  } 
}

export default App;
