import React from "react";
import "./App.css";
import NavBar from './components/NavBar'
import Subtitle from "./components/Subtitle"
import Blurb from "./components/Blurb"
import DesignCarousel from "./components/DesignCarousel"
import PhotoCarousel from "./components/PhotoCarousel"

class App extends React.Component {
  render() {
    return (
      <div id='viewport'>
        <NavBar />
        <div className="section" id='section1'>
          <span className="title">Joey Hua</span>
          <Subtitle
            link1 = {{
              url: "https://www.linkedin.com/in/joey-hua-9ab456175/",
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
          />
          <Blurb 
            content="Welcome to my webpage! I'm Joey, a student at UC Davis studying Managerial Economics."
          />
          <Blurb 
            content="I love creating things. Especially websites, designs, and music. My love for creation has been a vital part of me since I was a kid drawing 2-D video game levels on printer paper...the good ol' days..." 
          />
          <Blurb
            content="You can find some examples of my best work below."
          />
        </div>
        <div className="section" id='section2'>
          <span className="title">Design</span>
          <DesignCarousel />
        </div>
        <div className="section" id='section3'>
          <span className="title">Music</span>
          <Subtitle
            link1 = {{
              url: "https://www.youtube.com/channel/UC6AtGBkG3wnAHDJB7mh3urw",
              img: "../img/yt.png",
              class: "color-reg"
            }}
            link2 = {{
              url: "https://www.beatstars.com/joeyportgas/feed",
              img: "../img/spotify.png",
              class: "color-reg"
            }}
            link3 = {{
              url: "https://soundcloud.com/joeyportgas",
              img: "../img/sc.png",
              class: "color-reg"
            }}
          />
          <Blurb
            content="I produce hip hop music and beats under the name Joey Portgas."
          />
          <div className="video-container">
            <iframe width="400" height="300" src="https://www.youtube.com/embed/i6y_2WwnLoI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="section" id='section4'>
          <span className="title">Photos/Edits</span>
          <PhotoCarousel />
        </div>
      </div>
    )
  }
}
export default App