import React, { useState, useEffect } from "react";
import "./App.css";

import Subtitle from "./components/Subtitle"
import Blurb from "./components/Blurb"
import DesignCarousel from "./components/DesignCarousel"
import PhotoCarousel from "./components/PhotoCarousel"
import NavLink from "./components/NavLink"
import Section from "./components/Section"
import Fade from "./components/Fade"
import ReactAudioPlayer from 'react-audio-player';


/** TO-DO **/


/** BUGS **/


// this array holds the contents of each section to be rendered depending on state
let sectionContentsMap = [
  {
    key: 0,
    id: 'welcome',
    title: 'Welcome',
    content: 
      <div style={{}}>
        <img src='../img/prof-pic-square.png' width='300' height='300'></img>
        <Blurb content="Hi! I'm Joey. Welcome to my website!"></Blurb>
      </div>
  },
  {
    key: 1,
    id: 'about',
    title: 'About',
    subtitle: 
      <Subtitle
        link1 = {{
          url: "https://www.linkedin.com/in/joeywhua/",
          img: "./img/linkedin.png",
          class: "color-reg"
        }}
        link2 = {{
          url: "https://github.com/joeyhuaa",
          img: "./img/github.svg",
          class: "color-comp"
        }}
        link3 = {{
          url: "https://medium.com/@joeyhua",
          img: "./img/medium.png",
          class: "color-comp"
        }}
      />,
    content: 
      <div>
        <Blurb 
          content="I'm currently an undergraduate studying Managerial Economics and Computer Science at UC Davis. I love creating things, especially websites and music. My love for creation has been a vital part of who I am since I was a kid drawing 2-D video game levels on printer paper." 
        />
      </div>
  },
  {
    key: 2,
    id: 'music',
    title: 'Music',
    subtitle: 
      <Subtitle
        link1 = {{
          url: "https://www.youtube.com/channel/UC6AtGBkG3wnAHDJB7mh3urw",
          img: "./img/yt.png",
          class: "color-reg"
        }}
        link2 = {{
          url: "https://open.spotify.com/album/2KnFT8WN7cDYwq2HN6ikpb?si=NI5K93lTRGui2GKv1kmGhQ",
          img: "./img/spotify.png",
          class: "color-reg"
        }}
        link3 = {{
          url: "https://soundcloud.com/jportgas",
          img: "./img/sc.png",
          class: "color-reg"
        }}
      />,
    content: 
      <div>
        <Blurb
          content="Check me out!"
        />
        <div className="video-container">
          <iframe src="https://open.spotify.com/embed/track/2Ujui4dovTahPFOoZjHcUr" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <br />
          <br />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6C1CKdaz-yA?start=17" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  }
]

export default function App() {
  // using hooks to declare state variables 
  let [sectionIndex, setSectionIndex] = useState(0)
  let [show, setShow] = useState(true)

  // calls on mount & unmount
  useEffect(() => {
    console.log(navLinks.length)
  })

  // event handler
  let handleClick = (index) => {
    if (sectionIndex !== index) {
      setShow(show => !show) // unmount the current section
      setTimeout(function() {
        setSectionIndex(sectionIndex = index)
        setShow(show => !show) // mount the new section
      }, 1000)
    } 
  }

  let section = sectionContentsMap[sectionIndex]
  let currSection =
    <Section 
      id={section.id}
      title={section.title}
      subtitle={section.subtitle}
      content={section.content}
    />
  let navLinks = sectionContentsMap.map((section, i) => // section contents and index
    <NavLink index={i} label={section.title} changeSection={() => handleClick(i)} />
  )

  return (
    <div id='viewport'>
      <nav>
        <ul>
          <li>{navLinks[0]}</li>
          <li>{navLinks[1]}</li>
          <li>{navLinks[2]}</li>
          <li>{navLinks[3]}</li>
          <li>{navLinks[4]}</li>
        </ul>
      </nav>

      {/* <button onClick={() => setShow(show => !show)}>
        {show ? 'hide' : 'show'}
      </button> */}
      
      <Fade show={show}>
        {currSection}
      </Fade>

      <ReactAudioPlayer 
        src={"dragons_breath.mp3"}
        autoPlay
        controls
      />
    </div>
  )
}
