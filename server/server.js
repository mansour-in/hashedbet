import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import _ from 'lodash';

// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { authSession, validateSession } from './util/middleware';

// Initialize the Express App
const app = new Express();
const expressRouter = Express.Router(); // eslint-disable-line

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup
import { configureStore } from '../client/store';
import { setUser } from '../client/modules/Post/PostActions';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';

// Import required modules
import routes from '../client/routes';
import { fetchComponentData } from './util/fetchData';

import serverConfig from './config';
import passport from 'passport';
const access = require('safe-access');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    }
});

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({
    limit: '20mb'
}));
app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: false
}));
app.use(Express.static(path.resolve(__dirname, '../dist')));
app.set('view engine', 'ejs');

// Apply Cookie Parser
app.use(cookieParser());

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: serverConfig.session.secret,
    cookie: serverConfig.session.cookie,
    key: serverConfig.session.key,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: serverConfig.session.collection,
        autoRemove: 'interval',
        autoRemoveInterval: 240,
        ttl: 7 * 24 * 60 * 60,
    }),
}));

// use passport session
app.use(passport.initialize());
app.use(passport.session());


app.use(expressRouter);
// app.use(app.Router);

require(`${__dirname}/routes/user.routes.js`)(app);

app.use((req, res, next) => {
    if (req.user) {
        if (_.isUndefined(_.get(req, 'cookies.clever'))) {
            req.user = null; // eslint-disable-line
        }
        next();
    } else {
        next();
    }
});

app.get('/', validateSession, (req, res) => {
    res.render('pages/landing');
});

// app.get('/a/login',validateSession, (req, res) => {
//     res.render('pages/login', {
//         error: false
//     });
// });

app.get('/resetpassword/*',validateSession, (req, res) => {
    res.render('pages/resetpassword', {

    });
});

app.get('/bot', (req, res) => {
    res.render('bot/samplebot', {
        error: false
    });
});
app.get('/faq', (req,res) => {
    res.render('pages/faq');
})
// Render Initial HTML
const renderFullPage = (html, initialState) => {
    const head = Helmet.rewind();

    // Import Manifests
    const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
    const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

    return `
    <!doctype html>
    <html>
      <head>
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}

        ${process.env.NODE_ENV === 'production' ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/assets/plugins/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" />
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />
        <link class="main-stylesheet" href="/assets/css/pages.css" rel="stylesheet" type="text/css" />
        <link class="main-stylesheet" href="/assets/css/custom.css" rel="stylesheet" type="text/css" />        
        <link class="main-stylesheet" href="/assets/css/pages-icons.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          ${process.env.NODE_ENV === 'production' ?
          `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)};
          //]]>` : ''}
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <link href="https://cdn.rawgit.com/objectivehtml/FlipClock/master/src/flipclock/css/flipclock.css" rel="stylesheet" />
        <script src="https://cdn.rawgit.com/objectivehtml/FlipClock/master/compiled/flipclock.min.js"></script>
        <script type="text/javascript">
          var date = new Date(2017, 09, 05);
          var now = new Date();
          var diff = (date.getTime()/1000) - (now.getTime()/1000);

          var clock = $('.clock').FlipClock(diff,{
              clockFace: 'DailyCounter',
              countdown: true
          }); 
        </script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js'}'></script>
      </body>
    </html>
  `;
};

const renderError = err => {
    const softTab = '&#32;&#32;&#32;&#32;';
    const errTrace = process.env.NODE_ENV !== 'production' ?
        `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
    return renderFullPage(`Server Error${errTrace}`, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
    match({
        routes,
        location: req.url
    }, (err, redirectLocation, renderProps) => {
        if (err) {
            return res.status(500)
                .end(renderError(err));
        }

        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        // if (!renderProps) {
        //     return res.redirect('/notfound');
        // }

        const decrypt = require('./lib/decrypt');
        // console.log(decrypt.decodeToken(decodeURIComponent(req.cookies.clever)));
        let store = configureStore();
        const urlValues = req.url.split('/');


        // return new Promise((resolve, reject) => {
        //     resolve(decrypt.decodeToken(req.user.data.token));
        // return decrypt.decodeToken(req.user.data.token)
        return decrypt.decodeToken(access(req, 'user.data.token'))
        .then((user) => {
            // store.dispatch(setClientId(user.clientId));
            store.dispatch(setUser(user));
            return fetchComponentData(store, renderProps.components, renderProps.params);
        })
        .then(() => {
            const initialView = renderToStaticMarkup(
                <Provider store={store}>
                    <div className="load">
                        <div className="content">
                            <div className="initial-load-animation">
                                <div className="linkedin-image"></div>
                                <div id="loadingProgressG">
                                    <div id="loadingProgressG_1" className="loadingProgressG"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Provider>
            );
            const finalState = store.getState();
            res
                .set('Content-Type', 'text/html')
                .status(200)
                .end(renderFullPage(initialView, finalState));
        })
        .catch((error) => {
            next(error);
        });
    });
});


// start app
app.listen(serverConfig.port, (error) => {
    if (!error) {
        require('./lib/passport')(); // eslint-disable-line
        console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
    }
});

export default app;
