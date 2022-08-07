import React, { Component } from "react";

import './songs.css';
import Song from './Song'
import './videos.css';
import Video from './Video'

// Song images
import all_in from './artwork/songs/all_in.jpg';
import bad_guy from './artwork/songs/bad_guy.jpg';
import chanel_and_dior from './artwork/songs/chanel_and_dior.jpg';
import convertible_day from './artwork/songs/convertible_day.jpg';
import destiny from './artwork/songs/destiny.jpg';
import growing_pain from './artwork/songs/growing_pain.jpg';
import gucci_from_harlem from './artwork/songs/gucci_from_harlem.jpg';
import hottest_n_tha_game from './artwork/songs/hottest_n_tha_game.jpg';
import last_day from './artwork/songs/last_day.jpg';
import non from './artwork/songs/non.jpg'
import somewhere_to_be from './artwork/songs/somewhere_to_be.jpg';
import still_feel_me from './artwork/songs/still_feel_me.jpg'
import unstoppable from './artwork/songs/unstoppable.jpg';

// Video images
// import chanel_and_dior_vid from './artwork/videos/chanel_and_dior_vid_3a.png'



// import BlueWhlSongs from '../BlueWhlSongs'

const Songs = () => {

    // const bluwhlcontainer = document.createElement('div');
    // bluwhlcontainer.id = "bluwhl-songs";
  
    return (
        <div className='songs-screen-wrapper'>
            {/* <div className='videos-container'>
                <Video link={'https://m.youtube.com/watch?v=jgOXd0K3r_E'} img={chanelAndDior} />
            </div> */}
            <div className='songs-container'>
                <Song link={'https://ffm.to/chanelanddior'} img={chanel_and_dior} />
                <Song link={'https://ffm.to/stillfeelmefreestyle'} img={still_feel_me} />
                <Song link={'https://ffm.to/droptoplastday.OWE'} img={last_day} />
                <Song link={'https://ffm.to/guccifromharlem.OWE'} img={gucci_from_harlem} />
                <Song link={'https://ffm.to/droptopbadguy.OWE'} img={bad_guy} />
                <Song link={'https://ffm.to/nonigga.OWE'} img={non} />
                <Song link={'https://ffm.to/droptopallin'} img={all_in} />
                <Song link={'https://ffm.to/hottestnthagame'} img={hottest_n_tha_game} />
                <Song link={'https://ffm.to/growingpain'} img={growing_pain} />
                <Song link={'https://ffm.to/convertibleday'} img={convertible_day} />
                <Song link={'https://ffm.to/droptopdestiny'} img={destiny} />
                <Song link={'https://ffm.to/somewheretobe'} img={somewhere_to_be} />
                <Song link={'https://ffm.to/droptopunstoppable'} img={unstoppable} />
            </div>
        </div>
    )
}

export default Songs;