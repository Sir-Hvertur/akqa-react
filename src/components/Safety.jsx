import React from "react";

function Safety() {
    return(
<section class="white-section" id="safety">
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-5 col-5">

      <p class="clinical-headline">Clinical tools - at a glance</p>
    </div>

    <div class="col-lg-5 col-md-5 col-5"></div>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-5 grey-clinical">
      <img class="clinical-image" src="images/nurse.png" alt="injection-img" />

      <div class="clinical-box">
        <p class="information-headline">Dosing guide</p>
        <p class="clinical-paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
          veritatis. Quia, iste. Tenetur voluptatum error,
        </p>
        <p class="clinical-link">Learn more about application and dosing</p>
      </div>
    </div>
    <div class="col-lg-5 grey-clinical">
      <img
        class="clinical-image"
        src="images/injection.png"
        alt="injection-img"
      />

      <div class="clinical-box">
        <p class="information-headline">Patient injection made simple</p>
        <p class="clinical-paragraph">
          amet dicta, odio vitae reprehenderit, sequi provident modi pariatur
          perspiciatis fuga necessitatibus aspernatur. Ad, eligendi!
        </p>
        <p class="clinical-link">Watch the video</p>
      </div>
    </div>
  </div>
</section>
    )
}

export default Safety;