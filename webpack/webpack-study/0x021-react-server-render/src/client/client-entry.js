import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom';

ReactDom.hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
)
