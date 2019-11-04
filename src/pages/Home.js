import React from "react"

function Home() {
  return (
		<div id="main-container">
			<div className="contain">
				<span className="title">Joey Hua</span>
				{/* <img className="prof-pic" src="../img/prof-pic.jpg"></img> */}
				<span className="blurb">
					<a href="https://www.linkedin.com/in/joey-hua-9ab456175/" target="_blank">linkedin </a>
					|
					<a href="https://github.com/joeyhuaa" target="_blank"> github </a>
					|
					<a href="https://medium.com/@joeyhua" target="_blank"> blog </a>
				</span>
				<span className="blurb">
					Welcome to my webpage!
					I'm Joey, a student at UC Davis studying managerial economics and computer science. 
				</span>
				<span className="blurb">
					I love creating things. Especially websites, designs, and music. My love for creation has been a vital part of me since I was a kid drawing 2-D video game levels on printer paper...the good ol' days...
				</span>
				<span className="blurb">
					Recently I've found ways to apply my creative energies towards meaningful ends. You can find some examples of my best work below.
				</span>
			</div>
			<div className="contain">
				<span className="title">Design</span>
				<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img class="carousel-slide" src="../img/ssb-flyer-english.png" alt="Second slide"></img>
						</div>
						<div class="carousel-item">
							<img class="carousel-slide" src="../img/ssb-flyer-spanish.png" alt="Third slide"></img>
						</div>
						<div class="carousel-item">
							<img class="carousel-slide" src="../img/ssb-flyer-mandarin.png" alt="Fourth slide"></img>
						</div>
  				</div>
					<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
			<div className="contain">
				<span className="title">Music</span>
				<span className="blurb">
					<a href="https://www.youtube.com/channel/UC6AtGBkG3wnAHDJB7mh3urw" target="_blank">youtube </a>
					|
					<a href="https://soundcloud.com/joeyportgas" target="_blank"> soundcloud </a>
					|
					<a href="https://www.beatstars.com/joeyportgas/feed" target="_blank"> beat store </a>
				</span>
				<div className="pic-holder">
					<img className="prof-pic" src="../img/joeyportgas.png"></img>
				</div>
				<span className="blurb">I produce hip hop music and beats under the name Joey Portgas.</span>
			</div>
			<div className="contain">
				<span className="title">Photos</span>
				<div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img class="carousel-slide" src="../img/tylerincar.jpg"></img>
						</div>
						<div class="carousel-item">
							<img class="carousel-slide" src="../img/tylerincar2.jpg"></img>
						</div>
						<div class="carousel-item">
							<img class="carousel-slide" src="../img/tyleroncar.jpg"></img>
						</div>
						<div class="carousel-item">
							<img class="carousel-slide" src="../img/tylerbluegreenblack.jpg"></img>
						</div>
						<div class="carousel-item">
							<img class="carousel-slide" src="../img/tylerbluepinkoutline.jpg"></img>
						</div>
						<div class="carousel-item">
							<img class="carousel-slide" src="../img/tylerorangegreenoutline.jpg"></img>
						</div>
						<div class="carousel-item">
							<img class="carousel-slide" src="../img/tylerredblkpoints.jpg"></img>
						</div>
						<div class="carousel-item">
							<img class="carousel-slide" src="../img/headlightsnight.jpg"></img>
						</div>
  				</div>
					<a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	)
}
export default Home