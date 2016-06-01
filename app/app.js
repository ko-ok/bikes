/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

// TODO constrain eslint import/no-unresolved rule to this block
// Load the manifest.json file and the .htaccess file
import 'file?name=[name].[ext]!./manifest.json';  // eslint-disable-line import/no-unresolved
import 'file?name=[name].[ext]!./.htaccess';      // eslint-disable-line import/no-unresolved

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll';
import configureStore from './store';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/lib/sanitize.css';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

const config = {
  env : process.env.NODE_ENV || 'development',
}

// Set up the router, wrapping all Routes in the App component
import App from './containers/App';
import createRoutes from './routes';

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

const DEBUG = process.env.NODE_ENV === 'development' ? true : false

// if (DEBUG) {
//   if (window.devToolsExtension) {
//     window.devToolsExtension.open()
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(
          useScroll(
            (prevProps, props) => {
              if (!prevProps || !props) {
                return true;
              }

              if (prevProps.location.pathname !== props.location.pathname) {
                return [0, 0];
              }

              return true;
            }
          )
        )
      }
    />
  </Provider>,
  document.getElementById('app')
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
import { install } from 'offline-plugin/runtime';
install();
