
import Control from '../Control';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Details from './Details';
import React, { useState,useRef } from 'react';
import { useEffect } from 'react';

function Player(props) {
  const audioEl=useRef(null);
  const [isPlaying, setIsPlaying]=useState(false);
  
  const skipSong=(forwards=true)=>{
      if (forwards) {
        props.setCurrentSongIndex(()=>{
          let temp = props.currentSongIndex;
          temp++;

          if (temp > props.songs.length-1) {
            temp=0;
          }
          return temp;
        });
      }else{
        props.setCurrentSongIndex(()=>{
          let temp = props.currentSongIndex;
          temp--;

          if (temp < 0) {
            temp= props.songs.length-1;
          }
          return temp;
        });
      }
  };

  useEffect(()=>{
    if (isPlaying) {
      audioEl.current.play();
    }else{
      audioEl.current.pause();
    }
  })

  return (
      <>
    <div className='player'>
      <h4>Playing Now</h4>
    </div>
    <Details 
       songs={props.songs[props.currentSongIndex]}  
    />
    <Control
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      skipSong={skipSong}
    />
    <audio className='audio' 
    src={props.songs[props.currentSongIndex].src}
    ref={audioEl} 
    controls>
         
    </audio>
    <p>Next:{" "}<span>{props.songs[props.nextSongIndex].title}
    {" "}
    by {" "} {props.songs[props.nextSongIndex].artist}
    </span></p>
    </>
  )
}

export default Player;
