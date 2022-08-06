import React, { Component } from "react";

import './songs.css';
import Song from './Song'
import './videos.css';
import Video from './Video'

// Song images
import lastday from './artwork/lastday.jpg';
import badguy from './artwork/badguy.jpg';
import guccifromharlem from './artwork/guccifromharlem.jpg';
import non from './artwork/non.jpg'
import stillFeelMe from './artwork/stillfeelme.jpg'

// Videos images
// import chanelAndDior from './artwork/chanel-and-dior-vid.jpeg'
import chanelAndDior from './artwork/chanel-and-dior-vid-3a.png'



// import BlueWhlSongs from '../BlueWhlSongs'

const Songs = () => {

    // const bluwhlcontainer = document.createElement('div');
    // bluwhlcontainer.id = "bluwhl-songs";
  
    return (
        <div className='songs-screen-wrapper'>
            {/* <div id='bluwhl-songs'>
                <BlueWhlSongs />
            </div> */}
            <div className='videos-container'>
                <Video link={'https://m.youtube.com/watch?v=jgOXd0K3r_E'} img={chanelAndDior} />
            </div>
            <div className='songs-container'>
                <Song link={'https://ffm.to/stillfeelmefreestyle'} img={stillFeelMe} />
                <Song link={'https://ffm.to/droptoplastday.OWE'} img={lastday} />
                <Song link={'https://ffm.to/droptopbadguy.OWE'} img={badguy} />
                <Song link={'https://ffm.to/guccifromharlem.OWE'} img={guccifromharlem} />
                <Song link={'https://ffm.to/nonigga.OWE'} img={non} />
            </div>
            {/* <div id='testdiv'></div> */}
        </div>
        
    )
}

export default Songs;