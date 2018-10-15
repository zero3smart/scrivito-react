import * as React from "react";
import * as Scrivito from "scrivito";
import Image1 from "../../assets/images/image1.png";
import Image293 from "../../assets/images/image293.png";
import Image294 from "../../assets/images/image294.png";
import Image295 from "../../assets/images/image295.png";
import Image296 from "../../assets/images/image296.png";
import Image297 from "../../assets/images/image297.png";
import Image298 from "../../assets/images/image298.png";
import Image299 from "../../assets/images/image299.png";
import Image300 from "../../assets/images/image300.png";
import Image301 from "../../assets/images/image301.png";
import Image302 from "../../assets/images/image302.png";
import Image303 from "../../assets/images/image303.png";
import Image304 from "../../assets/images/image304.png";

import Linkedin from "../../assets/images/linkedin.png";
import Glassdoor from "../../assets/images/glassdoor.png";
import Facebook from "../../assets/images/facebook.png";
import Partners from "../../assets/images/partners.gif";
import Clients from "../../assets/images/clients.gif";

import Icon20 from "../../assets/images/icons/icon20.png";
import Springboard from "../../assets/images/clients/springboard.original.png";
import Archer from "../../assets/images/clients/archer.original.png";
import Major from "../../assets/images/clients/major-drilling.original.png";
import Taxify from "../../assets/images/clients/taxify.original.png";
import Hoyt from "../../assets/images/clients/hoyt.original.png";

import Nobly from "../../assets/images/clients/nobly.original.png";
import Fish from "../../assets/images/clients/fish.original.png";
import Premier from "../../assets/images/clients/premier-oil.original.png";
import Hewlett from "../../assets/images/clients/hewlett-packard.original.png";
import Masabi from "../../assets/images/clients/masabi.original.png";

