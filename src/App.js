import React, { Component } from 'react';
import './App.css';
import { FaDiscord, FaGithub } from "react-icons/fa";
import ProjectMTFOutside from './images/project-mtf-outside.png';
import ProjectMTFFacility from './images/project-mtf-facility.png';
import Airship from './images/airship.png';
import ProjectMTF from './images/project-mtf.png';
import ProjectMTFAward from './images/project-mtf-award.png';

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

          <img src={Airship} className="app-airship" style={{height: '60%', width: '60%', margin: '3%'}}/>
        </div>

        <div className = "app-divider" />

        <div className="app-intro">
          <div className="app-intro__projectmtf">

            <div style={{padding: '20px', width: '40%', color: '#BBBBBB'}}>Mobile Task Force Operatives are tasked with the objective of carrying out a certain missions, studying the anomalies, and gathering intel for the foundation.
            
              <ul>
                <li style={{marginBottom: '5px'}}>Immersive sound effects for the facility, forest, and helicopter drop-off</li>
                <li style={{marginBottom: '5px'}}>Scaled engagements based on squad count</li>
                <li style={{marginBottom: '5px'}}>Cutscenes for important moments within missions</li>
            
              </ul>
            </div>

            <img src={ProjectMTFFacility} style={{position: 'absolute', width: '26.6vw', height: '15vw', borderRadius: '5%', transform: 'translate(0%, 18vw)', zIndex: '0'}} />
            <img src={ProjectMTFOutside} style={{position: 'absolute', width: '26.6vw', height: '15vw', borderRadius: '5%', transform: 'translate(35vw, 18vw)', zIndex: '0'}} />

            <img src={ProjectMTF} style={{width: '35vw', height: '20vw', borderRadius: '5%', overflow: 'hidden', zIndex: '1'}} />
            <img src={ProjectMTFAward} style={{width: '6vw', height: '6vw', transform: 'translate(-50%, 0)', zIndex: '2'}} />

            <div style={{fontStyle: 'italic', color: 'gray', position: 'absolute', transform: 'translate(18vw, -15px)'}}>
              "We die in the dark so you can live in the light"
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
