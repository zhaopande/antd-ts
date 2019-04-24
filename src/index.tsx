import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from '@/App';
import Router from '@/router/index';
import './index.css';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(
  <Router />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();