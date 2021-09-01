import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilterProvider from './store/provider';
import {MonthFilterProvider} from './store/provider';
import ModalProvider from './store/modal-context';
import AuthProvider from './store/authcontext';


ReactDOM.render(<FilterProvider><MonthFilterProvider><ModalProvider><AuthProvider><App /></AuthProvider></ModalProvider></MonthFilterProvider></FilterProvider>, document.getElementById('root'));
