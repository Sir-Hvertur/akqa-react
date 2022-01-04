import React from "react";

function Videos() {
    return(
<section class="grey-section" id="news">
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-12 col-12">
      <p class="videos-headline">Kol Videos - get expert insights here</p>
      <p>
        amet dicta, odio vitae reprehenderit, sequi provident modi amet dicta,
        odio vitae reprehenderit, sequi provident modi pariatur perspiciatis
        fuga necessitatibus aspernatur. Ad, eligendi!
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-12">
      <p class="information-headline">Baking Machine</p>

      <video width="320" height="200" controls>
        <source src="video/video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p class="video-paragraph">
        amet dicta, odio vitae reprehenderit, sequi provident modi amet dicta,
        odio vitae reprehenderit, sequi provident
      </p>
    </div>
  </div>
</section>
    )
}

export default Videos;