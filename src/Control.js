import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import {faPause} from '@fortawesome/free-solid-svg-icons';
function Control(props) {
  return (
    <div className='control'>
      <button className='backward' onClick={()=>{props.skipSong(false)}}>
        <FontAwesomeIcon icon={faBackward}/>
        </button>
      <button className='play' 
      onClick={()=>{props.setIsPlaying(!props.isPlaying)}}>
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay}/>
        </button>
      <button className='forward' onClick={()=>{props.skipSong()}}>
        <FontAwesomeIcon icon={faForward}/>
        </button>
    </div>
  )
}

export default Control;
