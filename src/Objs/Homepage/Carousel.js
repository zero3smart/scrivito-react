import React, { Component } from 'react';
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
import Slider from 'react-slick';

class Carousel  extends Component {
    render() {
        const PrevArrow = ({ onClick }) => (
            <div id="button-previous" onClick={onClick} className="slick-prev carousel-control-prev" href="#Carousel1" role="button" data-slide="prev">❬</div>
        );

        const NextArrow = ({ onClick }) => (
            <div id="button-next" onClick={onClick} className="slick-next carousel-control-next" role="button" data-slide="next" href="#Carousel1">❭</div>
        );

        const settings = {
            // centerMode: true,
            // centerPadding: '59px',
            slidesToShow: 5,
            speed: 1000,
            // autoplaySpeed: 2000,
            infinite: true,
            // autoplay: true,
            slidesToScroll: 5,
            variableWidth: true,
            // focusOnSelect: true,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />
        };

        return (
            <div className="Carousel">
                <section id="clients">
                    <div>
                        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
                            <div className="container">
                                <h2 className="pt-4">Our Clients</h2>
                                <p className="subtitle">Great companies who trust Talent Ninja</p>
                                <div></div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row" style={{marginTop:'20px'}} data-interval="90000">
                                <div className="col-md-12">
                                    {/*<div id="Carousel1" className="carousel slide">*/}
                                    <Slider {...settings}>
                                        <div className="carousel-item clients">
                                            <img src={ Springboard } />
                                        </div>
                                        <div className="carousel-item clients">
                                            <img src={ Archer } />
                                        </div>
                                        <div className="carousel-item clients">
                                            <img src={ Major } />
                                        </div>
                                        <div className="carousel-item clients">
                                            <img src={ Taxify } />
                                        </div>
                                        <div className="carousel-item clients">
                                            <img src={ Hoyt } />
                                        </div>

                                        <div className="carousel-item clients">
                                            <img src={ Nobly } />
                                        </div>
                                        <div className="carousel-item clients">
                                            <img src={ Fish } />
                                        </div>
                                        <div className="carousel-item clients">
                                            <img src={ Premier } />
                                        </div>
                                        <div className="carousel-item clients">
                                            <img src={ Hewlett } />
                                        </div>
                                        <div className="carousel-item clients">
                                            <img src={ Masabi } />
                                        </div>
                                        {/*<div className="carousel-inner">*/}
                                            {/*<div className="sp carousel-item active">*/}
                                                {/*<ul className="container row size" id="carousel-wrapper">*/}
                                                    {/*<li><img style={{maxWidth:'100%'}} src={ Springboard } /></li>*/}
                                                    {/*<li><img src={ Archer } /></li>*/}
                                                    {/*<li><img src={ Major } /></li>*/}
                                                    {/*<li><img src={ Taxify } /></li>*/}
                                                    {/*<li><img src={ Hoyt } /></li>*/}
                                                {/*</ul>*/}
                                            {/*</div>*/}
                                            {/**/}
                                            {/*<div className="sp carousel-item">*/}
                                                {/*<ul className="container row size" id="carousel-wrapper">*/}
                                                    {/*<li><img style={{maxWidth:'100%'}} src={ Nobly } /></li>*/}
                                                    {/*<li><img src={ Fish } /></li>*/}
                                                    {/*<li><img src={ Premier } /></li>*/}
                                                    {/*<li><img src={ Hewlett } /></li>*/}
                                                    {/*<li><img src={ Masabi } /></li>*/}
                                                {/*</ul>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div id="button-previous" className="left carousel-control-prev" href="#Carousel1" role="button" data-slide="prev">❬</div>*/}
                                        {/*<div id="button-next" className="right carousel-control-next" role="button" data-slide="next" href="#Carousel1">❭</div>*/}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Carousel;
