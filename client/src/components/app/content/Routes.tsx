import * as React from 'react';
import {Route} from 'react-router';

import {Route as TRoute, routes} from '@routes';

export const Routes = () => {
    const mapper = ({path, exact, component}:TRoute) =>
        <Route key={path} path={path} exact={!!exact} component={component}/>;

    const items = routes.map(mapper);

    return <>{items}</>;
};