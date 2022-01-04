import React from "react";

function Header() {
return (

    <div className="row">
      <div className="col-lg-6 col-md-12 col-12">
        <div className="container-top">
          <div className="headerElement-margin">
            <p className="logo-p1">DERMA </p>
            <p className="logo-p2">World</p>
          </div>
          <div className="headerElement-margin">
            <p className="logo-p3">By </p>
            <p className="logo-p4">LEO Pharma</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-12">
        <div className="container-top">
          <input
            className="rounded-corners"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit" className="search-button">
            <i className="fa fa-search fa-1x"></i>
          </button>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-12">



        <nav>
          <div className='MultiLevelMenu depth-1'>
              <ul className='menu'>
                  <li className='MultiItem'>
                      <a className="MultiLink" href='#'>Adtralza</a>

                      <div className='MultiLevelMenu depth-2'>
                        <ul className='menu'>
                       
                            <li className='MultiItem'>
                                <a className="MultiLink" href='#overview'>Overview</a>
                        
                            </li>
                            <li className='MultiItem'>
                              <a className="MultiLink" href='#modeOfAction'>Mode of Action</a>
                            </li>
                            <li className='MultiItem'>
                              <a className="MultiLink" href='#efficacy'>Efficacy</a>
                            </li>
                            <li className='MultiItem'>
                              <a className="MultiLink" href='#qualityOfLife'>Quality of life</a>
                            </li>
                            <li className='MultiItem'>
                              <a className="MultiLink" href='#safety'>Safety</a>
                            </li>
                            <li className='MultiItem'>
                              <a className="MultiLink" href='#news'>News</a>
                            </li>
                              
                        </ul>
                    </div>
                  </li>
                  <li className='MultiItem'>
                      <a className="MultiLink" href='#'>Diavonex</a>

                  </li>
                  <li className='MultiItem'>
                      <a className="MultiLink" href='#'>Diavobet</a>
                  </li>
                  <li className='MultiItem'>
                      <a className="MultiLink" href='#'>Enstilar</a>
                  </li>
                  <li className='MultiItem'>
                      <a className="MultiLink" href='#'>Fucidin</a>
                  </li>
          
              </ul>
          </div>
      </nav>


      </div>
    </div>
)
}

export default Header;