import * as React from 'react';

const {Suspense, lazy} = React;

import {PagePreloader} from '@components/page-preloader';

export default () => {
    const C = lazy(() => import('./Contacts'));

    return (
        <Suspense fallback={<PagePreloader/>}>
            <C/>
        </Suspense>
    );
};