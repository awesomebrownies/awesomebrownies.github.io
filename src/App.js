import React, { Component, useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import { FaDiscord, FaGithub } from "react-icons/fa";
import ProjectMTFOutside from './images/project-mtf-outside.png';
import ProjectMTFFacility from './images/project-mtf-facility.png';
import Airship from './images/flag-on-mountain.png';
import ProjectMTF from './images/project-mtf.png';
import ProjectMTFAward from './images/project-mtf-award.png';
import PaintedMap from './images/painted-map.png';
import CodeFSH from './images/code-fsh.png';
import CodeVSH from './images/code-vsh.png';
import DamageVignette from './images/damage_vignette.png';
import ProjectStructure from './images/project-structure.png';
import ChatModes from './images/chat-modes.png';

class App extends Component {
  render() {


    return (
      <div className="app">
        <div className="app-header">
          <title style={{letterSpacing: '2px', display: 'flex', color: 'white', alignContent: 'center', justifyContent: 'center', paddingLeft: '130px', paddingTop: '80px', fontSize: '50px'}}>
            EVAN
          </title>
          <div style={{marginLeft: '10vw', marginRight: '10vw', display: 'flex', color: 'white', alignSelf: 'center', justifySelf: 'center', paddingLeft: '130px', paddingTop: '50px', fontSize: '20px', maxWidth: '30rem'}}>
          A motivated developer seeking to elevate skills and take on new challenges.
          </div>
          <img src={Airship} className="app-airship" style={{height: '60%', paddingTop: '20px', width: '600px', marginLeft: '15%'}}/>
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
          </div>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={ProjectMTFFacility} style={{width: '26.6vw', height: '15vw', borderRadius: '5%'}} />
            <img src={ProjectMTF} style={{width: '35vw', height: '20vw', borderRadius: '5%', overflow: 'hidden'}} />
            <img src={ProjectMTFOutside} style={{width: '26.6vw', height: '15vw', borderRadius: '5%'}} />
          </div>

          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#BBBBBB', paddingLeft: '25vw', paddingRight: '25vw'}}>
            <div style={{textAlign: 'center', fontStyle: 'italic', paddingBottom: '70px', color: 'gray'}}>
              "We die in the dark so you can live in the light"
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img src={ProjectMTFAward} style={{width: '6vw', height: '6vw'}} />
            </div>
            <div>
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
            <ul style={{paddingLeft: '25vw', paddingRight: '25vw', paddingTop: '30px', paddingBottom: '10px', color: '#BBBBBB'}}>
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

            <div style={{color: '#BBBBBB', paddingTop: '30px', paddingLeft: '25vw', paddingRight: '25vw'}}>
            The menu is an object oriented system that allows for simplistic setups, direction based local coordinate conversions, and action customizability.
            </div>

            <img src={ChatModes} style={{width: '29.37 vw', height: '10vw', paddingTop: '150px'}} />
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyItems: 'center', paddingTop: '30px', marginLeft: '25vw', marginRight: '25vw', color: '#BBBBBB'}}>
            The system uses the Paper’s Adventure API for chat components.
             To allow for more detailed rank symbols, each chat message uses a line for the player’s username, and another for the message.
              The space to the left allows for up to a 14x14 pixel symbol.
               Additionally, I create a web request to the site minotar.net and cache the resulting player head that is returned after using it in the message.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
