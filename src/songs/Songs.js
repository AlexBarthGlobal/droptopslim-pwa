import React, { Component } from "react";
import lastday from './artwork/lastday.jpg';
import badguy from './artwork/badguy.jpg';
import guccifromharlem from './artwork/guccifromharlem.jpg';
import non from './artwork/non.jpg'
import stillfeelme from './artwork/stillfeelme.jpg'
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
                    <a href='https://ffm.to/stillfeelmefreestyle'>
                        <img className='song-art-img' src={stillfeelme}></img>
                    </a>
                    <a href='https://ffm.to/stillfeelmefreestyle'>
                        <div className='song-listen'>Listen</div>
                    </a>
                </div>
                <div className='song-art'>
                    <a href='https://ffm.to/droptoplastday.OWE'>
                        <img className='song-art-img' src={lastday}></img>
                    </a>
                    <a href='https://ffm.to/droptoplastday.OWE'>
                        <div className='song-listen'>Listen</div>
                    </a>
                </div>
                <div className='song-art'>
                    <a href='https://ffm.to/droptopbadguy.OWE'>
                        <img className='song-art-img' src={badguy}></img>
                    </a>
                    <a href='https://ffm.to/droptopbadguy.OWE'>
                        <div className='song-listen'>Listen</div>
                    </a>
                </div>
                <div className='song-art'>
                    <a href='https://ffm.to/guccifromharlem.OWE'>
                        <img className='song-art-img' src={guccifromharlem}></img>
                    </a>
                    <a href='https://ffm.to/guccifromharlem.OWE'>
                        <div className='song-listen'>Listen</div>
                    </a>
                </div>
                <div className='song-art'>
                    <a href='https://ffm.to/nonigga.OWE'>
                        <img className='song-art-img' src={non}></img>
                    </a>
                    <a href='https://ffm.to/nonigga.OWE'>
                        <div className='song-listen'>Listen</div>
                    </a>
                </div>
            </div>
            {/* <div id='testdiv'></div> */}
        </div>
        
    )
}

export default Songs;