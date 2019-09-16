import * as React from 'react';

import {Redux} from './Redux';
import {Apollo} from './Apollo';
import {Content} from './content';

export const App = () =>
    <Apollo>
        <Redux>
            <Content/>
        </Redux>
    </Apollo>;