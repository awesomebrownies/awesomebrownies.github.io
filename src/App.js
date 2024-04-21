import React, { Component } from 'react';
import './App.css';
import { FaDiscord, FaGithub } from "react-icons/fa";
import airship from './airship.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header__socials">
            <a href="https://github.com/awesomebrownies" target="_blank" style={{margin: '50%'}}>
                <FaGithub className="app-header__socials--button" style={{color: '#fafbfc', height: '3vw', width: '3vw'}}/>
            </a>
            <a href="https://discordapp.com/users/495612155677376534" target="_blank" style={{margin: '50%'}}>
              <FaDiscord className="app-header__socials--button" style={{color: '#fafbfc', height: '3vw', width: '3vw'}} />
            </a>
          </div>
          <img src={airship} className="app-airship" style={{height: '60%', width: '60%', margin: '3%'}}/>
        </div>
        <p className="app-intro">
          Under construction.
        </p>
      </div>
    );
  }
}

export default App;
