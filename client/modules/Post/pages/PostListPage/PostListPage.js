import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';


class PostListPage extends Component {


  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state),
  };
}

PostListPage.propTypes = {
};

PostListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
