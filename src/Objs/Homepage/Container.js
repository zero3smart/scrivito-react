/*import * as React from "react";

const data = [{
    key: 1,
    img: "../../assets/images/features/explore_signup.png",
    title: 'Easy Sign Up and Log In',
    description: 'Quickly sign up or login to Talent Ninja via LinkedIn, Facebook, <br /> Twitter, Google or email.',
    section: 'signup'
  }, {
    key: 2,
    img: "../../assets/images/features/explore_dashboard.png",
    title: 'Everything You Need To Manage Your Recruitment',
    description: 'Our easy to use, modern dashboard allows you to view your latest applications, job performance analytics and all of the functions of Talent Ninja.',
    section: 'dashboard'
  }];

  class Shot extends React.Component {
    render() {
      const { img, title, description } = this.props.info;
      
      return (
        <div>

        <section id="features">

            <div className="container">
            <div className="row">
                <div className="col-md-6 signup">
                    <img src={img} />
                </div>
                <div className="column2 col-md-6">
                    <h2 className="mb-2">{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="filterDiv dashboard">
                    <div className="col-md-6">
                        <img src={img} />
                    </div>
                    <div className="column2 col-md-6">
                        <h2 className="mb-2">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>

            </div>

            </div>
        </section>

        </div>
      );
    }
  }
  
  class Shots extends React.Component {
    filterList = (filter) => {
      return data.filter(function(d) {
        if(filter === 'all') return true;
        return d.section === filter;
      })
    }
    
    render() {
      const { filter } = this.props;
      
      const newList = this.filterList(filter);
      
      return (
        <section>
          <div className='container'>
            <div className='shots'>
              {newList.map(function(d) {
                return <Shot key={d.key} info={d} />
              })}
            </div>
          </div>
        </section>
      );
    }
  }

  class Container extends React.Component {
    constructor() {
      super();
      
      this.state = {
        shots: data,
        filter: 'all'
      }
    }
    
    filterShots = (filter) => {
      this.setState({
        filter
      });
    }
    
    render() {
      return (
        <header>
          <nav className='nav'>
            <ul className='nav__list'>
              <li>
                <a href='#' className={this.state.filter === 'all' ? 'selected' : ''} onClick={() => { this.filterShots('all') }}>All</a>
              </li>
              <li>
                <a href='#' className={this.state.filter === 'signup' ? 'selected' : ''} onClick={() => { this.filterShots('signup') }}>signup</a>
              </li>
              <li>
                <a href='#' className={this.state.filter === 'dashboard' ? 'selected' : ''} onClick={() => { this.filterShots('dashboard') }}>dashboard</a>
              </li>
              <li>
                <a href='#' className={this.state.filter === 'jobs' ? 'selected' : ''} onClick={() => { this.filterShots('jobs') }}>jobs</a>
              </li>
            </ul>
          </nav>
          <Shots filter={this.state.filter} />
        </header>
      );
    }
  }
  
  export default Container;*/