import React, { Component } from "react";
import lastday from './artwork/lastday.jpg';
import badguy from './artwork/badguy.jpg';
import guccifromharlem from './artwork/guccifromharlem.jpg';
import non from './artwork/non.jpg'
import './songs.css';
import BlueWhlSongs from '../BlueWhlSongs'

const Songs = () => {

    const bluwhlcontainer = document.createElement('div');
    bluwhlcontainer.id = "bluwhl-songs";
  
    return (
        <div className='songs-screen-wrapper'>
            <div id='bluwhl-songs'>
                <BlueWhlSongs />
            </div>
            <div className='songs-container'>
                <div className='song-art'>
                    <img className='song-art-img' src={lastday}></img>
                    <div className='song-listen'>Listen</div>
                </div>
                <div className='song-art'>
                    <img className='song-art-img' src={badguy}></img>
                    <div className='song-listen'>Listen</div>
                </div>
                <div className='song-art'>
                    <img className='song-art-img' src={guccifromharlem}></img>
                    <div className='song-listen'>Listen</div>
                </div>
                <div className='song-art'>
                    <img className='song-art-img' src={non}></img>
                    <div className='song-listen'>Listen</div>
                </div>
            </div>
            <div id='testdiv'></div>
        </div>
        
    )
}

export default Songs;