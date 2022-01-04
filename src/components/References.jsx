import React from "react";

function References() {


function displayReferences() {
  console.log("Hejsa!");
  var links = document.getElementById("referencePages");
  var symbol = document.getElementById("referenceSymbol");
  if (links.style.display === "none") {
    links.style.display = "block";
    symbol.className = "fas fa-angle-down";
  } else {
    links.style.display = "none";
    symbol.className = "fas fa-angle-up";
  }

}




    return (
<section className="references">
  <div className="row justify-content-center">
    <div className="col-lg-5 col-md-5 col-5">
      <button className="references-button" onClick={displayReferences}>
        <i id="referenceSymbol" className="fas fa-angle-down"></i>
      </button>
      <p className="references-paragraph">References</p>

      <div id="referencePages">
        <a href="https://www.google.com/" className="reference-links">Google.dk</a>
        <a href="https://www.google.com/" className="reference-links">Google.dk</a>
        <a href="https://www.google.com/" className="reference-links">Google.dk</a>
      </div>
    </div>

    <div className="col-lg-5 col-md-5 col-5"></div>
  </div>
</section>
    )
}

export default References;