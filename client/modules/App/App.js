import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Components
import Helmet from 'react-helmet';

// Import Actions
import { toggleAddPost } from './AppActions';
// import { switchLanguage } from '../../modules/Intl/IntlActions';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isMounted: false };
    }

    componentDidMount() {
      this.setState({isMounted: true}); // eslint-disable-line
    }

    toggleAddPostSection = () => {
        this.props.dispatch(toggleAddPost());
    };

    render() {
        return (
            <div>
            {/* {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />} */}
                <div>
                    <Helmet
                      title="Coinbet"
                      titleTemplate="%s"
                      meta={[
                      { charset: 'utf-8' },
                          {
                              'http-equiv': 'X-UA-Compatible',
                              content: 'IE=edge',
                          },
                          {
                              name: 'viewport',
                              content: 'width=device-width, initial-scale=1',
                          },
                      ]}
                    />
                    {/* <Header
                      switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
                      intl={this.props.intl}
                      toggleAddPost={this.toggleAddPostSection}
                    /> */}
                    <div>
                      {this.props.children}
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
      );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  // intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps() {
    return {
    // intl: store.intl,
    };
}

export default connect(mapStateToProps)(App);
