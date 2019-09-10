import * as React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import {routes, Route as TRoute} from '@routes';

export const Router = () =>
    <BrowserRouter>
        <Items/>
    </BrowserRouter>;

const Items = () => {
    const mapper = ({path, exact, component}:TRoute) =>
        <Route key={path} path={path} exact={!!exact} component={component}/>;

    const items = routes.map(mapper);

    return <>{items}</>;
};