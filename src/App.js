import React, { useState } from "react";
import "./App.css";

import NavLink from "./components/NavLink"
import Section from "./components/Section"
import Fade from "./components/Fade"
import MusicPlayer from './components/MusicPlayer'
import Pics from './components/Pics'

import supernova from './assets/supernova.mp3'
import soul_dance from './assets/soul_dance.mp3'
import soul_dance_2 from './assets/soul_dance_2.mp3'
import soul_wash from './assets/soul_wash.mp3'
import soul_wander from './assets/soul_wander.mp3'
import soul_trip from './assets/soul_trip.mp3'

import supernova_art from './assets/supernova.jpg'
import soulfection_art from './assets/soulfection.jpg'
import prof_pic from './assets/prof-pic-square.jpg'
import headlightsnight from './assets/headlightsnight.jpg'
import tylerbgb from './assets/tylerbluegreenblack.jpg'
import tylerbp from './assets/tylerbluepinkoutline.jpg'
import tylerog from './assets/tylerorangegreenoutline.jpg'
import tylerrb from './assets/tylerredblkpoints.jpg'

// this array holds the contents of each section to be rendered depending on state
let sectionContentsMap = [
  {
    key: 0,
    id: 'home',
    title: 'Home',
    content: 
      <div className='section'>
        <Pics pics={[prof_pic,headlightsnight,tylerbgb,tylerbp,tylerog,tylerrb,soulfection_art]} />
        <h1 style={{marginTop:'1em'}}>Hi, I'm Joey 🙂</h1>
        <span id='homepage-note' style={{fontSize:'12px'}}>[For best experience, stream my music below while exploring the site]</span>
      </div>
  },
  {
    key: 1,
    id: 'about',
    title: 'About',
    content:
      <div className='section'>
        <div style={{textAlign:'left', paddingBottom:'200px', fontWeight:'normal'}}>
          <h5><u>About Me</u></h5>
          <p>
            I'm graduated from UC Davis in 2022 with a major in Computational Cognitive Science. I enjoy web development, especially 
            with ReactJS. I also love <a href='https://open.spotify.com/artist/1zEBlYdwmgdTZAOHE753V2?si=Q269eJMgSiS8RBwmp5OWoQ' target='_blank'>making music</a>, playing basketball, boxing, and hiking. 
            Here's my <a href='https://drive.google.com/file/d/0B5HPRhEFlpMwRVhlYWI0X0NfNGFCN0tiRzVyRmNfTUZ4RExJ/view?usp=sharing&resourcekey=0-LPxOcqhkqkPK6NA5hBrEaw' target='_blank'>resume</a>.
          </p>
          <p>
            You can contact me via email at joeyhua17@gmail.com. I can offer job references upon request!
          </p>
        </div>
      </div>
  },
  {
    key: 2,
    id: 'projects',
    title: 'Projects',
    content: 
      <div className='section'>
        <div style={{textAlign:'left', paddingBottom:'200px', fontWeight:'normal'}}>
          <h5><u style={{color: '#00a7ff'}}>SuperTonic</u> [<a href='https://github.com/joeyhuaa/supertonic-frontend' target='_blank'>frontend</a> | <a href='https://github.com/joeyhuaa/supertonic-backend' target='_blank'>backend</a>]</h5>
          <p>
            SuperTonic is a NextJS/Ruby on Rails project management app for musicians, conceptually combining GitHub and Spotify. I was inspired by how GitHub provides easy
            version control and collaboration, and Spotify provides aesthetic, seamless music streaming. As an artist and producer myself, I and my other music friends use Google Drive to store and share music,
            which gets the job done, but Google Drive wasn't designed with music in mind. My dream for SuperTonic is that people in the music world will find in useful and intuitive to use for their projects so Google Drive won't have to be used anymore, lol 😂. 
          </p>

          <a href="https://github.com/joeyhuaa/Laptop-Recommend" target="_blank" rel="noopener noreferrer">
            <h5><u>Laptop-Recommend</u></h5>
          </a>
          <p>
            Laptop-Recommend is a Python app I made with a team at HackDavis 2020 that recommends laptops based on information the user provides. We wanted to provide a feasible solution for money-tight college students in need of new laptops. Source code is available above. 
          </p>

          <a href="https://github.com/joeyhuaa/Flopper" target="_blank" rel="noopener noreferrer">
            <h5><u>Flopper</u></h5>
          </a>
          <p>
            I made Flopper because I was disappointed at the lack of a GUI in Texas-Hold-Em. Also, knowing general hand equities preflop was more important than simulating two hands against each other in a vacuum. Flopper allows the user to select a range of hands for two players and calculates equities for both ranges. 
          </p>

          <a href="https://github.com/joeyhuaa/Texas-Hold-Em" target="_blank" rel="noopener noreferrer">
            <h5><u>Texas-Hold-Em</u></h5>
          </a>
          <p>
            Back in freshman year when I was really into poker, I made a Python app that allows the user to simulate as many game runouts as desired between two hands. 
          </p>
        </div>
      </div>
  },
]

export default function App() {
  // using hooks to declare state variables 
  let [sectionIndex, setSectionIndex] = useState(0)
  let [show, setShow] = useState(true)

  // functions
  let handleClick = (index) => {
    if (sectionIndex !== index) {
      setShow(show => !show) // unmount the current section
      setTimeout(function() {
        setSectionIndex(sectionIndex = index)
        setShow(show => !show) // mount the new section
      }, 500)
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
          {navLinks.map(link => <li>{link}</li>)}
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
