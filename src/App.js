
import './App.css';
import React,{useState, useEffect} from 'react';
import Player from './components/Player';


function App() {
  const [songs]=useState([
    {
      title:"Satisfaya",
      artist:"Imran Khan",
      img_src:"./images/Satisfya_-_Cover_Art.jpeg",
      src:"./newsongs/1.mp3",
    },
    {
      title:"Mayabana_Biharini",
      artist:"Somlata Acharya",
      img_src:"./images/mayabana_biharini.jpg",
      src:"./newsongs/2.mp3",
    },
    {
      title:"Lioness",
      artist:"Alex & Rus",
      img_src:"./images/alex&rus.jpg",
      src:"./newsongs/3.mp3",
    },
    {
      title:"In a hood Near You",
      artist:"Sunny Clay",
      img_src:"./images/sunny_clay.jpg",
      src:"./newsongs/4.mp3",
    },
    {
      title:"Rangaboti",
      artist:"Surajit & Iman",
      img_src:"./images/rangabati.jpg",
      src:"./newsongs/5.mp3",
    },
    {
      title:"The Nights",
      artist:"Avicii",
      img_src:"./images/Avicii_Nights_Artwork.png",
      src:"./newsongs/6.mp3",
    },
    {
      title:"Keh Du Tumhe Remix",
      artist:"Dj Aqueel",
      img_src:"./images/keh du tumhe.jpg",
      src:"./newsongs/7.mp3",
    },
    {
      title:"Chadti Jawani Remix",
      artist:"Dj Aqueel",
      img_src:"./images/chadti jawani.jpg",
      src:"./newsongs/8.mp3",
    },
    {
      title:"Att Karti",
      artist:"Jassi Gill",
      img_src:"./images/att_karti.jpg",
      src:"./newsongs/9.mp3",
    },
    {
      title:"High Rated Gabru",
      artist:"Guru Randhawa",
      img_src:"./images/high rated gabru.jpg",
      src:"./newsongs/10.mp3",
    },
]);

const [currentSongIndex, setCurrentSongIndex]=useState(0);
const [nextSongIndex, setNextSongIndex]=useState(0);

useEffect(()=>{
setNextSongIndex(()=>{
  if (currentSongIndex + 1 > songs.length-1) {
    return 0;
  }else{
    return currentSongIndex + 1;
  }
})
},[currentSongIndex, songs.length]);
  return (<>
    <><h1>React Music App</h1></>
    <div className="App">
     <Player
        currentSongIndex={currentSongIndex}
        nextSongIndex={nextSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
     />   
    </div></>
  );
}

export default App;
