import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LoginPage from './core/fe-login-page/LoginPage.react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginPage />, document.getElementById('root'));
registerServiceWorker();
