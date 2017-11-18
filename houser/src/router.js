import React from 'react';
import Login from './components/Auth/Auth';
import { Route, HashRouter } from 'react-router-dom';
import App from './App';
import StepOne from './components/Wizard/StepOne/StepOne';



export default (
    <HashRouter>
    <div>
    <Route exact path='/' component={Login} />
    </div>
    </HashRouter>

)
