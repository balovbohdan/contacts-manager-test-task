import * as React from 'react';

import {Header} from '@components/header';

import {Router} from './Router';
import {StoreProvider} from './StoreProvider';

export const App = () =>
    <StoreProvider>
        <Router>
            <Header/>
        </Router>
    </StoreProvider>;