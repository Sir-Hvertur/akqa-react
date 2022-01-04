import React from "react";

function Overview() {
    return (
        <section id="overview">  
        <div className="row">
        <div className="col-lg-4 col-md-12 col-12 logo-column">
          <div className="patient-text-container">
            <img className="company-logo" src="images/logo.png" alt="logo-img" />
            <p className="logo-text1">Adtralza®</p>
            <p className="logo-text2">(tralokinumab)</p>
    
            <h5>
              Adtralza® is a new treatment for adult patients with
              moderate-to-severe atopic dermatitis (eczema) who are candidates for
              systematic therapy.
            </h5>
          </div>
        </div>
    
        <div className="col-lg-8 col-md-12 col-12 gradient-column">
          <img className="patient-image" src="images/patient.png" alt="patient-img" />
        </div>
      </div>
      </section>

    )
}


export default Overview;