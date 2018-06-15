import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import PlayerWrapper from './components/PlayerWrapper';




class App extends Component {
 
  
  render(){
    return (
     <Wrapper>
       <Navbar/>
        <Title/>
        <PlayerWrapper/>
        <Footer/>
      </Wrapper>
    );
  } 
}

export default App;
