import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
// import PlayerWrapper from './components/PlayerWrapper';
import Player from './components/Player';
import players from "./players.json";




class App extends Component {
  state ={
    players,
    clickArr:[],
    score:0
  };
  incrementScore = {

  }
 
 
   handleImgClick = id => {
     //Get the arr current state
     //pass the id 
     const newClicks = this.state.clickArr;
     console.log(newClicks);
     newClicks.includes(id)
       ? console.log("You loose!")
       : newClicks.push(id);
 
   };
  
  render(){
    return (
     <Wrapper>
       <Navbar/>
        <Title
        score = {this.state.score}
        />
        <div className="row">
          <div className="col-lg-12 col-m-12 col-s-12">
            <div className="players mx-auto">
              {this.state.players.map(player => (
                <Player
                  key = {player.id}
                  id = {player.id}
                  playerAlt = {player.name}
                  playerImg = {player.image}
                  handleImgClick = {this.handleImgClick}
                  name = {player.location}
                />
              ))}
        
          </div>
        </div>
      </div>
        <Footer/>
      </Wrapper>
    );
  } 
}

export default App;
