import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../../PostReducer';
import TermsandConditions from './TermsandConditions';
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
          <div>
            {this.state.showDeposit && 
              <div>
                  <p> Deposit Page </p>
                  <input type="button" value="Previous" onClick={this.showTerms} />
                  <input type="button" value="Get Receipt" onClick={this.getReceipts} />
              </div>
            }
          </div>
          <div>
            {this.state.showReceipt && 
              <div>
                <Receipt />
              </div>
            }
          </div>
          <div>
            {this.state.showTermsandConditions && 
              <div>
                <TermsandConditions />
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

Deposit.propTypes = {
};

export default connect(mapStateToProps)(Deposit);
