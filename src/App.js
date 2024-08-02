import React, { Component, useState, useEffect, useRef, useCallback } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import ReactPlayer from 'react-player';
import { FaDiscord, FaGithub } from "react-icons/fa";
import ProjectMTFOutside from './images/project-mtf-outside.png';
import ProjectMTFFacility from './images/project-mtf-facility.png';
import FlagOnMountain from './images/flag-on-mountain.png';
import MountainForeground from './images/mountain-foreground.png';
import ProjectMTF from './images/project-mtf.png';
import ProjectMTFAward from './images/project-mtf-award.png';
import PaintedMap from './images/painted-map.png';
import CodeFSH from './images/code-fsh.png';
import CodeVSH from './images/code-vsh.png';
import DamageVignette from './images/damage_vignette.png';
import ProjectStructure from './images/project-structure.png';
import ChatModes from './images/chat-modes.png';
import Name from './images/name.png';
import Clouds from './images/clouds.png';
import MinecraftLogo from './images/minecraft_logo.png';

import GLSL from './images/opengl_logo.png';
import Java from './images/java_logo.png';
import Python from './images/python_logo.png';
import SQL from './images/sql_logo.png';
import CSharp from './images/csharp_logo.png';

import Rock from './images/rock.png';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <Parallax pages={4.4} style={{ top: '0', left: '0' }}>
            <ParallaxLayer offset={0} speed={0.1} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'linear-gradient(#869bb6, #ff9d00)'}}>
              <img src={Name} style={{height: '135px', width: '472.5px'}}/>
              <div style={{marginLeft: '10vw', marginRight: '10vw', color: 'white', justifySelf: 'center', paddingTop: '5vh', fontSize: '20px', maxWidth: '30rem'}}>
              A motivated developer seeking to elevate skills and take on new challenges
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.3} style={{paddingTop: '60vh'}}>
              <img src={Clouds} style={{display: 'flex', justifySelf: 'center', transform: 'translateX(-400px)', width: '3000px', height: '400px', filter: 'invert(25%) sepia()'}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.4} style={{paddingTop: '80vh'}}>
              <img src={Clouds} style={{display: 'flex', justifySelf: 'center', transform: 'translateX(-700px)',  width: '3000px', height: '400px', filter: 'invert(5%) sepia()'}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.6} style={{display: 'flex', justifyContent: 'center', paddingTop: '20vh'}}>
              <img src={FlagOnMountain} style={{width: '600px', height: '600px', paddingTop: '15vh'}} />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.7} style={{display: 'flex', justifyContent: 'center', paddingTop: '20vh'}}>
              <img src={MountainForeground} style={{width: '600px', height: '600px', paddingTop: '15vh', filter: 'brightness(75%)'}} />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0} style={{paddingTop: '100vh', transform: 'translateY(250px)'}}> 

            <div style={{display: 'flex', flexDirection: 'row'}}>
              <ul className="list">
                <li>
                  <a href="#Server-Side_Mods" className="link">Server-Side Mods</a>
                  <ul className="list">
                    <li>
                      <a href="#Infiltration" className="link"><span>1.1</span><span>Infiltration</span></a>
                      <ul className="list">
                        <li>
                          <a href="#Firearms" className="link">Firearms</a>
                        </li>
                        <li>
                          <a href="#Helicopters" className="link">Helicopters</a>
                        </li>
                        <li>
                          <a href="#Spatial_Interface" className="link">Spatial Interface</a>
                        </li>
                        <li>
                          <a href="#Screen_Effects" className="link">Screen Effects</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#Project:_MTF" className="link">Project: MTF</a>
                      <ul href="#Story" className="list">
                        <li>
                          <a href="#Story" className="link">Story</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <a href="#Games" className="link">Games</a>
                  <ul className="list">
                    <li>
                      <a href="#SCP:_Descent" className="link">SCP: Descent</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div style={{fontSize: '90px', paddingBottom: '150px', fontFamily: 'Construction'}}>PROJECTS</div>
            </div>


            <div className="app-intro">

              <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '5vw', paddingTop: '100px'}}>
                <img src={MinecraftLogo} style={{height: '50px', width: '50px'}}/>
                <div style={{fontSize:'30px', paddingLeft: '20px'}}>Server-Side Mods</div>
              </div>

              <div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
                <div style={{width: '5vw', writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '-8px', fontSize: '25px', fontFamily: 'Jetbrains', color: 'gray', alignContent: 'center'}}>NOVEMBER 26 2022</div>
                <div style={{width: '95vw', paddingBottom: '50px', backgroundColor: '#24292e'}}>
                  <div style={{fontSize: '30px', fontFamily: 'Jetbrains', width: '90vw', height: '30px', textAlign: 'center'}}>Infiltration</div>
                  <div style ={{paddingLeft: '2.5vw', paddingRight: '2.5vw', paddingTop: '10px'}}>
                    A gamemode aimed to bring a tactical side to combat
                  </div>
                  <div style = {{paddingLeft: '2.5vw', paddingRight: '2.5vw', paddingTop: '10px'}}>
                    The game splits players into groups of squads sub-divided into fireteams. Squad Leaders communicate with each other to coordinate attacks and hold positions in objectives. The game favors teamwork and will punish players who do not work together.
                  </div>
                </div>
              </div>

            </div>
{/* <div className="app-intro">
  <div className="app-intro__projectmtf">

    <div style={{marginTop: '20px', maxWidth: '60rem', color: '#BBBBBB'}}>Mobile Task Force Operatives are tasked with the objective of carrying out certain missions, studying the anomalies, and gathering intel for the foundation.
    
      <ul>
        <li style={{marginBottom: '5px'}}>Immersive sound effects for the facility, forest, and helicopter drop-off</li>
        <li style={{marginBottom: '5px'}}>Scaled engagements based on squad count</li>
        <li style={{marginBottom: '5px'}}>Cutscenes for important moments within missions</li>
    
      </ul>
    </div>
  </div>

  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <img src={ProjectMTFFacility} style={{width: '26.6vw', height: '15vw', borderRadius: '5%'}} />
    <img src={ProjectMTF} style={{width: '35vw', height: '20vw', borderRadius: '5%', overflow: 'hidden'}} />
    <img src={ProjectMTFOutside} style={{width: '26.6vw', height: '15vw', borderRadius: '5%'}} />
  </div>

  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#BBBBBB', paddingLeft: '5vw', paddingRight: '5vw'}}>
    <div style={{textAlign: 'center', fontStyle: 'italic', paddingBottom: '70px', color: 'gray'}}>
      "We die in the dark so you can live in the light"
    </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <img src={ProjectMTFAward} style={{width: '6vw', height: '6vw'}} />
    </div>
    <div style={{maxWidth: '50rem', alignSelf: 'center'}}>
    During the hackathon event our team participated by creating a new gamemode from scratch, primarily developing during spring break.
    We won in the overall category due to fantastic visuals, cutscenes, sound effects, and a squad based mission system with an intriguing storyline.
    Unfortunately further visuals and videos cannot be produced since the project files have been lost.
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
        <img src={CodeVSH} style={{width: '22.1vw', height: '22.1vw', borderRadius: '5%', marginBottom: '1vw'}} />
        <img src={CodeFSH} style={{width: '25.5vw', height: '17vw', borderRadius: '5%'}} />
      </div>
      <div style={{width: '50vw', color: '#BBBBBB', padding: '10vw'}}>
        Utilizing the OpenGL pipeline, it becomes possible to create all sorts of screen effects. Shown here is the setup for a health vignette, found in the files rendertype_text.vsh and rendertype_text.fsh.
        <img src={DamageVignette} style={{width: '35vw', height: '20vw', marginTop: '1vw', borderRadius: '5%'}} />
      </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'row', paddingTop: '30px'}}>
      <ReactPlayer url="https://youtu.be/M3xHyf7THW4" controls={true} style={{paddingRight: '30px'}} />
      <ReactPlayer url="https://youtu.be/uUrKWwJQe50" controls={true} />
    </div>
    <ul style={{paddingLeft: '5vw', paddingRight: '5vw',maxWidth: '50rem', paddingTop: '30px', paddingBottom: '10px', color: '#BBBBBB'}}>
      <li style={{paddingBottom: '10px'}}>
        AABB Raycasting:
         To optimize each shot, the algorithm raycasts to all targets within view and tests for hits.
          If a raycast does hit, the algorithm initializes a BlockIterator from the player to the target while checking the bounding boxes of solid blocks for collisions.
      </li>
      <li style={{paddingBottom: '10px'}}>
        Asynchronous Execution:
         Instead of waiting for the next tick to execute, the algorithm detects a block mining packet 
         -- Accurate left click detection is done by spawning client side empty sculk blocks at the players head --
          and immediately starts a repeating timer of 86ms if the gun is on automatic, allowing for faster feedback and a more fine tuned fire rate.
      </li>
      <li style={{paddingBottom: '10px'}}>
        Lag Compensation:
         In an online environment, ping can result in hit invalidation, forcing players to lead their shots.
          To combat this, the gun system adds the player’s ping + the current target interpolation state, and rolls back the hitbox to the correct location of where the player saw the target when shooting.
      </li>
    </ul>

    <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyItems: 'center', paddingTop: '150px'}}>
      <img src={ProjectStructure} style={{width: '10vw', height: '11.6vw', borderRadius: '5%', marginTop: '60px', marginRight: '10px'}}/>
      <ReactPlayer url="https://youtu.be/k0wZm0jhGYg" controls={true} />   
    </div>

    <div style={{color: '#BBBBBB', paddingTop: '30px', paddingLeft: '5vw', paddingRight: '5vw', maxWidth: '50rem'}}>
    The menu is an object oriented system that allows for simplistic setups, direction based local coordinate conversions, and action customizability.
    </div>

    <img src={ChatModes} style={{width: '29.37 vw', height: '10vw', paddingTop: '150px'}} />
    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyItems: 'center', paddingTop: '30px', marginLeft: '5vw', marginRight: '5vw', maxWidth: '50rem', color: '#BBBBBB'}}>
    The system uses the Paper’s Adventure API for chat components.
     To allow for more detailed rank symbols, each chat message uses a line for the player’s username, and another for the message.
      The space to the left allows for up to a 14x14 pixel symbol.
       Additionally, I create a web request to the site minotar.net and cache the resulting player head that is returned after using it in the message.
    </div>
  </div>
</div> */}
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.7}>
              {/* <div style={{backgroundColor: 'darkgray', width: '100vw', height: '400px', marginTop: '100vh', transform: 'translateY(150px)'}} /> */}
              <img src={Rock} style={{width: '3000px', height: '400px', marginTop: '100vh', transform: 'translateY(200px)'}} />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1} style={{paddingTop: '100vh'}}>
            
            <img src={Clouds} style={{display: 'flex', justifySelf: 'center', width: '3000px', height: '400px'}} />

            <div style={{backgroundColor: 'rgb(245,245,245)', width: '100vw', height: '200px', transform: 'translateY(-200px)'}} />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <img src={GLSL} style={{display: 'flex', justifySelf: 'center', width: '150px', height: '150px', transform: 'translateY(-370px)'}} />
              <img src={Java} style={{display: 'flex', justifySelf: 'center', width: '76px', height: '100px', transform: 'translateY(-350px)'}} />
              <img src={Python} style={{display: 'flex', justifySelf: 'center', width: '90px', height: '90px', transform: 'translateY(-350px)'}} />
              <img src={CSharp} style={{display: 'flex', justifySelf: 'center', width: '100px', height: '100px', transform: 'translateY(-350px)'}} />
              <img src={SQL} style={{display: 'flex', justifySelf: 'center', width: '160px', height: '80px', transform: 'translateY(-350px)'}} />
            </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    );
  }
}

export default App;
