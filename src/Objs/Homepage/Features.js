import * as React from "react";

class Features extends React.Component {

    filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "signup") c = "signup";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
    }

    w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
    }

    w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
    }

    render() {
        return (
            <div>

            <section id="features">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
                <div className="container">
                    <h2 className="mt-5">Explore Talent Ninja's <strong>Great Features</strong></h2>
                </div>
                </div>

                <div id="">
                <ul className="container" id="tab-wrapper">
                    <li className="btn4 active" onClick={() => this.filterSelection('signup')}><a href="#tab1"><i className="fa fa-user"></i>SIGN UP</a></li>
                    <li className="btn4" onClick={() => this.filterSelection('dashboard')}><a href="#tab2"><i className="fa fa-cogs"></i>DASHBOARD</a></li>
                    <li className="btn4" onClick={() => this.filterSelection('jobs')}><a href="#tab3"><i className="fa fa-briefcase"></i>JOBS</a></li>
                    <li className="btn4"><a href="#tab3"><i className="fa fa-id-badge"></i>CANDIDATES</a></li>
                    <li className="btn4"><a href="#tab4"><i className="fa fa-rocket"></i>BOOST</a></li>
                    <li className="btn4"><a href="#tab5"><i className="fa fa-black-tie"></i>CAREERS PAGE</a></li>
                </ul>
                </div>

                <div className="container">
                <div className="row">
                    <div className="col-md-6 signup">
                        <img src={ require("../../assets/images/features/explore_signup.png") } />
                    </div>
                    <div className="column2 col-md-6">
                        <h2 className="mb-2">Easy Sign Up and Log In</h2>
                        <p>Quickly sign up or login to Talent Ninja via LinkedIn, Facebook, <br /> Twitter, Google or email.</p>
                    </div>

                    <div className="filterDiv dashboard">
                        <div className="col-md-6">
                            <img src={ require("../../assets/images/features/explore_dashboard.png") } />
                        </div>
                        <div className="column2 col-md-6">
                            <h2 className="mb-2">Everything You Need To Manage Your Recruitment</h2>
                            <p>Our easy to use, modern dashboard allows you to view your latest applications, job performance analytics and all of the functions of Talent Ninja.</p>
                        </div>
                    </div>

                    <div className="filterDiv jobs">
                        <div className="col-md-6">
                            <img src={ require("../../assets/images/features/explore_jobs.png") } />
                        </div>
                        <div className="column2 col-md-6">
                            <h2 className="mb-2">Perfect Job Adverts</h2>
                            <p>Modern optimised job adverts which can be viewed on any device, anywhere with an easy candidate application process. All for the best possible candidate experience.</p>
                        </div>
                    </div>

                    <div className="filterDiv candidates">
                        <div className="col-md-6">
                            <img src={ require("../../assets/images/features/explore_candidates.png") } />
                        </div>
                        <div className="column2 col-md-6">
                            <h2 className="mb-2">Manage Your Applications All On One Page</h2>
                            <p>Filter, rank and shortlist all of your candidates in our user friendly candidate page.</p>
                        </div>
                    </div>

                    <div className="filterDiv boots">
                        <div className="col-md-6">
                            <img src={ require("../../assets/images/features/explore_boost.png") } />
                        </div>
                        <div className="column2 col-md-6">
                            <h2 className="mb-2">Promote Your Job To Premium Job Boards and Paid Social Media</h2>
                            <p>Easily boost your candidate applications anytime with a single click.</p>
                        </div>
                    </div>

                    <div className="filterDiv careers">
                        <div className="col-md-6">
                            <img src={ require("../../assets/images/features/explore_careers.png") } />
                        </div>
                        <div className="column2 col-md-6">
                            <h2 className="mb-2">All Of Your Open Jobs In One Place</h2>
                            <p>A smart, easy to read careers page that automatically updates with your open jobs. Candidates will always have the latest information to apply to your jobs.</p>
                        </div>
                    </div>

                </div>

                </div>
                <div className="col-md-12 text-center" id="button-feature" style={{marginTop:"40px"}} >
                    <a className="btn btn-success btn-top btn-bottom mb-5" href="#" target="_self">Post Your Jobs</a>
                </div>
            </section>

            </div>
           
        )
    }
}

export default Features;