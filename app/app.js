// /**
//  * app.js
//  *
//  * This is the entry file for the application, only setup and boilerplate
//  * code.
//  */
// import 'babel-polyfill';

// // TODO constrain eslint import/no-unresolved rule to this block
// // Load the manifest.json file and the .htaccess file
// import 'file?name=[name].[ext]!./manifest.json';  // eslint-disable-line import/no-unresolved
// import 'file?name=[name].[ext]!./.htaccess';      // eslint-disable-line import/no-unresolved

// // Import all the third party stuff
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// import useScroll from 'react-router-scroll';
// import configureStore from './store';

// // Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
// import 'sanitize.css/lib/sanitize.css';

// // Create redux store with history
// // this uses the singleton browserHistory provided by react-router
// // Optionally, this could be changed to leverage a created history
// // e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
// const initialState = {};
// const store = configureStore(initialState, browserHistory);

// // Sync history and store, as the react-router-redux reducer
// // is under the non-default key ("routing"), selectLocationState
// // must be provided for resolving how to retrieve the "route" in the state
// import { selectLocationState } from 'containers/App/selectors';
// const history = syncHistoryWithStore(browserHistory, store, {
//   selectLocationState: selectLocationState(),
// });

// const config = {
//   env : process.env.NODE_ENV || 'development',
// }

// // config.globals = {
// //   'process.env'  : {
// //     'NODE_ENV' : JSON.stringify(config.env)
// //   },
// //   'NODE_ENV'     : config.env,
// //   '__DEV__'      : config.env === 'development',
// //   '__PROD__'     : config.env === 'production',
// //   '__TEST__'     : config.env === 'test',
// //   '__DEBUG__'    : config.env === 'development',
// //   '__COVERAGE__' : config.env === 'test',
// //   '__BASENAME__' : JSON.stringify(process.env.BASENAME || '')
// // }

// // Set up the router, wrapping all Routes in the App component
// import App from 'containers/App';
// import createRoutes from './routes';
// const rootRoute = {
//   component: App,
//   childRoutes: createRoutes(store),
// };

// const DEBUG = process.env.NODE_ENV === 'development' ? true : false

// // if (DEBUG) {
// //   if (window.devToolsExtension) {
// //     window.devToolsExtension.open()
// //   }
// // }

// ReactDOM.render(
//   <Provider store={store}>
//     <Router
//       history={history}
//       routes={rootRoute}
//       render={
//         // Scroll to top when going to a new page, imitating default browser
//         // behaviour
//         applyRouterMiddleware(
//           useScroll(
//             (prevProps, props) => {
//               if (!prevProps || !props) {
//                 return true;
//               }

//               if (prevProps.location.pathname !== props.location.pathname) {
//                 return [0, 0];
//               }

//               return true;
//             }
//           )
//         )
//       }
//     />
//   </Provider>,
//   document.getElementById('app')
// );

// // Install ServiceWorker and AppCache in the end since
// // it's not most important operation and if main code fails,
// // we do not want it installed
// import { install } from 'offline-plugin/runtime';
// install();

const Server = require('./server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)