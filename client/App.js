/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory, IndexRoute } from 'react-router';

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');

export default function App(props) {
    return (
        <Provider store={props.store}>
            <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} home={IndexRoute}>
                {routes}
                {notFoundRoutes}
            </Router>
        </Provider>
    );
}

App.propTypes = {
    store: React.PropTypes.object.isRequired,
};
