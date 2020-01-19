import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {message} from '@enos/dpl';
import Main from './router';
import {unregister} from './serviceWorker';
import ProxTest from './router/HandleRouter/ProxyTest';
import RouteTest from './router/HandleRouter/RouterTest';

import './asset/icons/dpl/style.css';
import './index.scss';

message.config({
  top: 60,
  duration: 1
});

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' exact component={Main} />
    <Route path='/router/proxTest' exact component={ProxTest} />
    <Route path='/router/routeTest' exact component={RouteTest} />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
