import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import store from './ducks/store';
import Login from './components/Auth/Auth';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>

    , document.getElementById('root'));
registerServiceWorker();
