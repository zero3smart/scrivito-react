import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class Greatfeatures extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="greadfeatures">
        <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
                <div className="container">
                    <h2 className="mt-5">Explore Talent Ninja's <strong>Great Features</strong></h2>
                </div>
            </div>

            <Nav nav-pills nav-justified id="nav-pills">
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    >
                    <span class="icon is-small"><i className="fa fa-user"></i></span>
                    <span>SIGN UP</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                    >
                    <span class="icon is-small"><i className="fa fa-cogs"></i></span>
                    <span>DASHBOARD</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                    >
                    <span class="icon is-small"><i className="fa fa-briefcase"></i></span>
                    <span>JOBS</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}
                    >
                    <span class="icon is-small"><i className="fa fa-id-badge"></i></span>
                    <span>CANDIDATES</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '5' })}
                    onClick={() => { this.toggle('5'); }}
                    >
                    <span class="icon is-small"><i className="fa fa-rocket"></i></span>
                    <span>BOOST</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '6' })}
                    onClick={() => { this.toggle('6'); }}
                    >
                    <span class="icon is-small"><i className="fa fa-black-tie"></i></span>
                    <span>CAREERS PAGE</span>
                    </NavLink>
                </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <Row>
                    <Col sm="6">
                        <img src={ require("../../assets/images/features/explore_signup.png") } />
                    </Col>
                    <Col sm="6">
                        <h2 className="mb-2 text-header">Easy Sign Up and Log In</h2>
                        <p>Quickly sign up or login to Talent Ninja via LinkedIn, Facebook, <br /> Twitter, Google or email.</p>
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                    <Col sm="6">
                        <img src={ require("../../assets/images/features/explore_dashboard.png") } />
                    </Col>
                    <Col sm="6">
                        <h2 className="mb-2 text-header">Everything You Need To Manage Your Recruitment</h2>
                        <p>Our easy to use, modern dashboard allows you to view your latest applications, job performance analytics and all of the functions of Talent Ninja.</p>
                    </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="3">
                    <Row>
                    <Col sm="6">
                        <img src={ require("../../assets/images/features/explore_jobs.png") } />
                    </Col>
                    <Col sm="6">
                        <h2 className="mb-2 text-header">Perfect Job Adverts</h2>
                        <p>Modern optimised job adverts which can be viewed on any device, anywhere with an easy candidate application process. All for the best possible candidate experience.</p>
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                    <Col sm="6">
                        <img src={ require("../../assets/images/features/explore_candidates.png") } />
                    </Col>
                    <Col sm="6">
                        <h2 className="mb-2 text-header">Manage Your Applications All On One Page</h2>
                        <p>Filter, rank and shortlist all of your candidates in our user friendly candidate page.</p>
                    </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="5">
                    <Row>
                    <Col sm="6">
                        <img src={ require("../../assets/images/features/explore_boost.png") } />
                    </Col>
                    <Col sm="6">
                        <h2 className="mb-2 text-header">Promote Your Job To Premium Job Boards and Paid Social Media</h2>
                        <p>Easily boost your candidate applications anytime with a single click.</p>
                    </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="6">
                    <Row>
                    <Col sm="6">
                        <img src={ require("../../assets/images/features/explore_careers.png") } />
                    </Col>
                    <Col sm="6">
                        <h2 className="mb-2 text-header">All Of Your Open Jobs In One Place</h2>
                        <p>A smart, easy to read careers page that automatically updates with your open jobs. Candidates will always have the latest information to apply to your jobs.</p>
                    </Col>
                    </Row>
                </TabPane>
                </TabContent>

                <div className="form-row text-center">
                    <div className="col-12">
                        <a className="btn btn-success btn-bottom mt-4 mb-4" href="https://talent-ninja.com/home/auth/signup" target="_self">Post Your Jobs</a>
                    </div>
                </div>

        </div>
      </div>
    );
  }
}