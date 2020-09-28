import React from 'react';
import ReactDOM from 'react-dom';
import './components/error-styling.css'
import './components/header.css'
import './components/individual-tweet.css'
// import './components/media-queries.css'
import './components/nav.css'
import './components/new-tweet.css'
import './components/normalize-4.1.1.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
