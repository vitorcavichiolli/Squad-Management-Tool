import "./App.css";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import PageHeader from './components/templates/PageHeader'
import PageFooter from './components/templates/PageFooter'
import Routes from './Routes'



export default () => (

    <div className='app'>
        <PageHeader></PageHeader>
        <Router>
            <Routes />
        </Router>
        <PageFooter></PageFooter>
    </div>

);