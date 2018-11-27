import * as React from "react";
import Switch from '@material-ui/core/Switch';
import Icon20 from "../../assets/images/icons/icon20.png";
import axios from 'axios';

class Pricing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: false
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.checked
        }, () => {
            this.fetchPlans(this.state.plans);
        });
    };

    fetchPlans = planType => {
        axios.get("https://api.talent-ninja.com/plans").then(res => {
            let plans = res.data;
            // responsed plans from backend contains both monthly and annually plans, hence it is good practices to classify them into 2 difference arrays
            let monthlyPlans = plans.filter(plan => plan.interval === 'monthly');
            let annuallyPlans = plans.filter(plan => plan.interval === 'annually');

            // After classifying, binding back to HTML element
            // There are some fields need to be binded:
            // - currencySymbol: our system supports difference currencies, we detect currency based on their IP address on backend, therefore currencySymbol needs to be used from responsed data
            // - pricing: difference currency has difference pricing
            // - jobCredit: the number of posted jobs customer will be able to use once they subscribe

            let pricingCardTitles = document.getElementsByClassName('pricing-card-title');
            // pricingCardTitles expects to have the same length as classified plans above
            for (let i = 0; i < pricingCardTitles.length; ++i) {
                // update its corresponding HTML
                if (planType == false)
                    pricingCardTitles[i].innerHTML = monthlyPlans[i].currencySymbol + monthlyPlans[i].pricing;
                else
                    pricingCardTitles[i].innerHTML = annuallyPlans[i].currencySymbol + annuallyPlans[i].pricing;
            }
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.fetchPlans(false);
    }

    render() {
        return (
            <section id="pricing">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center text-28">
                    <h2>Pricing</h2>
                    <span className="small-text3 mt-5" style={!this.state.plans ? {'color': '#5cb85c'} : {'color': '#818496'}}>Billed Monthly</span>
                    <Switch
                        checked={this.state.plans}
                        onChange={this.handleChange('plans')}
                        value="plans"
                        style={{'color': '#5cb85c'}}
                        color="default"
                    />
                    <span className="small-text3 mt-5" style={this.state.plans ? {} : {'color': '#818496'}}>Billed Annually - </span>
                    <span className="small-text3 mt-5">2 Months Free</span>
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
                                        <li className="text-bold">per {!this.state.plans ? 'month' : 'year'}</li>
                                    </ul>
                                    <p className="mb-4">1 Job Per Month</p>
                                    <a className="btn mb-4" href="https://talent-ninja.com/home/auth/signup" id="btn-1256">
                                        Get Started
                                    </a>
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
                                        <li className="text-bold">per {!this.state.plans ? 'month' : 'year'}</li>
                                    </ul>
                                    <p className="mb-4">3 Jobs Per Month</p>
                                    <a className="btn mb-4" href="https://talent-ninja.com/home/auth/signup" id="btn-1258">
                                        Get Started
                                    </a>
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
                                        <li className="text-bold">per {!this.state.plans ? 'month' : 'year'}</li>
                                    </ul>
                                    <p className="mb-4">10 Jobs Per Month</p>
                                    <a className="btn mb-4" href="https://talent-ninja.com/home/auth/signup" id="btn-1256" target="_self">
                                        Get Started
                                    </a>
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
                                        <h5 className="mt-0">Post To 300+ Job Boards With <br/> a Single Click</h5>
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
        );
    }
}

export default Pricing;