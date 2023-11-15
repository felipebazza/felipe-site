import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import InitialPage from '../components/InitialPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={InitialPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
