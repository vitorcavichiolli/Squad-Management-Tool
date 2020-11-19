import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import History from './components/tools/History';

import Create from "./components/pages/Create";
import Home from "./components/pages/Home";
import Edit from './components/pages/Edit';

export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Create"  component={Create} />
                    <Route path="/Edit/:id"  component={Edit} />
                </Switch>
            </Router>
        )
    }
}