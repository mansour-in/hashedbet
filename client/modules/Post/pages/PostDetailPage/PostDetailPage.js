import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {getUserData} from '../../PostReducer';

import Participate from './Participate';
import MiniGameIndex from './MiniGameComponents/MiniGameIndex'
export class PostDetailPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <MiniGameIndex />
    );
  };
};


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    userData: getUserData(state)
  }
}

PostDetailPage.propTypes = {
};

export default connect(mapStateToProps)(PostDetailPage);
