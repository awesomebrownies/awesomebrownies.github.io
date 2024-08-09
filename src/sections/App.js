import React, { Component } from 'react';
import '../App.css';
import FlagOnMountain from '../assets/images/flag-on-mountain.png';
import MountainForeground from '../assets/images/mountain-foreground.png';
import Name from '../assets/images/name.png';
import Clouds from '../assets/images/clouds.png';
import MinecraftLogo from '../assets/images/minecraft_logo.png';
import { FaDiscord, FaGithub } from "react-icons/fa";
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
                {/* <div style={{marginLeft: '10vw', marginRight: '10vw', color: 'white',  position: 'sticky', justifySelf: 'center', paddingTop: '5vh', fontSize: '20px', maxWidth: '30rem'}}>
                A motivated developer seeking to elevate skills and take on new challenges
                </div> */}
          </div>

          <div className="parallax__layer parallax__layer--far" style={{paddingTop: '60vh'}}>
            <img src={Clouds} style={{display: 'flex', justifySelf: 'center', transform: 'translateX(-400px)', width: '3000px', height: '400px', filter: 'invert(25%) sepia()'}}/>
          </div>

          <div className="parallax__layer parallax__layer--back" style={{paddingTop: '80vh'}}>
            <img src={Clouds} style={{display: 'flex', justifySelf: 'center', transform: 'translateX(-600px)',  width: '3000px', height: '400px', filter: 'invert(5%) sepia()'}}/>
          </div>

          <div className="parallax__layer parallax__layer--mid" style={{display: 'flex', justifyContent: 'center', paddingTop: '20vh'}}>
            <img src={FlagOnMountain} style={{width: '600px', height: '600px', paddingTop: '15vh'}} />
          </div>

          <div className="parallax__layer parallax__layer--close" style={{display: 'flex', justifyContent: 'center', paddingTop: '20vh'}}>
            <img src={MountainForeground} style={{width: '600px', height: '600px', paddingTop: '15vh', filter: 'brightness(75%)'}} />
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
                            <a href="#Role_Hierarchy" className="link"><span style={{color: 'white', paddingRight: '8px'}}>1.3.1</span><span>Role Hierarchy</span></a>
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
                <div style={{fontSize:'30px', paddingLeft: '20px'}}>Server-Side Mods</div>
              </div>

              <div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
                <div style={{width: '5vw', writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '-8px', paddingRight: '8px', fontSize: '20px', fontFamily: 'Jetbrains', color: 'gray', alignContent: 'flex-end', backgroundColor: '#24292e', paddingTop: '80px'}}>NOVEMBER 26 2022</div>
                <div style={{width: '95vw', paddingBottom: '50px', backgroundColor: '#24292e'}}>
                  <div style={{display: 'flex', flexDirection: 'row', width: '90vw', justifyContent: 'center'}}>
                    <div style={{fontSize: '30px', fontFamily: 'Jetbrains', height: '30px', paddingRight: '20px'}}>Infiltration</div>
                    <div style={{backgroundColor: 'darkorange', padding: '3px'}}>Java</div>
                    <div style={{backgroundColor: 'coral', padding: '3px'}}>GLSL</div>
                    <div style={{backgroundColor: 'darksalmon', padding: '3px'}}>MongoDB</div>
                  </div>
                  {/* <div className="app-divider" /> */}
                  <div style ={{paddingRight: '2.5vw', paddingTop: '50px'}}>
                    A gamemode aimed to bring a tactical side to combat.
                  </div>
                  <div style = {{paddingRight: '2.5vw', paddingTop: '10px'}}>
                    The game splits players into groups of squads sub-divided into fireteams. Squad Leaders communicate with each other to coordinate attacks and hold positions in objectives. The game favors teamwork and will punish players who do not work together.
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{bottom: 0, paddingLeft: '5vw', alignContent: 'center', justifyContent: 'center', backgroundColor: '#2b3137', width: '100vw', height: '70px'}}>
                <a href="https://github.com/awesomebrownies" target="_blank">
                  <FaGithub className="app-header__socials--button" style={{color: '#fafbfc', height: '35px', width: '35px', paddingRight: '15px'}}/>
                </a>
                <a href="mailto:evan.n.brown25@gmail.com">
                  <MdEmail className="app-header__socials--button" style={{color: '#fafbfc', height: '35px', width: '35px'}} />
                </a>
              </div>

            </div>
          </div>

          {/* <div style={{paddingTop: '100vh'}}>
            <img src={Clouds} style={{display: 'flex', overflow: 'hidden', justifySelf: 'center', width: '3000px', height: '400px'}} />
            <div style={{backgroundColor: 'rgb(245,245,245)', width: '100vw', height: '200px', transform: 'translateY(-200px)'}} />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <img src={GLSL} style={{display: 'flex', justifySelf: 'center', width: '150px', height: '150px', transform: 'translateY(-370px)'}} />
              <img src={Java} style={{display: 'flex', justifySelf: 'center', width: '76px', height: '100px', transform: 'translateY(-350px)'}} />
              <img src={Python} style={{display: 'flex', justifySelf: 'center', width: '90px', height: '90px', transform: 'translateY(-350px)'}} />
              <img src={CSharp} style={{display: 'flex', justifySelf: 'center', width: '100px', height: '100px', transform: 'translateY(-350px)'}} />
              <img src={SQL} style={{display: 'flex', justifySelf: 'center', width: '160px', height: '80px', transform: 'translateY(-350px)'}} />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
