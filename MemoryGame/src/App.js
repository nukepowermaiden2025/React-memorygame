import React, { Component } from 'react';
import './App.css';
import players from "./players.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Player from "./components/Player";
import Wrapper from "./components/Wrapper";




class App extends Component {
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
    // console.log("You clicked an image")
    if (![this.state.players.name]===""
    ? this.setState({[this.state.players.name]:""})
    : console.log("You already clicked this image")
  );//Todo
    
 
  };
  
  render(){
    return (
     <Wrapper>
       <Navbar/>
        <Title/>
          <div className="players">
          {this.state.players.map(player => (
            <Player
              playerAlt = {player.name}
              playerImg = {player.image}
              onClick = {this.handleImgClick}
            />
          ))}
        </div>
        <Footer/>
      </Wrapper>
    );
  } 
}

export default App;
