import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import players from "./players.json";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Player from "./components/Player";
import Wrapper from "./components/Wrapper";

const randomSort=(data)=> {
  data.sort(function(a, b){return 0.5 - Math.random()});
}

const generateImg =(data)=> {
  randomSort();
  {this.state.data.map(item => (
    <Player
      playerName={item.name}
      playerImg = {item.image}
    />
  ))}
}


class App extends Component {
  state ={
    players
  }
  render(){
    return (
     <Wrapper>
       <Navbar/>
       <Title/>
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