Scrivito.provideComponent("Homepage", ({ page }) => (
  <div id="header"><div id="lp-pom-block-8"></div> <br /><br />
    <Scrivito.ContentTag tag="div" content={page} attribute="body" />
    <div className="container">
      <div className="d-flex flex-column flex-md-row align-items-center" id="navbar">
      <img className="my-0 mr-md-auto" src={ require("../../assets/logo.png") } />
        <nav className="my-2 my-md-0 mr-md-3 navbar-font">
          <a className="p-2 text-dark log-in" href="#">Your Pricing</a>
          <a className="p-2 text-dark pricing" href="#">Log In</a>
        </nav>
        <a id="btn-1254" href="#" target="_self"><span>Create An Account</span></a>
      </div>
    </div>
      <Scrivito.ContentTag content={ page } attribute="header" /><br /><br />
      <div className="container" id="main">
      <div className="row hero-content pt-lg-6 pb-lg-6">
          <div className="col-md-6 col-sm-12">
            <h1 className="title mb-4 mt-5">Post Your Jobs To 300+ Job Sites In Less 
                Than 5 Minutes</h1>
            <p className="text-md-left">• &nbsp; &nbsp; Post Jobs To Local, National Niche Sites With 1 Click</p>
            <p className="text-md-left">• &nbsp; &nbsp;Attract Local Candidates</p>
            <p className="text-md-left">• &nbsp; &nbsp;Advertise Any Vacancy</p>
            <p className="text-md-left">• &nbsp; &nbsp;Our "Ninja" Engine Will Guarantee <br /> &nbsp; &nbsp; &nbsp;Premium Visibility On The Best Job Sites </p>
            <div><a className="btn btn-success" href="#" target="_self">Post Your Jobs</a></div>
          </div>
          <div className="col-md-6 col-sm-12 text-center" id="boxes1">
            <div id="boxes">
                <div id="box29">
                  <div id="color-overlay"></div>
                  <div className="image image-container" id="image1"><img src={ Image1 } /></div>
                </div>
                <div id="box-80">
                  <div id="ls-color-overlay"></div>
                  <div className="image image-container" id="image293"><img src={ Image293 } /></div>
                </div>
                <div id="box-81">
                  <div id="box81-color-overlay"></div>
                  <div className="image image-container" id="image294"><img src={ Image294 } /></div>
                </div>
                <div id="box-82">
                  <div id="box82-color-overlay"></div>
                  <div className="image image-container" id="image295"><img src={ Image295 } /></div>
                </div>
                <div id="box-83">
                  <div id="box83-color-overlay"></div>
                  <div className="image image-container" id="image296"><img src={ Image296 } /></div>
                </div>
                <div id="box-84">
                  <div id="box84-color-overlay"></div>
                  <div className="image image-container" id="image297"><img src={ Image297 } /></div>
                </div>
                <div id="box-85">
                  <div id="box85-color-overlay"></div>
                  <div className="image image-container" id="image298"><img src={ Image298 } /></div>
                </div>
                <div id="box-86">
                  <div id="box86-color-overlay"></div>
                  <div className="image image-container" id="image299"><img src={ Image299 } /></div>
                </div>
                <div id="box-87">
                  <div id="box87-color-overlay"></div>
                  <div className="image image-container" id="image300"><img src={ Image300 } /></div>
                </div>
                <div id="box-88">
                  <div id="box88-color-overlay"></div>
                  <div className="image image-container" id="image301"><img src={ Image301 } /></div>
                </div>
                <div id="box-89">
                  <div id="box89-color-overlay"></div>
                  <div className="image image-container" id="image302"><img src={ Image302 } /></div>
                </div>
                <div id="box-90">
                  <div id="box-90-color-overlay"></div>
                  <div className="image image-container" id="image303"><img src={ Image303 } /></div>
                </div>
                <div id="box-91">
                  <div id="box-91-color-overlay"></div>
                  <div className="image image-container" id="image304"><img src={ Image304 } /></div>
                </div>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
          <div className="container">
            <h2 className="pt-5 mb-2">Some of our Job Boards and Social Partners</h2>
            <div className="lp-pom-image-container mb-5"><img className="partners" src={ Partners } /></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" style={{marginTop:'20px'}} data-interval="90000">
          <div className="col-md-12">
            <div id="Carousel" className="carousel slide">
              <div className="carousel-inner">
                <div className="sp carousel-item active">
                  <ul className="container row size" id="carousel-wrapper">
                    <li><img style={{maxWidth:'100%'}} src={ Image294 } /></li>
                    <li><img src={ Linkedin } /></li>
                    <li><img src={ Glassdoor } /></li>
                    <li><img src={ Image298 } /></li>
                    <li><img src={ Facebook } /></li>
                    <li><img src={ Image300 } /></li>
                  </ul>
                </div>

                <div className="sp carousel-item">
                  <ul className="container row size" id="carousel-wrapper">
                    <li><img style={{maxWidth:'100%'}} src={ Image300 } /></li>
                    <li><img src={ Facebook } /></li>
                    <li><img src={ Image298 } /></li>
                    <li><img src={ Image294 } /></li>
                    <li><img src={ Glassdoor } /></li>
                    <li><img src={ Linkedin } /></li>
                  </ul> 
                </div>

              </div>
              
              <div id="button-previous" className="left carousel-control-prev" href="#Carousel" role="button" data-slide="prev">❬</div>
              <div id="button-next" className="right carousel-control-next" role="button" data-slide="next" href="#Carousel">❭</div>
            </div>
          </div>
        </div>
      </div>

       <section id="place">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
          <div className="container"><h2 className="super-title mt-5">Everything You Need In One Place</h2></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 py-4">
                <div className="card h-100 card2 mb-4 box-shadow text-center">
                    <div className="card-body">
                      <i><img className="mb mt" src={ require("../../assets/images/icons/icon1.png") } /></i>
                      <h5 className="card-title">Access up to 300+ Job Boards</h5>
                      <p className="card-text">Distribute your vacancy to a wide network of specialist, premium and free job boards - all with a single click</p>
                    </div>
                </div>
              </div>

              <div className="col-md-4 py-4">
                <div className="card h-100 card2 mx-auto mb-4 box-shadow text-center">
                    <div className="card-body h-200">
                    <i><img className="mb mt" src={ require("../../assets/images/icons/icon2.png") } /></i>
                    <h5 className="card-title">Recruiting Analytics</h5>
                    <p className="card-text">See what's driving your traffic. Measure key metrics to make data-driven decisions and keep your social recruiting on track.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 py-4">
                <div className="card card2 h-100 mx-auto mb-4 box-shadow text-center">
                  <div className="card-body">
                      <i><img className="mb mt" src={ require("../../assets/images/icons/icon3.png") } /></i>
                      <h5 className="card-title">Video Cover Letters</h5>
                      <p className="card-text">Candidates can apply via video, slashing your CV review time, helping you to fill <br /> 
                          jobs faster.</p>
                    </div>
                </div>
              </div>

          <div className="col-md-4 py-4">
            <div className="card card2 h-100 mx-auto mb-4 box-shadow text-center">
                <div className="card-body">
                  <i><img className="mb mt" src={ require("../../assets/images/icons/icon4.png") } /></i>
                  <h5 className="card-title">Massive Social Reach</h5>
                  <p className="card-text">Instantly connect with millions of active and passive job seekers on their favourite social networks - all with a single click.</p>
                </div>
            </div>
          </div>
          <div className="col-md-4 py-4">
            <div className="card card2 h-100 mb-4 box-shadow text-center">
              <div className="card-body">
                <i><img className="mb mt" src={ require("../../assets/images/icons/icon5.png") } /></i>
                <h5 className="card-title">Candidate Boost</h5>
                <p className="card-text">Promote your vacancies above the competition to maximise your potential of finding the best candidates.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-4">
            <div className="card card2 h-100 mb-4 box-shadow text-center">
              <div className="card-body">
                <i><img className="mb mt" src={ require("../../assets/images/icons/icon6.png") } /></i>
                <h5 className="card-title">Streamlined Candidate Experience</h5>
                <p className="card-text">Stylish, easy to read adverts with a simple application process. Instantly viewable on any device to deliver the best possible candidate experience.</p>
              </div>
            </div>
          </div>


          </div>
        </div>

        <div className="form-row text-center">
            <div className="col-12">
                <a className="btn btn-success btn-bottom mt-4" href="#" target="_self">Post Your Jobs</a>
            </div>
         </div><br />
        </section>

        <section id="level" className="bg-light">
          <div className="container text-center block-content">
            <h3 className="mt-4 mb2" style={{fontSize: '18px'}}>Talent Ninja is an all-in-one platform with a <strong>high level of automation. <br /> </strong>  We work with the best performing job networks and social sites <br /> globally, all with a <strong>focus on:</strong> 
            </h3>
          </div>
          <div className="container block-content">
            <div className="row">
              <div className="col-md-4" style={{display: 'flex'}}>
                <div className="pull-left" style={{marginRight: '1rem'}}>
                    <img id="icon785" src={ Icon20 } />
                  </div>
                  <div>
                    <p>Increasing your candidate quality by reaching every possible place to find the best.</p>
                  </div>
              </div>
              <div className="col-md-4" style={{display: 'flex'}}>
                <div className="pull-left" style={{marginRight: '1rem'}}>
                    <img id="icon785" src={ Icon20 } />
                  </div>
                  <div>
                    <p>Saving money by finding candidates directly at low cost. We believe recruitment shouldn't cost the earth.</p>
                  </div>
              </div>
              <div className="col-md-4" style={{display: 'flex'}}>
                <div className="pull-left" style={{marginRight: '1rem'}}>
                    <img id="icon785" src={ Icon20 } />
                  </div>
                  <div>
                    <p>Saving your time to find great candidates by automating as much as possible.</p>
                  </div>
              </div>
            </div>
          </div>
        </section> 

        <section id="clients">
        <div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
              <div className="container">
                <h2 className="pt-4">Our Clients</h2>
              <p className="subtitle">Great companies who trust Talent Ninja</p>
              <div><img className="clients" img className="clients" src={ Clients } /></div>
              </div>
            </div>
            
            <div className="container">
              <div className="row" style={{marginTop:'20px'}} data-interval="90000">
                  <div className="col-md-12">
                    <div id="Carousel1" className="carousel slide">
                        <div className="carousel-inner">
                          <div className="sp carousel-item active">
                            <ul className="container row size" id="carousel-wrapper">
                              <li><img style={{maxWidth:'100%'}} src={ Springboard } /></li>
                              <li><img src={ Archer } /></li>
                              <li><img src={ Major } /></li>
                              <li><img src={ Taxify } /></li>
                              <li><img src={ Hoyt } /></li>
                            </ul>
                          </div>

                          <div className="sp carousel-item">
                          <ul className="container row size" id="carousel-wrapper">
                            <li><img style={{maxWidth:'100%'}} src={ Nobly } /></li>
                            <li><img src={ Fish } /></li>
                            <li><img src={ Premier } /></li>
                            <li><img src={ Hewlett } /></li>
                            <li><img src={ Masabi } /></li>
                          </ul>
                        </div>
                      </div>

                      <div id="button-previous" className="left carousel-control-prev" href="#Carousel1" role="button" data-slide="prev">❬</div>
                      <div id="button-next" className="right carousel-control-next" role="button" data-slide="next" href="#Carousel1">❭</div>
    
                    </div>
                </div>
              </div>
          </div>
        </div> 
      </section>

       <section className="bg-light" id="TalentNinja">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
            <div className="container"><h2 className="mt-5">Talent Ninja is as easy as <strong>1, 2, 3</strong></h2></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-4">
                  <div className="card card2 mb-4 box-shadow text-center">
                      <div className="card-body h-100">
                        <i><img className="mb mt" src={ require("../../assets/images/icons/step1.png") } /></i>
                        <h6 className="small-text3 mb-1">STEP 1</h6>
                        <h5 className="card-title">Register Your Account</h5>
                        <p className="card-text mb-4">Distribute your vacancy to a wide network of specialist, premium and free job boards - all with a single click</p>
                      </div>
                  </div>
                </div>

                <div className="col-md-4 my-4">
                  <div className="card card2 mx-auto mb-4 box-shadow text-center">
                      <div className="card-body h-100">
                      <i><img className="mb mt" src={ require("../../assets/images/icons/step2.png") } /></i>
                      <h6 className="small-text3 mb-1">STEP 2</h6>
                      <h5 className="card-title">Post Your Jobs</h5>
                      <p className="card-text mb-4">See what's driving your traffic. Measure key metrics to make data-driven decisions and keep your social recruiting on track.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 my-4">
                  <div className="card card2 mx-auto mb-4 box-shadow text-center">
                    <div className="card-body h-100">
                        <i><img className="mb mt" src={ require("../../assets/images/icons/step3.png") } /></i>
                        <h6 className="small-text3 mb-1">STEP 3</h6>
                        <h5 className="card-title">Receive Great Candidates</h5>
                        <p className="card-text mb-4">Candidates can apply via video, slashing your CV review time, helping you to fill <br /> 
                            jobs faster.</p>
                      </div>
                  </div>
                </div>

            </div>
          </div>

          <div className="form-row text-center">
            <div className="col-12">
                <a className="btn btn-success btn-bottom mt-4 mb" href="#" target="_self" style={{marginBottom:'40px'}}>Post Your Jobs</a>
            </div>
          </div>
        </section>


        <section id="features">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
          <div className="container">
            <h2 className="mt-5">Explore Talent Ninja's <strong>Great Features</strong></h2>
          </div>
        </div>

        <div id="myBtnContainer">
          <ul className="container" id="tab-wrapper">
            <li className="btn4 active" onclick="filterSelection('signup')"><a href="#tab1"><i className="fa fa-user"></i>SIGN UP</a></li>
            <li className="btn4" onclick="filterSelection('dashboard')"><a href="#tab1"><i className="fa fa-cogs"></i>DASHBOARD</a></li>
            <li className="btn4" onclick="filterSelection('jobs')"><a href="#tab2"><i className="fa fa-briefcase"></i>JOBS</a></li>
            <li className="btn4" onclick="filterSelection('candidates')"><a href="#tab3"><i className="fa fa-id-badge"></i>CANDIDATES</a></li>
            <li className="btn4" onclick="filterSelection('boots')"><a href="#tab4"><i className="fa fa-rocket"></i>BOOST</a></li>
            <li className="btn4" onclick="filterSelection('careers')"><a href="#tab5"><i className="fab fa-black-tie"></i>CAREERS PAGE</a></li>
          </ul>
        </div>

        <div className="container">
          <div className="">
            <div className="column">
              <img src={ require("../../assets/images/features/explore_signup.png") } />
            </div>
            <div className="column">
              <h2 className="mb-2">Easy Sign Up and Log In</h2>
              <p>Quickly sign up or login to Talent Ninja via LinkedIn, Facebook, <br /> Twitter, Google or email.</p>
            </div>
          </div>

          </div>
          <div className="col-md-12 text-center" id="button-feature" style={{marginTop:"40px"}} >
            <a className="btn btn-success btn-top btn-bottom" href="#" target="_self">Post Your Jobs</a>
          </div>
      </section>

      <section id="pricing">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
        <h2>Pricing</h2>
        <p className="small-text3 mt-5">Billed Monthly</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow text-center">
              <div className="card-body h-100">
                  <i><img className="mb mt-4" src={ require("../../assets/images/icons/icon021.png") } /></i>
                  <p className="small-text">Basic</p>
                  <h2 className="pricing-card-title" id="basic">£50</h2>
                  <ul className="list-unstyled mt-3 mb-4">
                      <li className="text-bold">per month</li>
                  </ul>
                  <p className="mb-4">1 Job Per Month</p>
                  <button className=" mb-4" id="btn-1256">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow text-center">
              <div className="card-header" style={{background:'rgba(70,173,38,1'}}>
                  <h4 className="my-0 font-weight-normal"><small className="small-text4">Most Popular</small></h4>
              </div>
              <div className="card-body h-100">
                  <i><img className="mb-1 mt-2" style={{marginTop:'-6px'}} src={ require("../../assets/images/icons/icon022.png") } /></i>
                  <p className="small-text">Regular</p>
                  <h2 className="pricing-card-title" id="regular">£100</h2>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li className="text-bold">per month</li>
                  </ul>
                  <p className="mb-4">3 Job Per Month</p>
                  <button className="mb-4" id="btn-1258">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow text-center">
            <div className="card-body h-100">
              <i><img className="mb mt-4" src={ require("../../assets/images/icons/icon023.png") } /></i>
              <p className="small-text">Premium</p>
              <h2 className="pricing-card-title" id="premium">£300</h2>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="text-bold">per month</li>
              </ul>
              <p className="mb-4">10 Job Per Month</p>
              <button className="mb-4" id="btn-1256">Get Started</button>
            </div>
          </div>
          </div>

        </div>
      </div> <br />

    <div id="guarantee">
      <div className="container text-center block-content" id="box-142">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <i><img className="mt-4" src={ require("../../assets/images/icons/guarantee.png") } /></i>
            <div className=""><p>We guarantee a minimum of 5 candidates per job. <br /> If not, you get your money back.</p></div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-4 pb-md-4 mx-auto">
        <div className="container">
          <p className="lead-text text-center mb-5 mt-4">Features that every plan includes</p>
        </div>
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <div className="media">
                <img className="mr-3" src={ Icon20 } />
                <div className="media">
                  <h5 className="mt-0">Post To 300+ Job Boards With <br /> a Single Clic</h5>
                </div>
              </div>
              <div className="media">
                <img className="mr-3" src={ Icon20 } />
                <div className="media">
                  <h5 className="mt-0">Post To LinkedIn, <br /> Twitter and Facebook</h5>
                </div>
              </div>
              <div className="media">
                <img className="mr-3" src={ Icon20 } />
                <div className="media">
                  <h5 className="mt-0">Fully Responsive Job Adverts</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="media">
                <img className="mr-3" src={ Icon20 } />
                <div className="media">
                  <h5 className="mt-0">Premium Job Boards Boost</h5><br /><br /><br />
                </div>
              </div>
              <div className="media">
                <img className="mr-3" src={ Icon20 } />
                <div className="media">
                  <h5 className="mt-0">Social Media Boost</h5><br /><br /><br />
                </div>
              </div>
              <div className="media">
                <img className="mr-3" src={ Icon20 } />
                <div className="media">
                  <h5 className="mt-0">Performance Analytics</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="media">
                <img className="mr-3" src={ Icon20 } />
                <div className="">
                  <h5 className="mt-0">Video Cover Letters</h5><br />
                </div>
              </div>
              <div className="media">
                <img className="mr-3" src={ Icon20 } />
                <div className="">
                  <h5 className="mt-0">Multiple Job Templates</h5><br />
                </div>
              </div>
              <div className="media">
                <img className="mr-3" src={ Icon20 } />
                <div className="">
                  <h5 className="mt-0" style={{marginBottom:'40px'}}>Branded Careers Page</h5><br />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section id="testimonials" className="bg-light">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
        <div className="container">
          <h2 className="mt-4">Testimonials</h2>
          <p className="lead-text">Don’t take our word for it. Hundreds of customers love Talent Ninja.</p>
        </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-4">
              <div className="card card2 box-shadow text-center">
                <div className="card-body h-100">
                  <i><img className="mb mt" src={ require("../../assets/images/icons/testimonial1.png") } /></i>
                  <h5 className="card-title">Julian Schulz</h5>
                  <h6 className="card-title">COO at BlueOptima</h6>
                  <p className="card-text" style={{marginBottom:'36px'}}>“Very quick to setup 
                      - Excellent value for money and a big time saver if you want to get the word out on multiple job boards 
                      - Good variety of candidates compared to using one single job board"</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4 my-4">
              <div className="card card2 box-shadow text-center">
                <div className="card-body h-100">
                  <i><img className="mb mt" src={ require("../../assets/images/icons/testimonial2.png") } /></i>
                  <h5 className="card-title">Rebecca Rhew's</h5>
                  <h6 className="card-title">Talent Acquisition at Goodwall</h6>
                  <p className="card-text" style={{marginBottom:'15px'}}>“Easy to use, good website layout, wide range of candidates, and excellent customer service. It only took a few minutes to get my job posted, and I appreciate the broad reach of the posting. Posting analytics are very user friendly.”</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4 my-4">
              <div className="card card2 box-shadow text-center">
                <div className="card-body h-100">
                  <i><img className="mb mt" src={ require("../../assets/images/icons/testimonial3.png") } /></i>
                  <h5 className="card-title">Heidi Raymond</h5>
                  <h6 className="card-title">Human Resources Recruiter at <br/> Manatee County Government</h6>
                  <p className="card-text">
                      Heidi Raymond
                      
                      “I love how easy it is to use. It only takes a few minutes for us to advertise a job and then candidates start to come through. They have great support if we need help with anything like tweaking our adverts for better candidates.”</p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
  
        <div className="form-row text-center">
          <div className="col-12">
            <a className="btn btn-success mt-2 mb-4" href="#" target="_self">Post Your Jobs</a>
          </div>
        </div>

    </section>



      <div id="main">
      </div>

      <div id="Footer">
      </div>
  </div>
));