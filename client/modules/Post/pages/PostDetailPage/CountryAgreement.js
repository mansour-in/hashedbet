import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../../PostReducer';
import Deposit from './Deposit';
import TermsandConditions from './TermsandConditions';
import Receipt from './ReceiptPage';

export class CountryAgreement extends Component {
  constructor(props) {
    super(props)
    this.state = {
        showCountry: true,
        showTermsandConditions: false,
        showReceipt: false,
    }
  }

  showDeposit() {
    this.setState({
        showDeposit: true,  
        showCountry: false, 
    })
  }
  previousTerms(){
      this.setState({
          showCountry: false,
          showTermsandConditions:true,
      })
  }
  render() {
    return(
      <div>
            {this.state.showCountry && 
              <div>
            <nav className="header bg-header transparent-light minimized dark" data-pages="header" data-pages-header="autoresize" data-pages-resize-class="dark">
                <div className="container relative">
                    <div className="text-center">
                    <div className="header-inner">
                        <img src="assets/images/logo_white.png" />
                        <a href="/logout"><button type="button" className="pull-right btn btn-primary logout">Logout</button></a>
                    </div>
                    </div>
                </div>
            </nav>
            <h5>Coin-Bet Country Agreement</h5>
            
            <section className="mobile-wrapper full-width border-radius-none">
                <div className="inner full-height">
                <div className="container-xs-height full-height">
                <div className="col-xs-height col-middle text-left">
                    <div className="container">
                    <div className="row">
                    <div className="col-md-12 m-t-5 m-b-5 p-t-5">
                    <div className="col-md-12 text-center">
                    <h5>Agreement with the Nationality Confirmation Statement</h5>
                    <textarea className="form-control countdown" id="exampleTextarea" rows="5">
            You hereby represent and warrant that you are not a citizen, resident or entity of U.S., Singapore, China or Japan (a “U.S., Singaporean, Chinese or Japanese Person“) nor are you purchasing PlusCoin or agreeing to any documents on this website for and on behalf of a U.S., Singaporean, Chinese or Japanese Person.
                    </textarea>
                    <br/>
                    <br/>
                    <div className="row countdown">
                            <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <button type="button" className="btn btn-primary btn-block" onClick={this.showDeposit.bind(this)}>I Agree</button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                            <button type="button" className="btn btn-primary btn-block" onClick={this.previousTerms.bind(this)}>Disagree</button>
                    </div>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </section>
            </div>
            }
            {this.state.showDeposit &&
              <Deposit />
            }
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

CountryAgreement.propTypes = {
};

export default connect(mapStateToProps)(CountryAgreement);
