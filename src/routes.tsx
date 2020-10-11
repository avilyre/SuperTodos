import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Todos from './pages/Todos';
import TodoCreate from './pages/TodosCreate';
import TodoDelete from './pages/TodosDelete';

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Todos} />
                <Route path="/criar" component={TodoCreate} />
                <Route path="/apagar" component={TodoDelete} />
            </Switch>
        </BrowserRouter>
    );
}

export default routes;