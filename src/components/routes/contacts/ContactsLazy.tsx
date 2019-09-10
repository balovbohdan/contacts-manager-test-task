import * as React from 'react';

const {Suspense, lazy} = React;

export default () => {
    const C = lazy(() => import('./Contacts'));

    return (
        <Suspense fallback='wait please'>
            <C/>
        </Suspense>
    );
};