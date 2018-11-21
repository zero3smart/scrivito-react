import * as React from "react";
import * as Scrivito from "scrivito";
import Footer from "./Footer";
import Greatfeatures from "./Greatfeatures";
import Carousel from "./Carousel";
import Example from "./Example";

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

import Question from "../../assets/images/icons/question.png";

import Testimonial1 from "../../assets/images/icons/testimonial1.png";
import Testimonial2 from "../../assets/images/icons/testimonial2.png";
import Testimonial3 from "../../assets/images/icons/testimonial3.png";

import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';


Scrivito.provideComponent("Homepage", ({ page }) => {
    const PrevArrow = ({ onClick }) => (
        <div id="button-previous" onClick={onClick} className="slick-prev" href="#Carousel" role="button" data-slide="prev">
            ❬
        </div>
    );
    
    const NextArrow = ({ onClick }) => (
        <div id="button-next" onClick={onClick} className="slick-next" role="button" data-slide="next" href="#Carousel">
            ❭
        </div>
    );
    
    const settings = {
        // centerMode: true,
        // centerPadding: '59px',
        slidesToShow: 6,
        speed: 300,
        // autoplaySpeed: 2000,
        infinite: true,
        // autoplay: true,
        slidesToScroll: 6,
        variableWidth: true,
        // focusOnSelect: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    speed: 300,
                    infinite: true,
                    slidesToScroll: 2,
                    variableWidth: true,
                    prevArrow: <PrevArrow />,
                    nextArrow: <NextArrow />
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    speed: 300,
                    infinite: true,
                    slidesToScroll: 1,
                    variableWidth: true,
                    prevArrow: <PrevArrow />,
                    nextArrow: <NextArrow />
                }
            }
        ]
    };
    
    return (
        <div id="header">
            <div id="lp-pom-block-8"></div>
            <br/><br/>
            <Scrivito.ContentTag tag="div" content={page} attribute="body"/>
            <div className="container">
                <div className="d-flex flex-column flex-md-row align-items-center" id="navbar">
                    <img className="my-0 mr-md-auto" src={require("../../assets/logo.png")}/>
                    <nav className="my-2 my-md-0 mr-md-3 navbar-font">
                        <a className="p-4 text-dark log-in" href="#">Your Pricing</a>
                        <a className="mt-4 text-dark pricing" href="https://talent-ninja.com/home/auth/login">Log In</a>
                    </nav>
                    <a id="btn-1254" href="https://talent-ninja.com/home/auth/signup" target="_self"><span>Create An Account</span></a>
                </div>
            </div>
            <div className="container mb-4" id="first-line">
                <hr/>
            </div>
            <Scrivito.ContentTag content={page} id="header"/><br/><br/><br/>
            <div className="container" id="main">
                <div className="row hero-content pt-lg-6 pb-lg-6">
                    <div className="col-md-6 col-sm-12"><br/>
                        <h1 className="title mb-4 mt-5">Post Your Jobs To 300+ Job Sites In Less
                            Than 5 Minutes</h1>
                        <p className="text-md-left">• &nbsp; &nbsp; Post Jobs To Local, National Niche Sites With 1
                            Click</p>
                        <p className="text-md-left">• &nbsp; &nbsp;Attract Local Candidates</p>
                        <p className="text-md-left">• &nbsp; &nbsp;Advertise Any Vacancy</p>
                        <p className="text-md-left">• &nbsp; &nbsp;Our "Ninja" Engine Will Guarantee
                            <br/> &nbsp; &nbsp; &nbsp;Premium Visibility On The Best Job Sites </p>
                        <div><a className="btn btn-success" style={{marginTop: '10px', marginBottom: '40px'}} href="https://talent-ninja.com/home/auth/signup"
                                target="_self">Post Your Jobs</a></div>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center" id="boxes1">
                        <div id="boxes">
                            <div id="box29">
                                <div id="color-overlay"></div>
                                <div className="image image-container" id="image1"><img src={Image1}/></div>
                            </div>
                            <div id="box-80">
                                <div id="ls-color-overlay"></div>
                                <div className="image image-container" id="image293"><img src={Image293}/></div>
                            </div>
                            <div id="box-81">
                                <div id="box81-color-overlay"></div>
                                <div className="image image-container" id="image294"><img src={Image294}/></div>
                            </div>
                            <div id="box-82">
                                <div id="box82-color-overlay"></div>
                                <div className="image image-container" id="image295"><img src={Image295}/></div>
                            </div>
                            <div id="box-83">
                                <div id="box83-color-overlay"></div>
                                <div className="image image-container" id="image296"><img src={Image296}/></div>
                            </div>
                            <div id="box-84">
                                <div id="box84-color-overlay"></div>
                                <div className="image image-container" id="image297"><img src={Image297}/></div>
                            </div>
                            <div id="box-85">
                                <div id="box85-color-overlay"></div>
                                <div className="image image-container" id="image298"><img src={Image298}/></div>
                            </div>
                            <div id="box-86">
                                <div id="box86-color-overlay"></div>
                                <div className="image image-container" id="image299"><img src={Image299}/></div>
                            </div>
                            <div id="box-87">
                                <div id="box87-color-overlay"></div>
                                <div className="image image-container" id="image300"><img src={Image300}/></div>
                            </div>
                            <div id="box-88">
                                <div id="box88-color-overlay"></div>
                                <div className="image image-container" id="image301"><img src={Image301}/></div>
                            </div>
                            <div id="box-89">
                                <div id="box89-color-overlay"></div>
                                <div className="image image-container" id="image302"><img src={Image302}/></div>
                            </div>
                            <div id="box-90">
                                <div id="box-90-color-overlay"></div>
                                <div className="image image-container" id="image303"><img src={Image303}/></div>
                            </div>
                            <div id="box-91">
                                <div id="box-91-color-overlay"></div>
                                <div className="image image-container" id="image304"><img src={Image304}/></div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            
            <div className="block" id="block-27">
                <div>
                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
                        <div className="container">
                            <h2 className="pt-5 mb-2">Some of our Job Boards and Social Partners</h2>
                            <div className="lp-pom-image-container mb-5"><img className="partners" src={Partners}/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container" style={{height: '80px'}}>
                    <div className="row" style={{marginTop: '20px'}}>
                        <div className="col-md-12">
                            {/*<div id="Carousel" className="carousel slide">*/}
                            <Slider {...settings}>
                                <div className="carousel-item">
                                    <img src={Image294}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Linkedin}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Glassdoor}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Image298}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Facebook}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Image300}/>
                                </div>
    
                                <div className="carousel-item">
                                    <img src={Image300}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Facebook}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Image298}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Image294}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Glassdoor}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={Linkedin}/>
                                </div>
                                
                                
                                {/*<div className="carousel-inner">*/}
                                    {/*<div className="sp carousel-item active">*/}
                                        {/*<ul className="container row size" id="carousel-wrapper">*/}
                                            {/*<li><img style={{maxWidth: '100%'}} src={Image294}/></li>*/}
                                            {/*<li><img src={Linkedin}/></li>*/}
                                            {/*<li><img src={Glassdoor}/></li>*/}
                                            {/*<li><img src={Image298}/></li>*/}
                                            {/*<li><img src={Facebook}/></li>*/}
                                            {/*<li><img src={Image300}/></li>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                    {/**/}
                                    {/*<div className="sp carousel-item">*/}
                                        {/*<ul className="container row size" id="carousel-wrapper">*/}
                                            {/*<li><img style={{maxWidth: '100%'}} src={Image300}/></li>*/}
                                            {/*<li><img src={Facebook}/></li>*/}
                                            {/*<li><img src={Image298}/></li>*/}
                                            {/*<li><img src={Image294}/></li>*/}
                                            {/*<li><img src={Glassdoor}/></li>*/}
                                            {/*<li><img src={Linkedin}/></li>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                
                                {/*</div>*/}
                                
                                {/*<div id="button-previous" className="left carousel-control-prev" href="#Carousel"*/}
                                     {/*role="button" data-slide="prev">❬*/}
                                {/*</div>*/}
                                {/*<div id="button-next" className="right carousel-control-next" role="button"*/}
                                     {/*data-slide="next" href="#Carousel">❭*/}
                                {/*</div>*/}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <hr/>
            </div>
            
            <section id="place">
                <div className="pricing-header px-3 py-3 pt-md-5 mx-auto text-center text-28">
                    <div className="container"><h2 className="super-title">Everything You Need In One Place</h2></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 py-2">
                            <div className="card h-100 card2 mb-4 box-shadow text-center">
                                <div className="card-body">
                                    <i><img className="mb mt" src={require("../../assets/images/icons/icon1.png")}/></i>
                                    <h5 className="card-title">Access up to 300+ Job Boards</h5>
                                    <p className="card-text">Distribute your vacancy to a wide network of specialist,
                                        premium and free job boards - all with a single click</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 py-2">
                            <div className="card h-100 card2 mx-auto mb-4 box-shadow text-center">
                                <div className="card-body h-200">
                                    <i><img className="mb mt" src={require("../../assets/images/icons/icon2.png")}/></i>
                                    <h5 className="card-title">Recruiting Analytics</h5>
                                    <p className="card-text">See what's driving your traffic. Measure key metrics to
                                        make data-driven decisions and keep your social recruiting on track.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 py-2">
                            <div className="card card2 h-100 mx-auto mb-4 box-shadow text-center">
                                <div className="card-body">
                                    <i><img className="mb mt" src={require("../../assets/images/icons/icon3.png")}/></i>
                                    <h5 className="card-title">Video Cover Letters</h5>
                                    <p className="card-text">Candidates can apply via video, slashing your CV review
                                        time, helping you to fill jobs faster.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 py-2">
                            <div className="card card2 h-100 mx-auto mb-4 box-shadow text-center">
                                <div className="card-body">
                                    <i><img className="mb mt" src={require("../../assets/images/icons/icon4.png")}/></i>
                                    <h5 className="card-title">Massive Social Reach</h5>
                                    <p className="card-text">Instantly connect with millions of active and passive job
                                        seekers on their favourite social networks - all with a single click.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2">
                            <div className="card card2 h-100 mb-4 box-shadow text-center">
                                <div className="card-body">
                                    <i><img className="mb mt" src={require("../../assets/images/icons/icon5.png")}/></i>
                                    <h5 className="card-title">Candidate Boost</h5>
                                    <p className="card-text">Promote your vacancies above the competition to maximise
                                        your potential of finding the best candidates.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 py-2">
                            <div className="card card2 h-100 mb-4 box-shadow text-center">
                                <div className="card-body">
                                    <i><img className="mb mt" src={require("../../assets/images/icons/icon6.png")}/></i>
                                    <h5 className="card-title">Streamlined Candidate Experience</h5>
                                    <p className="card-text">Stylish, easy to read adverts with a simple application
                                        process. Instantly viewable on any device to deliver the best possible candidate
                                        experience.</p>
                                </div>
                            </div>
                        </div>
                    
                    
                    </div>
                </div>
                
                <div className="form-row text-center">
                    <div className="col-12">
                        <a className="btn btn-success btn-bottom mt-4 mb-4" href="#" target="_self">Post Your Jobs</a>
                    </div>
                </div>
                <br/>
            </section>
            
            <section id="level" className="bg-light">
                <div className="container text-center block-content">
                    <h3 className="mt-4 mb2">Talent Ninja is an all-in-one platform with a <strong>high level of
                        automation. <br/> </strong> We work with the best performing job networks and social sites <br/>
                        globally, all with a <strong>focus on:</strong>
                    </h3>
                </div>
                <div className="container block-content">
                    <div className="row">
                        <div className="col-md-4" style={{display: 'flex'}}>
                            <div className="pull-left" style={{marginRight: '1rem'}}>
                                <img id="icon785" src={Icon20}/>
                            </div>
                            <div>
                                <p>Increasing your candidate quality by reaching every possible place to find the
                                    best.</p>
                            </div>
                        </div>
                        <div className="col-md-4" style={{display: 'flex'}}>
                            <div className="pull-left" style={{marginRight: '1rem'}}>
                                <img id="icon785" src={Icon20}/>
                            </div>
                            <div>
                                <p>Saving money by finding candidates directly at low cost. We believe recruitment
                                    shouldn't cost the earth.</p>
                            </div>
                        </div>
                        <div className="col-md-4" style={{display: 'flex'}}>
                            <div className="pull-left" style={{marginRight: '1rem'}}>
                                <img id="icon785" src={Icon20}/>
                            </div>
                            <div>
                                <p>Saving your time to find great candidates by automating as much as possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Carousel/>
            
            <section className="bg-light" id="TalentNinja">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
                    <div className="container"><h2>Talent Ninja is as easy as <strong
                        style={{fontFamily: 'Proxima Nova Bold'}}>1, 2, 3</strong></h2></div>
                </div>
                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card card2 mb-4 box-shadow">
                            <div className="card-body">
                                <i><img className="mb mt" src={require("../../assets/images/icons/step1.png")}/></i>
                                <h5 className="small-text3 mb-1">STEP 1</h5>
                                <h5 className="card-title">Register Your Account</h5>
                                <p className="card-text">Fill out our step-by-step process to register an account. The
                                    whole process takes less than 3 minutes. </p>
                            </div>
                        </div>
                        
                        <div className="card card2 mb-4 box-shadow">
                            <div className="card-body">
                                <i><img className="mb mt" src={require("../../assets/images/icons/step2.png")}/></i>
                                <h5 className="small-text3 mb-1">STEP 2</h5>
                                <h5 className="card-title">Post Your Jobs</h5>
                                <p className="card-text">With a single click, our powerful technology sends your job to
                                    300+ job sites and social media channels across the web.</p>
                            </div>
                        </div>
                        
                        <div className="card card2 mb-4 box-shadow">
                            <div className="card-body">
                                <i><img className="mb mt" src={require("../../assets/images/icons/step3.png")}/></i>
                                <h5 className="small-text3 mb-1">STEP 3</h5>
                                <h5 className="card-title">Receive Great Candidates</h5>
                                <p className="card-text">As candidates apply, their CV will be emailed to you and will
                                    appear on your Candidate Dashboard.</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
                
                <div className="form-row text-center">
                    <div className="col-12">
                        <a className="btn btn-success btn-bottom mt-4 mb" href="#" target="_self"
                           style={{marginBottom: '40px'}}>Post Your Jobs</a>
                    </div>
                </div>
            </section>
            
            <Greatfeatures/>
            
            
            <div className="container">
                <hr/>
            </div>
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
                                    <i><img className="mb mt-4" src={require("../../assets/images/icons/icon021.png")}/></i>
                                    <p className="small-text">Basic</p>
                                    <h2 className="pricing-card-title" id="basic">£50 </h2>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li className="text-bold">per month</li>
                                    </ul>
                                    <p className="mb-4">1 Job Per Month</p>
                                    <button className="btn mb-4" style={{padding: '0'}} id="btn-1256">Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow text-center">
                                <div className="card-header" style={{background: 'rgba(70,173,38,1'}}>
                                    <h4 className="my-0 font-weight-normal">
                                        <small className="small-text4">Most Popular</small>
                                    </h4>
                                </div>
                                <div className="card-body h-100">
                                    <i><img className="" style={{marginTop: '-8px'}}
                                            src={require("../../assets/images/icons/icon022.png")}/></i>
                                    <p className="small-text">Regular</p>
                                    <h2 className="pricing-card-title" id="regular">£100</h2>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li className="text-bold">per month</li>
                                    </ul>
                                    <p className="mb-4">3 Jobs Per Month</p>
                                    <button className="btn mb-4" style={{padding: '0'}} id="btn-1258">Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow text-center">
                                <div className="card-body h-100">
                                    <i><img className="mb mt-4" src={require("../../assets/images/icons/icon023.png")}/></i>
                                    <p className="small-text">Premium</p>
                                    <h2 className="pricing-card-title" id="premium">£300</h2>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li className="text-bold">per month</li>
                                    </ul>
                                    <p className="mb-4">10 Jobs Per Month</p>
                                    <button className="btn mb-4" style={{padding: '0'}} id="btn-1256" href="#"
                                            target="_self">Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <br/>
                
                <div id="guarantee">
                    <div className="container text-center block-content" id="box-142">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <i><img className="mt-4" src={require("../../assets/images/icons/guarantee.png")}/></i>
                                <div className=""><p>We guarantee a minimum of 5 candidates per job. <br/> If not, you
                                    get your money back.</p></div>
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
                                    <img className="mr-3" src={Icon20}/>
                                    <div className="">
                                        <h5 className="mt-0">Post To 300+ Job Boards With <br/> a Single Clic</h5>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="mr-3" src={Icon20}/>
                                    <div className="">
                                        <h5 className="mt-0">Post To LinkedIn, <br/> Twitter and Facebook</h5>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="mr-3" src={Icon20}/>
                                    <div className="">
                                        <h5 className="mt-0">Fully Responsive Job Adverts</h5>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="media">
                                    <img className="mr-3" src={Icon20}/>
                                    <div className="">
                                        <h5 className="mt-0">Premium Job Boards Boost</h5><br/>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="mr-3" src={Icon20}/>
                                    <div className="">
                                        <h5 className="mt-0">Social Media Boost</h5><br/>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="mr-3" src={Icon20}/>
                                    <div className="">
                                        <h5 className="mt-0">Performance Analytics</h5><br/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="media">
                                    <img className="mr-3" src={Icon20}/>
                                    <div className="">
                                        <h5 className="mt-0">Video Cover Letters</h5><br/>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="mr-3" src={Icon20}/>
                                    <div className="">
                                        <h5 className="mt-0">Multiple Job Templates</h5><br/>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="mr-3" src={Icon20}/>
                                    <div className="">
                                        <h5 className="mt-0" style={{marginBottom: '40px'}}>Branded Careers Page</h5>
                                        <br/>
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
                        <p className="lead-text">Don’t take our word for it. Hundreds of customers love Talent
                            Ninja.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card card2 box-shadow">
                            <div className="card-body">
                                <i><img className="mb mt" src={Testimonial1}/></i>
                                <h5 className="card-title" style={{fontSize: '22px', marginBottom: '0'}}>Julian
                                    Schulz</h5>
                                <h6 className="card-title" style={{color: 'rgb(70, 173, 38)'}}>COO at BlueOptima</h6>
                                <p className="card-text">“Very quick to setup<br/>
                                    - Excellent value for money and a big time saver if you want to get the word out on
                                    multiple job boards<br/>
                                    - Good variety of candidates compared to using one single job board"</p>
                            </div>
                        </div>
                        
                        <div className="card card2 box-shadow">
                            <div className="card-body">
                                <i><img className="mb mt" src={Testimonial2}/></i>
                                <h5 className="card-title" style={{fontSize: '22px', marginBottom: '0'}}>Rebecca
                                    Rhew's</h5>
                                <h6 className="card-title" style={{color: 'rgb(70, 173, 38)'}}>Talent Acquisition at
                                    Goodwall</h6>
                                <p className="card-text">“Easy to use, good website layout, wide range of candidates,
                                    and excellent customer service. It only took a few minutes to get my job posted, and
                                    I appreciate the broad reach of
                                    the posting. Posting analytics are very user friendly.”</p>
                            </div>
                        </div>
                        
                        <div className="card card2 box-shadow">
                            <div className="card-body">
                                <i><img className="mb mt" src={Testimonial3}/></i>
                                <h5 className="card-title" style={{fontSize: '22px', marginBottom: '0'}}>Heidi
                                    Raymond</h5>
                                <h6 className="card-title" style={{color: 'rgb(70, 173, 38)', lineHeight: '18px'}}>Human
                                    Resources Recruiter at Manatee County Government</h6>
                                <p className="card-text">“I love how easy it is to use. It only takes a few minutes for
                                    us to advertise a job and then candidates start to come through. They have great
                                    support if we need help with anything
                                    like tweaking our adverts for better candidates.”</p>
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
            
            <section id="faqs" className="faqs">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
                    <h2 className="mt-4 mb-4" style={{fontWeight: 'bold'}}>FAQ</h2>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="media md546">
                                <img className="mr-3" src={Question}/>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1" style={{lineHeight: '31px'}}>Where are my jobs
                                        advertised?</h5>
                                    <p>We work with over 300 premium, niche and organic job boards. Depending upon your
                                        requirements, location and job type, our engine will ensure you are visible on
                                        the best suited job boards for a great candidate response. This usually means a
                                        combination of local, industry specific and national job boards.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="box-210-overlay">
                                <div className="media md546">
                                    <img className="mr-3" src={Question}/>
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1" style={{lineHeight: '31px'}}>How does it work?</h5>
                                        <p>Talent Ninja is a job distribution service. We have built an engine that
                                            effectively makes job boards compete for your jobs so you can get great job
                                            visibility whilst keeping the cost down.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="media md546">
                                <img className="mr-3" src={Question}/>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1" style={{lineHeight: '31px'}}>Can I have a free trial?</h5>
                                    <p>Unfortunately not. We need to guarantee your job is advertised in the best places
                                        and this can’t be done for free.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="box-210-overlay">
                                <div className="media md546">
                                    <img className="mr-3" src={Question}/>
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1" style={{lineHeight: '31px'}}>How long does it take to
                                            start getting candidates?</h5>
                                        <p>Typically candidates will start to arrive in 24 hours. This can vary
                                            depending upon your requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="media md546">
                                <img className="mr-3" src={Question}/>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1" style={{lineHeight: '31px'}}>How can I get in touch with
                                        Talent Ninja if I have any questions?</h5>
                                    <p>We have live chat, email support and are available via the phone if you need
                                        anything or just want to say hi!</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="box-210-overlay">
                                <div className="media md546">
                                    <img className="mr-3" src={Question}/>
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1" style={{lineHeight: '31px'}}>Will I need training to
                                            use the software?</h5>
                                        <p>No, not at all. We will guide you through everything and if you’re stuck,
                                            just let us know via live chat, email or phone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            
            </section>
            <br/>
            <Example/>
            <Footer/>
        
        </div>
    );
});