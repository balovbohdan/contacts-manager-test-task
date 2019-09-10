import * as React from 'react';

const {lazy, Suspense} = React;

export default () => {
    const C = lazy(() => import('./Home'));

    return (
        <Suspense fallback='wait please'>
            <C/>
        </Suspense>
    );
};