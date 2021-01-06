import React, { useState, useEffect } from "react";
import "./App.css";

import Subtitle from "./components/Subtitle"
import Blurb from "./components/Blurb"
import NavLink from "./components/NavLink"
import Section from "./components/Section"
import Fade from "./components/Fade"
import MusicPlayer from './components/MusicPlayer'
import RandomPic from './components/RandomPic'

import supernova from './assets/supernova.mp3'
import soul_dance from './assets/soul_dance.mp3'
import soul_dance_2 from './assets/soul_dance_2.mp3'
import soul_wash from './assets/soul_wash.mp3'
import soul_wander from './assets/soul_wander.mp3'
import soul_trip from './assets/soul_trip.mp3'

import supernova_art from './assets/supernova.jpg'
import soulfection_art from './assets/soulfection.jpg'
import prof_pic from './assets/prof-pic-square.png'
import headlightsnight from './assets/headlightsnight.jpg'
import tylerbgb from './assets/tylerbluegreenblack.jpg'
import tylerbp from './assets/tylerbluepinkoutline.jpg'
import tylerog from './assets/tylerorangegreenoutline.jpg'
import tylerrb from './assets/tylerredblkpoints.jpg'

// this array holds the contents of each section to be rendered depending on state
let sectionContentsMap = [
  {
    key: 0,
    id: 'welcome',
    title: 'Welcome',
    content: 
      <div className='section'>
        <RandomPic pics={[prof_pic,headlightsnight,tylerbgb,tylerbp,tylerog,tylerrb,soulfection_art]} />
        <h1 style={{marginTop:'1em'}}>Hi, I'm Joey.</h1>
        <span>Welcome to my website.</span>
        <span style={{fontSize:'12px'}}>[For best experience, stream my music below while exploring the site]</span>
      </div>
  },
  {
    key: 1,
    id: 'projects',
    title: 'Projects',
    // subtitle: 
    //   <Subtitle
    //     link1 = {{
    //       url: "https://www.linkedin.com/in/joeywhua/",
    //       img: "./assets/linkedin.png",
    //       class: "color-reg"
    //     }}
    //     link2 = {{
    //       url: "https://github.com/joeyhuaa",
    //       img: "./assets/github.svg",
    //       class: "color-comp"
    //     }}
    //     link3 = {{
    //       url: "https://medium.com/@joeyhua",
    //       img: "./assets/medium.png",
    //       class: "color-comp"
    //     }}
    //   />,
    content: 
      <div className='section'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6C1CKdaz-yA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iBr_JZUCGpY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  },
]

export default function App() {
  // using hooks to declare state variables 
  let [sectionIndex, setSectionIndex] = useState(0)
  let [show, setShow] = useState(true)

  useEffect(() => {
  })

  // functions
  let handleClick = (index) => {
    if (sectionIndex !== index) {
      setShow(show => !show) // unmount the current section
      setTimeout(function() {
        setSectionIndex(sectionIndex = index)
        setShow(show => !show) // mount the new section
      }, 1000)
    } 
  }

  // variables
  let section = sectionContentsMap[sectionIndex]
  let currSection =
    <Section 
      id={section.id}
      title={section.title}
      subtitle={section.subtitle}
      content={section.content}
    />
  let navLinks = sectionContentsMap.map((section, i) => 
    <NavLink index={i} label={section.title} changeSection={() => handleClick(i)} />
  )

  return (
    <div id='viewport'>
      <nav>
        <ul>
          <li>{navLinks[0]}</li>
          <li>{navLinks[1]}</li>
        </ul>
      </nav>

      <Fade show={show}>
        {currSection}
      </Fade>

      <MusicPlayer
        songs={[
          {file: supernova, title: `Supernova`, art: supernova_art},
          {file: soul_dance, title: `Soul Dance`, art: soulfection_art},
          {file: soul_dance_2, title: `Soul Dance II`, art: soulfection_art},
          {file: soul_wash, title: `Soul Wash`, art: soulfection_art},
          {file: soul_trip, title: `Soul Trip`, art: soulfection_art},
          {file: soul_wander, title: `Soul Wander`, art: soulfection_art},
        ]}
      />
    </div>
  )
}
