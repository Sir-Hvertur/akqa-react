import React from "react";

function Footer() {
    return(
<section class="footer">

<div class="row justify-content-center">
  <div class="col-lg-3">
    <i class="fas fa-ambulance fa-4x copyright-text footer-icon"></i>
  
  </div>
  <div class="col-lg-4">
   <ul class="footer-list">

    <li>
      <a href="#">Contact</a>
    </li>
    <li>
      <a href="#">Imprint</a>
    </li>
    <li>
      <a href="#">Conditions</a>
    </li>
    <li>
      <a href="#">Terms of use</a>
      </li>
    <li>
      <a href="#">Privacy</a>
    </li>
    <li>
      <a href="#">Cookie content</a>
    </li>
   </ul>
  </div>
  <div class="col-lg-3">
    <p class="copyright-text">© Copyright LEO Pharma 2020</p>
    <p class="copyright-text">LEO and the LEO Lion Design</p>
    <p class="copyright-text">are registered trademarks</p>
    <p class="copyright-text">of LEO Pharma</p>
    <p class="copyright-text">All rights reserved</p>
    <br/>
    <a href="#" class="footer-link"> LEO Pharma coperate website</a>
  </div>
</div>

</section>
    )
}

export default Footer;