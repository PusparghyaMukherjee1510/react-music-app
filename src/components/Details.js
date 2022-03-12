import React from 'react'
import '../App.css';
function Details(props) {
  return (
    <div className='details'>
      <div className='song_image'>
        <img src={props.songs.img_src} alt=''/>
      </div>
      <h3 className='song_details'>{props.songs.title}</h3>
      <h5 className='song_artist'>{props.songs.artist}</h5>
    </div>
  )
}

export default Details;
