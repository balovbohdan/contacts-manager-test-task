import * as React from 'react';

import {Header} from '@components/header';

import {Redux} from './Redux';
import {Apollo} from './Apollo';
import {Router} from './Router';

export const App = () =>
    <Apollo>
        <Redux>
            <Router>
                <Header/>
            </Router>
        </Redux>
    </Apollo>;