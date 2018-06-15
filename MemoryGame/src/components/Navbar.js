import React, { Component } from 'react';
import "./Navbar.css";


class Navbar extends Component {

  render(){
    return (
    <nav className="navbar navbar-dark bg-dark">
        <br/>
        <a href="https://nukepowermaiden2025.github.io/Bootstrap-Portfolio/portfolio.html" rel="noopener noreferrer" target="_blank" className="navbar-brand text-light text-left" > &larr; Porfolio</a>
        <a href="https://www.linkedin.com/in/kourtney-reynolds-97152a57/" rel="noopener noreferrer" target="_blank" className="navbar-brand text-light text-left">About</a>
        <a href="https://www.linkedin.com/in/kourtney-reynolds-97152a57/" rel="noopener noreferrer" target="_blank" className="active navbar-brand text-light text-left" >Contact</a>
        <br/>
    </nav>
    )
  } 
}

export default Navbar;