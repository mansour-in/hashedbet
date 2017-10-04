import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../../PostReducer';
import CountDown from 'react-simple-countdown';
import TermsandConditions from './TermsandConditions';

// import Participate from 'Participate.js';

export class Participate extends Component {
  constructor(props) {
    super(props)
    this.state = {
        showParticipate: true,
        showTermsandConditions: false,
    }
    this.showTerms = this.showTerms.bind(this);
  }

  showTerms() {
    this.setState({
        showParticipate: false,  
        showTermsandConditions: true, 
    })
  }
  finish() {
    console.log('Countdown finished');
  }

  render() {
    const messages = {
      days: {
        plural: 'Days',
        singular: 'Day',
      },
      hours: 'Hours',
      mins: 'Min',
      segs: 'Sec',
    }
    return(
        <div>
          <div>
        <nav className="header bg-header transparent-light minimized dark" data-pages="header" data-pages-header="autoresize" data-pages-resize-class="dark">
          <div className="container relative">
            <div className="text-center">
              <div className="header-inner">
                <img src="/assets/images/logo_white.png" />
                <a href="/logout"><button type="button" className="pull-right btn btn-primary logout">Logout</button></a>
              </div>
            </div>
          </div>
        </nav>
        {this.state.showParticipate &&
        <section className="jumbotron full-width border-radius-none" style={{url: '/assets/images/mainheader.png'}} data-pages="parallax" data-bg-overlay="black" data-overlay-opacity="0.4">
          <div className="inner full-height">
            <div className="container-xs-height full-height">
              <div className="col-xs-height col-middle text-left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 m-t-30 m-b-30 p-t-50  top-list">
                      <div className="col-md-12 text-center">
                        <h1 className="light text-white xs-p-t-30 sm-p-b-30">Todays Bonus - 40%</h1>
                        <h5>Click Participate to Entroll</h5>
                        {/* <CountDown
      date="2019-09-12T00:00:00+00:00"
      {...messages}
      onEnd={this.finish.bind(this)} /> */}
                        <br/>
                        {/* <div className="clock countdown"> */}
                        <div>
                          {/* </div> */}
                        </div>
                        <div className="message"></div>
                        <br/>
                        <br/>
                        <button type="button" className=" countdown btn btn-primary btn-lg btn-block" onClick={this.showTerms.bind(this)}>Participate</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> }
          </div>
          {this.state.showTermsandConditions &&
            <TermsandConditions />
          }
        </div>
    )
  }
}


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    userData: getUserData(state)
  }
}

Participate.propTypes = {
};

export default connect(mapStateToProps)(Participate);
{/** 

        {this.state.showTermsandConditions && 
        <TermsandConditions />
        }
        {this.state.showParticipate && 
        <div>
          <input type="button" value="Click to show Terms and Conditions" onClick={this.showTerms} />
          {
          <p> {JSON.stringify(this.props.userData)} </p>
          }
          <a href="/logout"><i className="fa fa-sign-out pull-right"></i> Log Out</a>
          </div>
          }
**/}