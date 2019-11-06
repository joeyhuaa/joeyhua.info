import React from "react"
import Subtitle from "../components/Subtitle"
import Blurb from "../components/Blurb"
import DesignCarousel from "../components/DesignCarousel"
import PhotoCarousel from "../components/PhotoCarousel"

function Home() {
  return (
		<div id="main-container">
			<div className="contain">
				<span className="title">Joey Hua</span>
				<Subtitle
					link1 = {{
						url: "https://www.linkedin.com/in/joey-hua-9ab456175/",
						text: "linkedin "
					}}
					link2 = {{
						url: "https://github.com/joeyhuaa",
						text: " github "
					}}
					link3 = {{
						url: "https://medium.com/@joeyhua",
						text: " blog"
					}}
				/>
				<Blurb 
					content="Welcome to my webpage! I'm Joey, a student at UC Davis studying managerial economics and computer science."
				/>
				<Blurb 
					content="I love creating things. Especially websites, designs, and music. My love for creation has been a vital part of me since I was a kid drawing 2-D video game levels on printer paper...the good ol' days..." 
				/>
				<Blurb
					content="You can find some examples of my best work below."
				/>
			</div>
			<div className="contain">
				<span className="title">Design</span>
				<DesignCarousel />
			</div>
			<div className="contain">
				<span className="title">Music</span>
				<Subtitle
					link1 = {{
						url: "https://www.youtube.com/channel/UC6AtGBkG3wnAHDJB7mh3urw",
						text: "youtube " 
					}}
					link2 = {{
						url: "https://soundcloud.com/joeyportgas",
						text: " soundcloud "
					}}
					link3 = {{
						url: "https://www.beatstars.com/joeyportgas/feed",
						text: " beatstore"
					}}
				/>
				<div className="pic-holder">
					<img className="prof-pic" src="../img/joeyportgas.png"></img>
				</div>
				<Blurb
					content="I produce hip hop music and beats under the name Joey Portgas."
				/>
			</div>
			<div className="contain">
				<span className="title">Photos/Edits</span>
				<PhotoCarousel />
			</div>
		</div>
	)
}
export default Home