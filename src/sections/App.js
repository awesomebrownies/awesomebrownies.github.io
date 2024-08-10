import React, { Component } from 'react';
import '../App.css';
import FlagOnMountain from '../assets/images/flag-on-mountain.png';
import MountainForeground from '../assets/images/mountain-foreground.png';
import Name from '../assets/images/name.png';
import Clouds from '../assets/images/clouds.png';
import MinecraftLogo from '../assets/images/minecraft_logo.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="parallax">
          {/* Landing Page */}
          <div className="parallax__layer parallax__layer--deep" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'linear-gradient(#869bb6, #ff9d00)', height: '100vh'}}>
                <img src={Name} style={{height: '135px', width: '472.5px', paddingTop: '15vh'}}/>
          </div>

          <div className="parallax__layer parallax__layer--far" style={{paddingTop: '100vh'}}>
            <img src={Clouds} style={{display: 'flex', justifySelf: 'center', transform: 'translateX(-400px) translateY(-400px)', width: '3000px', height: '400px', filter: 'invert(25%) sepia()'}}/>
          </div>

          <div className="parallax__layer parallax__layer--back" style={{paddingTop: '100vh'}}>
            <img src={Clouds} style={{display: 'flex', justifySelf: 'center', transform: 'translateX(-600px) translateY(-300px)',  width: '3000px', height: '400px', filter: 'invert(5%) sepia()'}}/>
          </div>

          <div className="parallax__layer parallax__layer--mid" style={{display: 'flex', justifyContent: 'center', paddingTop: '100vh'}}>
            <img src={FlagOnMountain} style={{width: '600px', height: '600px', transform: 'translateY(-590px)'}} />
          </div>

          <div className="parallax__layer parallax__layer--close" style={{display: 'flex', justifyContent: 'center', paddingTop: '100vh'}}>
            <img src={MountainForeground} style={{width: '600px', height: '600px', filter: 'brightness(75%)', transform: 'translateY(-590px)'}} />
          </div>


          <div className="parallax__layer parallax__layer--base" style={{marginTop: '100vh'}}> 
            <div className="app-projects" style={{backgroundColor: '#2b3137'}}>
              {/* Title */}
              {/* <div style={{fontSize: '90px', fontFamily: 'Construction', paddingTop: '50px', alignSelf: 'center'}}>PROJECTS</div> */}

              {/* Table Of Contents */}
                <ul className="list" style={{paddingLeft: '5vw'}}>
                  <div style={{paddingBottom: '10px'}}>Table of Contents</div>
                  <li>
                    <a href="#Server-Side_Mods" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1</span><span>Server-Side Mods</span></a>
                    <ul className="list">
                      <li>
                        <a href="#Infiltration" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.1</span><span>Infiltration</span></a>
                        <ul className="list">
                          <li>
                            <a href="#Firearms" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.1.1</span><span>Firearms</span></a>
                          </li>
                          <li>
                            <a href="#Helicopters" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.1.2</span><span>Helicopters</span></a>
                          </li>
                          <li>
                            <a href="#Spatial_Interface" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.1.3</span><span>Spatial Interface</span></a>
                          </li>
                          <li>
                            <a href="#Screen_Effects" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.1.4</span><span>Screen Effects</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#Project:_MTF" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.2</span><span>Project: MTF</span></a>
                        <ul className="list">
                          <li>
                            <a href="#Story" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.2.1</span><span>Story</span></a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#Unsecured" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.3</span><span>Unsecured</span></a>
                        <ul className="list">
                          <li>
                            <a href="#Anomalies" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.3.1</span><span>Anomalies</span></a>
                          </li>
                          <li>
                            <a href="#Map" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.3.2</span><span>Map</span></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  
                  <li>
                    <a href="#Games" className="link"><span style={{color: 'white', paddingRight: '8px'}}>2</span><span>Games</span></a>
                    <ul className="list">
                      <li>
                        <a href="#SCP:_Descent" className="link"><span style={{color: 'white', paddingRight: '8px'}}>2.1</span><span>SCP: Descent</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>

              {/* Projects */}
              <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '5vw', paddingTop: '100px'}}>
                <img src={MinecraftLogo} style={{height: '50px', width: '50px'}}/>
                <div id="Server-Side_Mods" style={{fontSize:'30px', paddingLeft: '20px'}}>Server-Side Mods</div>
              </div>

              <div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
                <div style={{width: '5vw', writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '-8px', paddingRight: '8px', fontSize: '20px', fontFamily: 'Jetbrains', color: 'gray', alignContent: 'flex-end', backgroundColor: '#24292e', paddingTop: '10px'}}>NOVEMBER 26 2022</div>
                <div style={{width: '95vw', paddingBottom: '50px', backgroundColor: '#24292e'}}>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'center'}}>
                    <div id="Infiltration" style={{fontSize: '30px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Infiltration</div>
                    <div style={{display: 'flex', flexDirection: 'row', paddingTop: '5px', flexWrap: 'wrap'}}>
                      <div style={{backgroundColor: 'darkorange', padding: '3px'}}>Java</div>
                      <div style={{backgroundColor: 'coral', padding: '3px'}}>GLSL</div>
                      <div style={{backgroundColor: 'darksalmon', padding: '3px'}}>MongoDB</div>
                    </div>
                  </div>
                  <div style ={{paddingRight: '2.5vw', paddingTop: '50px', color: '#E0E0E0'}}>
                    A gamemode aimed to bring a tactical side to combat.
                  </div>
                  <div style = {{paddingRight: '2.5vw', paddingTop: '10px', color: '#E0E0E0'}}>
                    The game splits players into groups of squads sub-divided into fireteams. Squad Leaders communicate with each other to coordinate attacks and hold positions in objectives. The game favors teamwork and will punish players who do not work together.
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'left', paddingTop: '50px'}}>
                    <div id="Firearms" style={{fontSize: '25px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Firearms</div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'left', paddingTop: '50px'}}>
                    <div id="Helicopters" style={{fontSize: '25px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Helicopters</div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'left', paddingTop: '50px'}}>
                    <div id="Spatial_Interface" style={{fontSize: '25px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Spatial Interface</div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'left', paddingTop: '50px'}}>
                    <div id="Screen_Effects" style={{fontSize: '25px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Screen Effects</div>
                  </div>
                </div>
              </div>

              <div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
                <div style={{width: '5vw', writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '-8px', paddingRight: '8px', fontSize: '20px', fontFamily: 'Jetbrains', color: 'gray', alignContent: 'flex-end', backgroundColor: '#24292e', paddingTop: '10px'}}>OCTOBER 24 2021</div>
                <div style={{width: '95vw', paddingBottom: '50px', backgroundColor: '#24292e'}}>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'center'}}>
                    <div id="Project:_MTF" style={{fontSize: '30px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Project: MTF</div>
                    <div style={{display: 'flex', flexDirection: 'row', paddingTop: '5px', flexWrap: 'wrap'}}>
                      <div style={{backgroundColor: 'darkorange', padding: '3px'}}>Java</div>
                      <div style={{backgroundColor: 'darksalmon', padding: '3px'}}>Skript</div>
                    </div>
                  </div>
                  <div style ={{paddingRight: '2.5vw', paddingTop: '50px', fontStyle: 'italic', color: '#E0E0E0'}}>
                    "We die in the dark so you can live in the light"
                  </div>
                  <div style = {{paddingRight: '2.5vw', paddingTop: '10px', color: '#E0E0E0'}}>
                  Based off of Task Force on Roblox, it is a game mode where you play as a Mobile Task Force Operative with the objective of carrying out a certain mission or task for the SCP foundation. The missions involve several SCPs and other groups of interest. Operatives are tasked to go on dangerous missions to study the anomalies and gather intel for the foundation.</div>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'left', paddingTop: '50px'}}>
                    <div id="Story" style={{fontSize: '25px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Story</div>
                  </div>
                </div>
              </div>

              <div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
                <div style={{width: '5vw', writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '-8px', paddingRight: '8px', fontSize: '20px', fontFamily: 'Jetbrains', color: 'gray', alignContent: 'flex-end', backgroundColor: '#24292e', paddingTop: '10px'}}>DECEMBER 12 2020</div>
                <div style={{width: '95vw', paddingBottom: '50px', backgroundColor: '#24292e'}}>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'center'}}>
                    <div id="Unsecured" style={{fontSize: '30px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Unsecured</div>
                    <div style={{display: 'flex', flexDirection: 'row', paddingTop: '5px', flexWrap: 'wrap'}}>
                      <div style={{backgroundColor: 'darksalmon', padding: '3px'}}>Skript</div>
                    </div>
                  </div>
                  <div style ={{paddingRight: '2.5vw', paddingTop: '50px'}}>
                    A prison break server which hosts a large amount of content
                  </div>
                  <div style = {{paddingRight: '2.5vw', paddingTop: '10px'}}>
                    The game has several layers to it. The base layer, Class-D Prisoners, try to escape their containment by a plethora of escape routes. On their journey they can get transported to the SCP sector of the facility. In this section many and anomalous objects and entities can be interacted with. The goal of the Security Personnel is to maintain the prison and contain all SCP's. Their secondary tasks may include capturing Chaos Insurgency and escorting scientists for experiments.
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'left', paddingTop: '50px'}}>
                    <div id="Anomalies" style={{fontSize: '25px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Anomalies</div>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'left', paddingTop: '50px'}}>
                    <div id="Map" style={{fontSize: '25px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Map</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{bottom: 0, display: 'flex', flexDirection: 'row', paddingLeft: '5vw', alignContent: 'center', justifyContent: 'left', backgroundColor: '#2b3137', width: '100vw', paddingTop: '20px', paddingBottom: '10px', flexWrap: 'wrap'}}>
                <a href="https://github.com/awesomebrownies" target="_blank">
                  <FaGithub className="app-header__socials--button" style={{color: '#fafbfc', height: '35px', width: '35px', paddingRight: '10px'}}/>
                </a>
                <a href="https://www.linkedin.com/in/evan-brown-927974280/" target="_blank">
                  <FaLinkedin className="app-header__socials--button" style={{color: '#fafbfc', height: '35px', width: '35px', paddingRight: '10px'}}/>
                </a>
                <a href="mailto:evan.n.brown25@gmail.com">
                  <MdEmail className="app-header__socials--button" style={{color: '#fafbfc', height: '35px', width: '35px', paddingRight: '10px'}} />
                </a>
                <div style={{display: 'flex', flexDirection: 'row', paddingTop: '7px'}}>
                  evan.n.brown25@gmail.com
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
