import * as React from 'react';

import {PagePreloader} from '@components/page-preloader';

const {lazy, Suspense} = React;

export default () => {
    const C = lazy(() => import('./Home'));

    return (
        <Suspense fallback={<PagePreloader/>}>
            <C/>
        </Suspense>
    );
};