import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../../PostReducer';
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

  render() {
    return(
      <div>
          {this.state.showTermsandConditions && 
            <TermsandConditions />
          }
          {this.state.showParticipate && 
            <div> 
                <input type="button" value="Click to show Terms and Conditions" onClick={this.showTerms} />
                 {/* <p> {JSON.stringify(this.props.userData)} </p> */}
            </div>
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
