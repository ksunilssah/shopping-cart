import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Router from './components/Router';
import './css/style.css';

ReactDOM.render(<Router><App /></Router>, document.getElementById('main'));