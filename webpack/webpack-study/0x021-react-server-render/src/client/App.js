import React from 'react'
import { hot } from 'react-hot-loader'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom';
import IndexPage from './page/IndexPage'
import MinePage from './page/MinePage'
import MainPage from './page/MainPage'

const App = () => (
    <div>
      <ul>
        <li><NavLink to="/index">IndexPage</NavLink></li>
        <li><NavLink to="/main">MainPage</NavLink></li>
        <li><NavLink to="/mine">MinePage</NavLink></li>
      </ul>
      <div>
        <Switch>
          <Route path="/index" component={IndexPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/mine" component={MinePage} />
        </Switch>
      </div>
    </div>
)

export default hot(module)(App)
