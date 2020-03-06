import React from "react"
 
function PhotoCarousel() {
  return (
    <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
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
  )
}

export default PhotoCarousel