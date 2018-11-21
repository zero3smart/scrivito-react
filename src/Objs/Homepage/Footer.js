import * as React from "react";
import Privacy from "./Privacy";

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
            <div className="container"><hr /></div>
            <footer className="center-on-small-only pt-4 mb-4 my-md-5 pt-md-5">
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <img className="mb-4 logo-footer" src={ require("../../assets/logo-footer.png") } />
                </div>
                <div className="col-md-2">
                    <h5 className="mb-2">Links</h5>
                    <ul className="list-unstyled text-small">
                    <li><a href="#pricing">Pricing</a></li>
                    <li><Privacy/></li>
                    </ul>
                </div>

                <div className="col-md-2 mx-auto">
                    <h5 className="mb-2">Company</h5>
                    <ul className="list-unstyled text-small">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="col-md-4 mx-auto">
                    <h5 className="mb-2">Get in Touch</h5>
                    <ul className="list-unstyled text-small">
                    <li><a href="#" className="font-bold" style={{fontFamily:"Proxima Nova Bold", color:'rgba(140, 142, 157)'}}>Reach out and ask us anything you like!</a></li>
                    <li><a id="green-text" style={{fontFamily:"Proxima Nova Bold"}} href="#">hello@talent-ninja.com</a></li>
                    <li className="center-block">
                        <a href="#"><img className="mr-3" src={ require("../../assets/facebook.png") } /></a>
                        <a href="#"><img className="mr-3" src={ require("../../assets/twitter.png") } /></a>
                        <a href="#"><img className="mr-3" src={ require("../../assets/linkedin.png") } /></a>
                    </li>
                    </ul>
                </div>

                </div>
                </div>
            </footer>

            </div>
           
        )
    }
}

export default Footer;