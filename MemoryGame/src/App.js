import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

 randomSort = data => {
   data.sort(function(a, b){return 0.5 - Math.random()});
   
  };
  
//  resetGame = (data,score) => {//Need to figure out if this is suppose to have the actual data spelled out or do i use placeholder?
//     randomSort(data);
//     {data.map(item => (
//       <Player
//         playerName ={item.name}
//         playerImg ={item.image}
//       />
//     ));}
    
//   };
  
//  handleImgClick = event => {
//     { 
//       if (!this.state.players.data-isClicked
//       ? this.setState({[this.state.players.data-isClicked]:true})
//       : this.resetGame(this.state));//Todo
//     };
 
//   };
  
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
        <Footer/>
      </Wrapper>
    );
  } 
}

export default App;
