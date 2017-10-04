import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../../PostReducer';
import Participate from './Participate';
import Deposit from './Deposit';

// import styles from './assets/css/pages.css';
// import Participate from 'Participate.js';

export class TermsandConditions extends Component {
  constructor(props) {
    super(props)
    this.state = {
        showTermsandConditions: true,
        showParticipation: false,
        showDepositPage: false
    }
  }

  previousStep() {
      this.setState({
          showTermsandConditions: false,
          showParticipation: true
      })
  }
  nextStep() {
      this.setState({
          showTermsandConditions: false,
          showDepositPage: true,
      })
  }

  render() {
    return(
    <div>
      <div>
          {this.state.showParticipation &&
            <Participate />
          }
      </div>
      <div>
          {this.state.showDepositPage &&
            <Deposit />
          }
      </div>
      <div>
          {this.state.showTermsandConditions &&
            <div>
            <nav className="header bg-header transparent-light minimized dark">
              <div className="container relative">
                <div className="text-center">
                  <div className="header-inner">
                    <img src="/assets/images/logo_white.png"/>
                  </div>
                </div>
              </div>
            </nav>
            <section className="jumbotron full-width border-radius-none" data-pages-bg-image="assets/images/mainheader.png" data-pages="parallax" data-bg-overlay="black" data-overlay-opacity="0.4">
                <div className="inner full-height">
                  <div className="container-xs-height full-height">
                    <div className="col-xs-height col-middle text-left">
                      <div className="container">
                      <div className="row">
                      <div className="col-md-12 m-t-100 m-b-100 p-t-50  top-list">
                        <ul>
                          <li className="top-list-active"><h4>terms</h4><img src='/assets/images/icon_001.png' /></li>
                          <li><h4>terms</h4><img src="" /></li>
                          <li><h4>terms</h4><img src=""/></li>
                          <li><h4>terms</h4><img src=""/></li>
                        </ul>
                        </div>

                        <div className="col-md-12 text-center">
                          <h1 className="light text-white xs-p-t-30 sm-p-b-30">Maximize your profits</h1>
                          <h5>through developing the world's first Ethereum smart contracts based lottery.</h5>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                </section>
                <p>This is Terms and Conditions Page . </p>
                <input type="button" value="Reject" onClick={this.previousStep.bind(this)} />
                <input type="button" value="Accept" onClick={this.nextStep.bind(this)}/>
            {/* <script type="text/javascript" src="assets/js/jquery-1.11.1.min.js"></script>
            <script type="text/javascript" src="assets/js/bootstrap.min.js"></script> */}
            {/* <script type="text/javascript" src="assets/js/pages.frontend.js"></script> */}
            </div>
          }
      </div>
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

TermsandConditions.propTypes = {
};

export default connect(mapStateToProps)(TermsandConditions);
