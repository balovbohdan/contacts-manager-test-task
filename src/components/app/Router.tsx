import * as React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import {routes, Route as TRoute} from '@routes';

type Props = {
    children:React.ReactNode;
};

export const Router = ({children}:Props) =>
    <BrowserRouter>
        {children}
        <Items/>
    </BrowserRouter>;

const Items = () => {
    const mapper = ({path, exact, component}:TRoute) =>
        <Route key={path} path={path} exact={!!exact} component={component}/>;

    const items = routes.map(mapper);

    return <>{items}</>;
};