import * as React from "react";
import * as Scrivito from "scrivito";

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <div id="lp-pom-block-8"></div>
                <br/><br/>
                <div className="container">
                    <div className="d-flex flex-column flex-md-row align-items-center" id="navbar">
                        <img className="my-0 mr-md-auto" src={require("../../assets/logo.png")}/>
                        <nav className="my-2 my-md-0 mr-md-3 navbar-font">
                            <a className="p-4 text-dark log-in" id="your-pricing" href="#pricing">Your Pricing</a>
                            <a className="mt-4 text-dark pricing" href="https://talent-ninja.com/home/auth/login">Log In</a>
                        </nav>
                        <a id="btn-1254" href="https://talent-ninja.com/home/auth/signup" target="_self"><span>Create An Account</span></a>
                    </div>
                </div>
                <div className="container mb-4" id="first-line">
                    <hr/>
                </div>
                {/* <Scrivito.ContentTag content={page} attribute="showAsLandingPage"/> */}
                <br/><br/><br/>
            </div>
        );
    }
}

export default Scrivito.connect(HeaderComponent);