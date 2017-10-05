import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../../PostReducer';
import CountryAgreement from './CountryAgreement';
import Receipt from './ReceiptPage';

export class Deposit extends Component {
  constructor(props) {
    super(props)
    this.state = {
        showDeposit: true,
        showTermsandConditions: false,
        showReceipt: false,
    }
    this.showTerms = this.showTerms.bind(this);
    this.getReceipts = this.getReceipts.bind(this);
  }

  showTerms() {
    this.setState({
        showDeposit: false,  
        showTermsandConditions: true, 
    })
  }

  getReceipts() {
      this.setState({
        showDeposit: false,
        showReceipt: true
      })
  }

  render() {
    return(
      <div>
            {this.state.showDeposit && 
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
              
            <section className="mobile-wrapper full-width border-radius-none">
                <div className="inner full-height">
                  <div className="container-xs-height full-height">
                    <div className="col-xs-height col-middle text-left">
                      <div className="container">
                      <div className="row">
                      <div className="col-md-12 m-t-5 m-b-5 p-t-5">
                      <div className="col-md-12 text-center ">
                       <h5>CoinBet Ethereum Address</h5> 
                       <br/>
                       <img className="card-img-top" src="/assets/images/qr.png" alt="Card image cap" />
                       <br/>
                       <br/>
                      <input type="text" className="countdown form-control form-control-success ethereum-address" id="ethereum-address"  placeholder="0x014aD828044Ed4eb1A31bb79bEEaB6D303977ad0" value="0x014aD828044Ed4eb1A31bb79bEEaB6D303977ad0" />
                      <br />
                      <br />
                      <button type="button" className="btn btn-primary " onClick={this.showTerms.bind(this)}>Back</button>
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
            {this.state.showTermsandConditions &&
              <CountryAgreement />
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

Deposit.propTypes = {
};

export default connect(mapStateToProps)(Deposit);
