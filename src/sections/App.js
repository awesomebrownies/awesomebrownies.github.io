import React, { Component } from 'react';
import '../App.css';
import FlagOnMountain from '../assets/images/flag-on-mountain.png';
import MountainForeground from '../assets/images/mountain-foreground.png';
import Name from '../assets/images/name.png';
import Clouds from '../assets/images/clouds.png';
import MinecraftLogo from '../assets/images/minecraft_logo.png';
import Rocks from '../assets/images/foreground.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import '../index.css';

import Parallax from './Parallax';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div /*className="parallax"*/>
          <div /*className="parallax__layer parallax__layer--deep"*/ style={{position: 'fixed', overflow: 'hidden', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'linear-gradient(#869bb6, #ff9d00)', height: '95vh'}}>
            <Parallax speed={-0.1}>
              <img className="name" src={Name}/>
            </Parallax>
          </div>
          <div /*className="parallax__layer parallax__layer--far"*/ style={{position: 'fixed', width: '100%', paddingTop: '95vh', zIndex: '2'}}>
            <Parallax speed={-0.2}>
            <img src={Clouds} style={{display: 'flex', overflow: 'hidden', justifySelf: 'center', transform: 'translateX(-400px) translateY(-350px)', width: '3000px', height: '400px', filter: 'invert(25%) sepia()'}}/>
            </Parallax>
          </div>

          <div /*className="parallax__layer parallax__layer--back"*/ style={{position: 'fixed', width: '100%', paddingTop: '95vh', zIndex: '3'}}>
            <Parallax speed={-0.3}>
            <img src={Clouds} style={{display: 'flex', overflow: 'hidden', justifySelf: 'center', transform: 'translateX(-600px) translateY(-300px)',  width: '3000px', height: '400px', filter: 'invert(5%) sepia()'}}/>
            </Parallax>
          </div>
          <div /*className="parallax__layer parallax__layer--mid"*/ style={{position: 'fixed', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '95vh', zIndex: '4'}}>
            <Parallax speed={-0.45}>
            <img src={FlagOnMountain} style={{width: '120vw', height: '120vw', maxWidth: '581.57px', maxHeight: '600px', transform: 'translateY(max(-119vw,-595px))'}} />
            </Parallax>
          </div>

          <div /*className="parallax__layer parallax__layer--close"*/ style={{position: 'fixed', overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '95vh', zIndex: '5'}}>
            <Parallax speed={-0.6}>
            <img src={MountainForeground} style={{width: '120vw', height: '120vw', maxWidth: '581.57px', maxHeight: '600px', filter: 'brightness(75%)', transform: 'translateY(max(-119vw,-595px))'}} />
            </Parallax>
          </div>

          <div /*className="parallax__layer parallax__layer--base"*/ style={{position: 'absolute', overflow: 'hidden', width: '100%', paddingTop: '95vh', zIndex: '6'}}>
            <img src={Rocks} style={{width: '2000px', height: '100px', transform: 'translateY(-98px)'}} />
          </div>
          <div /*className="parallax__layer parallax__layer--base"*/ style={{position: 'absolute', marginTop: '95vh', zIndex: '7'}}> 
            <div className="app-projects">
              <ul className="project-body list">
                <li>
                  <a href="#Server-Side_Mods" className="link"><span className="number">1</span><span>Server-Side Mods</span></a>
                  <ul className="list">
                    <li>
                      <a href="#Infiltration" className="link"><span className="number">1.1</span><span>Infiltration</span></a>
                      <ul className="list">
                        <li>
                          <a href="#Firearms" className="link"><span className="number">1.1.1</span><span>Firearms</span></a>
                        </li>
                        <li>
                          <a href="#Helicopters" className="link"><span className="number">1.1.2</span><span>Helicopters</span></a>
                        </li>
                        <li>
                          <a href="#Spatial_Interface" className="link"><span className="number">1.1.3</span><span>Spatial Interface</span></a>
                        </li>
                        <li>
                          <a href="#Screen_Effects" className="link"><span className="number">1.1.4</span><span>Screen Effects</span></a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#Project:_MTF" className="link"><span className="number">1.2</span><span>Project: MTF</span></a>
                      <ul className="list">
                        <li>
                          <a href="#Story" className="link"><span className="number">1.2.1</span><span>Story</span></a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#Unsecured" className="link"><span className="number">1.3</span><span>Unsecured</span></a>
                      <ul className="list">
                        <li>
                          <a href="#Anomalies" className="link"><span className="number">1.3.1</span><span>Anomalies</span></a>
                        </li>
                        <li>
                          <a href="#Map" className="link"><span className="number">1.3.2</span><span>Map</span></a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <a href="#Games" className="link"><span className="number">2</span><span>Games</span></a>
                  <ul className="list">
                    <li>
                      <a href="#SCP:_Descent" className="link"><span className="number">2.1</span><span>SCP: Descent</span></a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '5vw', paddingTop: '100px'}}>
                <img src={MinecraftLogo} style={{height: '50px', width: '50px'}}/>
                <div id="Server-Side_Mods" style={{fontSize:'30px', paddingLeft: '20px'}}>Server-Side Mods</div>
              </div>

              <div className="project-section">
                <div className="vertical-text">NOVEMBER 26 2022</div>
                <div>
                  <div className="title-section">
                    <div id="Infiltration" className="title">Infiltration</div>
                    <div className="tag-section">
                      <div className="tag" style={{backgroundColor: 'darkorange'}}>Java</div>
                      <div className="tag" style={{backgroundColor: 'coral'}}>GLSL</div>
                      <div className="tag" style={{backgroundColor: 'darksalmon'}}>MongoDB</div>
                    </div>
                  </div>
                  <div className="app-divider" />
                  <p className="project-body">
                    A gamemode aimed to bring a tactical side to combat.
                  </p>
                  <p className="project-body">
                    The game splits players into groups of squads sub-divided into fireteams.
                     Squad Leaders communicate with each other to coordinate attacks and hold positions in objectives.
                     The game favors teamwork and will punish players who do not work together.
                  </p>
                  <div>
                    <div id="Firearms" className="secondary-title">Firearms</div>
                  </div>
                  <div>
                    <div id="Helicopters" className="secondary-title">Helicopters</div>
                  </div>
                  <div>
                    <div id="Spatial_Interface" className="secondary-title">Spatial Interface</div>
                  </div>
                  <div>
                    <div id="Screen_Effects" className="secondary-title">Screen Effects</div>
                  </div>
                </div>
              </div>

              <div className="project-section">
                <div className="vertical-text">OCTOBER 24 2021</div>
                <div>
                  <div className="title-section">
                    <div id="Project:_MTF" className="title">Project: MTF</div>
                    <div className="tag-section">
                      <div className="tag" style={{backgroundColor: 'darkorange'}}>Java</div>
                      <div className="tag" style={{backgroundColor: 'darksalmon'}}>Skript</div>
                    </div>
                  </div>
                  <div className="app-divider" />
                  <p className="project-body" style={{fontStyle: 'italic'}}>
                    "We die in the dark so you can live in the light"
                  </p>
                  <p className="project-body">
                    Based off of Task Force on Roblox, it is a game mode where you play as a Mobile Task Force Operative with the objective of carrying out a certain mission or task for the SCP foundation.
                     The missions involve several SCPs and other groups of interest.
                     Operatives are tasked to go on dangerous missions to study the anomalies and gather intel for the foundation.
                  </p>
                  <div>
                    <div id="Story" className="secondary-title">Story</div>
                  </div>
                </div>
              </div>

              <div className="project-section">
                <div className="vertical-text">DECEMBER 12 2020</div>
                <div>
                  <div className="title-section">
                    <div id="Unsecured" className="title">Unsecured</div>
                    <div className="tag-section">
                      <div className="tag" style={{backgroundColor: 'darksalmon'}}>Skript</div>
                    </div>
                  </div>
                  <div className="app-divider" />
                  <p className="project-body">
                    A prison break server which hosts a large amount of content
                  </p>
                  <p className="project-body">
                    The game has several layers to it.
                     The base layer, Class-D Prisoners, try to escape their containment by a plethora of escape routes.
                     On their journey they can get transported to the SCP sector of the facility.
                     In this section many and anomalous objects and entities can be interacted with.
                     The goal of the Security Personnel is to maintain the prison and contain all SCP's.
                     Their secondary tasks may include capturing Chaos Insurgency and escorting scientists for experiments.
                  </p>
                  <div>
                    <div id="Anomalies" className="secondary-title">Anomalies</div>
                  </div>
                  <div>
                    <div id="Map" className="secondary-title">Map</div>
                  </div>
                </div>
              </div>

              <footer className="footer">
                <a href="https://github.com/awesomebrownies" target="_blank">
                  <FaGithub className="app-header__socials--button"/>
                </a>
                <a href="https://www.linkedin.com/in/evan-brown-927974280/" target="_blank">
                  <FaLinkedin className="app-header__socials--button"/>
                </a>
                <a href="mailto:evan.n.brown25@gmail.com">
                  <MdEmail className="app-header__socials--button" />
                </a>
                <div style={{display: 'flex', flexDirection: 'row', paddingTop: '7px'}}>
                  evan.n.brown25@gmail.com
                </div>
              </footer>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
