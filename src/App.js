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
        <h1 style={{marginTop:'1em'}}>Hi, I'm Joey.</h1>
        <span>Welcome to my website.</span>
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
            I'm currently an undergraduate student at UC Davis studying Computer Science and Managerial Economics. I enjoy web development, especially 
            with ReactJS. Among my other interests are music production, audio engineering, video animation, and mountain biking. 
          </p>
          <br />
          <h5><u>Resume</u></h5>
          <div style={{fontWeight:'normal'}}>
            <p>
              Education: UC Davis | Class of 2022 | B.S. in Computer Science and Managerial Economics
            </p>
            <p>
              Skills:
              <ul>
                <li>Languages: HTML, CSS, JavaScript, Python, Ruby on Rails</li>
                <li>Tools/Frameworks: React, Node, Git, Webpack, Bootstrap, D3.js, SVG</li>
              </ul>
            </p>
            <p>
              Experience:
              <ul>
                <li>
                  <u>Center for Educational Effectiveness at UC Davis</u> <i>(Apr 2020 — Present)</i>
                  <br />
                  <strong>Full Stack Developer</strong>
                  <ul>
                    <li>Built a Reddit-like discussion forum for professors to discuss various topics related to teaching.</li>
                    <li>Designed user-friendly charts using React and D3.js to help professors glean meaningful insights from lecture recordings.</li>
                    <li>Used NLP libraries to parse and extract insights from lecture recording transcripts in React and Ruby on Rails.</li>
                    <li>Integrated Zoom API to fetch lecture recording data, using OAuth 2.0 for user authentication.</li>
                  </ul>
                </li>
                <li>
                  <u>HackDavis 2020</u> <i>(Jan 2020)</i>
                  <br />
                  <strong>Team Leader</strong>
                  <ul>
                    <li>Led a team of 3 students to complete a laptop recommendation application in Python.</li>
                    <li>Generated project ideas and encouraged open communication among team members.</li>
                    <li>Assisted teammates with debugging code.</li>
                  </ul>
                </li>
                <li>
                  <u>University of California</u> <i>(Nov 2019 — Mar 2020)</i>
                  <br />
                  <strong>Student Assistant III</strong>
                  <ul>
                    <li>Researched reasons why advocacy groups sued University of California over the SAT.</li>
                    <li>Web scraped data on 3000+ Bay Area rental units, 1000+ used vehicles from Kelley Blue Book, and standardized test data from 56 Bay Area counties using Python.</li>
                  </ul>
                </li>
                <li>
                  <u>SSB Basketball Academy</u> <i>(Jul 2019 — Dec 2019)</i>
                  <br />
                  <strong>Web & Graphic Designer</strong>
                  <ul>
                    <li>Designed responsive website using HTML, CSS, and React, and 4 flyers using Adobe Illustrator.</li>
                    <li>Developed logo prototypes and integrated a new logo to create a more child-centered brand identity.</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
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
          <a href="https://github.com/joeyhuaa/Untitled-News-Project-Frontend" target="_blank" rel="noopener noreferrer">
            <h5><u>Project Solomon</u></h5>
          </a>
          <p>
            Project Solomon is a news feed/news bias analysis project that I'm working on with 3 other programmers. Our goal is to present news in a way that discourages biased thinking and instead encourages impartial, critical, informed digestion of information. We hope to accomplish this by replacing recommendation algorithms with text analysis algorithms that inform readers about what they're reading. So far, I've built a front-end prototype with a team member, and we're currently working on data collection, pipelining, and NLP processes. 
          </p>

          <a href="https://valorantfinance.live/" target="_blank" rel="noopener noreferrer">
            <h5><u>ValorantFinance</u></h5>
          </a>
          <p>
            ValorantFinance is a fun app I made for Valorant players who need help keeping track of their in-game finances, complete with Valorant-themed aesthetics and sound effects. The website simulates a normal Valorant game, allowing the user to make round-by-round decisions on what to buy/sell.
          </p>

          <a href="https://github.com/joeyhuaa/Origin" target="_blank" rel="noopener noreferrer">
            <h5><u>Origin</u></h5>
          </a>
          <p>
            Origin is a note-taking app I made earlier in 2020 that's meant to graphically imitate how our brains form connections and webs. A user would create a new node, write notes in it, and connect the dots (nodes) to form a kind of "brain map" that would represent all the notes/ideas he or she has taken. You can find the source code above. 
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
