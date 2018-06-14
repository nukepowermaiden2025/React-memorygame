import React, { Component } from 'react';
import "./Footer.css";
// import "./images";


class Footer extends Component {

  render(){
    return (
        <footer className="main-footer footer-copyright text-center py-3">
            <div>
                <img href="https://github.com/nukepowermaiden2025" target="_blank" rel="noopener noreferrer" src="https://image.flaticon.com/icons/svg/38/38401.svg" alt="GitHub"/>

                <img href="https://www.linkedin.com/in/kourtney-reynolds-97152a57/" target="_blank" rel="noopener noreferrer" src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="LinkedIn"/>

                <img href="https://stackoverflow.com/users/9202048/kourtney-a-reynolds" target="_blank" rel="noopener noreferrer"src="https://image.flaticon.com/icons/svg/732/732248.svg" alt="StackOverflow"/>
                <h5>&copy; 2018 Kourtney Reynolds </h5>
            </div>
        </footer>
    )
  } 
}

export default Footer;