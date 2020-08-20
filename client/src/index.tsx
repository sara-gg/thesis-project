import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Grommet } from 'grommet';
import myTheme from "./styles/theme"

// REDUX SPECIFIC IMPORTS
import reducer from "./reducers/reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, applyMiddleware(thunk, logger));

//composeEnhancers(),
// store.subscribe(() => {
//   console.log(store.getState());
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Grommet theme={myTheme}> 
      <App />
      </Grommet>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
