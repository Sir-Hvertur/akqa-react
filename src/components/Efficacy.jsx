import React from "react";

function Efficacy() {
  return (
    <section className="white-section" id="efficacy">
      <div className="row justify-content-around">
        <div className="col-lg-3">
          <img
            className="circle-images"
            src="images/rating.png"
            alt="circle-img"
          />
          <p className="circle-headline">Long term sustained improvement</p>
          <p className="circle-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            illum velit consectetur autem obcaecati. Itaque assumenda ut dicta
            nemo! Corrupti autem facilis tenetur esse id velit mollitia quis!
            Eaque, ad!
          </p>
          <p className="circle-link">See efficacy and trial data</p>
        </div>
        <div className="col-lg-3">
          <img
            className="circle-images"
            src="images/health.png"
            alt="circle-img"
          />
          <p className="circle-headline">
            Improvements in the burden of disease
          </p>
          <p className="circle-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            illum velit consectetur autem obcaecati. Itaque assumenda ut dicta
            nemo! Corrupti autem facilis tenetur esse id velit mollitia quis!
            Eaque, ad!
          </p>
          <p className="circle-link">
            Learn more about quality of life improvements
          </p>
        </div>
        <div className="col-lg-3">
          <img
            className="circle-images"
            src="images/safety.png"
            alt="circle-img"
          />
          <p className="circle-headline">Good safety profile</p>
          <p className="circle-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            illum velit consectetur autem obcaecati. Itaque assumenda ut dicta
            nemo! Corrupti autem facilis tenetur esse id velit mollitia quis!
            Eaque, ad!
          </p>
          <p className="circle-link">See safety profile</p>
        </div>
      </div>
    </section>
  );
}

export default Efficacy;
