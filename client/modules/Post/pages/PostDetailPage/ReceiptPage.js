import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {getUserData} from '../../PostReducer';

// import Participate from 'Participate.js';

export class Receipt extends Component {
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
          <p>{JSON.stringify(this.props.userData)}</p>
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

Receipt.propTypes = {
};

export default connect(mapStateToProps)(Receipt);
