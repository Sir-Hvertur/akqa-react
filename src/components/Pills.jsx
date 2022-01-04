import React from "react";

function Pills() {
  return (
    <section className="grey-section" id="modeOfAction">
      <div className="row">
        <div className="col-lg-6">
          <img className="pills-image" src="images/pills.png" alt="pills-img" />
        </div>

        <div className="col-lg-6">
          <p className="information-headline">
            It is the first and only biologic developed to specifically
            neutralize IL-13, a key driver of atopic dermatitis signs and
            symptoms(1,2)
          </p>
          <br />

          <p>
            Learn more about how Adtralza® works and how to use it in treatment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pills;
