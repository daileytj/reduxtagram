import React from 'react';
import {render} from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/Main.js';
import Single from './components/Single.js';
import PhotoGrid from './components/PhotoGrid.js';

// Import React Router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store = {store}>
    <Router history = {history}>
      <Route path = '/' component = {Main}>
        <IndexRoute component = {PhotoGrid}></IndexRoute>
        <Route path = '/view/:postId' component = {Single} ></Route>
      </Route>
    </Router>
</Provider>
)

render(router, document.getElementById('root'));
