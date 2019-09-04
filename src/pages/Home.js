import React from "react"

function Home() {
  return (
		<div id="main-container">
			<div className="contain">
				<span className="title">Joey Hua</span>
				<img id="prof-pic" src="../img/prof-pic.jpg"></img>
				<span className="blurb">
					about me
				</span>
			</div>
			<div className="contain">
				<span className="title">Design stuff</span>
			</div>
			<div className="contain">
				<span className="title">Music</span>
			</div>
			<div className="contain">
				<span className="title">Photos</span>
			</div>
		</div>
	)
}
export default Home