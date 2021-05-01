import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import heroVideo from '../../assets/coast-diagnostics-hero.mp4'

const Hero = () => {
    return(
        <section className="hero">
        <div className="hero-body">
        <div className="container level">
            <div id="hero-content" className="level-item has-text-centered">
            <h1 className="level-item has-text-centered">
                Industry Leading Quality and Service
            </h1>
            </div>
        </div>
        {/* <video className="is-hidden-mobile" poster="" id="bgvid" playsInline="" autoPlay="" muted="" loop="">
            <source src="./assets/coast-diagnostics-hero.mp4" type="video/mp4" />
        </video> */}
        <ReactPlayer 
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="100%"
        />
        </div>
    </section>
    )

}

export default Hero;