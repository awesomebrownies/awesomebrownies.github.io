import React, { Component } from 'react';
import './App.css';
import { FaDiscord, FaGithub } from "react-icons/fa";
import ProjectMTFOutside from './images/project-mtf-outside.png';
import ProjectMTFFacility from './images/project-mtf-facility.png';
import Airship from './images/airship.png';
import ProjectMTF from './images/project-mtf.png';
import ProjectMTFAward from './images/project-mtf-award.png';
import PaintedMap from './images/painted-map.png';
import CodeFSH from './images/code-fsh.png';
import CodeVSH from './images/code-vsh.png';
import DamageVignette from './images/damage_vignette.png';

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

            <div style={{margin: '20px', width: '40%', color: '#BBBBBB'}}>Mobile Task Force Operatives are tasked with the objective of carrying out certain missions, studying the anomalies, and gathering intel for the foundation.
            
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
          <div className="app-intro__infiltration">
            <div style={{fontSize: '2vw', paddingBottom: '10px', letterSpacing: '2px'}}>INFILTRATION</div>
            <div style={{width: '50vw', paddingBottom: '50px', color: '#BBBBBB'}}> The game splits two teams into groups of squads, sub-divided into fireteams. Squad Leaders communicate with each other to coordinate attacks and hold positions in objectives. The game favors teamwork and will punish players who do not work together.</div>
            <div style={{backgroundColor: '#0f1114', alignContent: 'center', marginBottom: '1vw', width: '100vw', display: 'flex', flexDirection: 'row'}}>
              <div style={{color: '#BBBBBB', padding: '3vw', width: '20vw'}}>
                The map used in infiltration uses many techniques to keep gameplay as immersive as possible.
                <ul>
                  <li style={{marginBottom: '5px'}}>Packets, allowing for a finer manipulation of control</li>
                  <li style={{marginBottom: '5px'}}>Core vanilla shaders, keeping the item facing the player clientside, and mapping the correct textures to the player arms</li>
                  <li style={{marginBottom: '5px'}}>A resource pack, allowing for the map asset to be used</li>
                </ul>
              </div>
              <img src={PaintedMap} style={{width: '47.32vw', height: '35vw'}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style ={{display: 'flex', flexDirection:'column'}}>
                <img src={CodeVSH} style={{width: '26vw', height: '26vw', borderRadius: '5%', marginBottom: '1vw'}} />
                <img src={CodeFSH} style={{width: '26.8vw', height: '20vw', borderRadius: '5%'}} />
              </div>
              <div style={{width: '50vw', color: '#BBBBBB', padding: '10vw'}}>
                Utilizing the OpenGL pipeline, it becomes possible to create all sorts of screen effects. Shown here is the setup for a health vignette, found in the files rendertype_text.vsh and rendertype_text.fsh.
                <img src={DamageVignette} style={{width: '35vw', height: '20vw', marginTop: '1vw', borderRadius: '5%'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
