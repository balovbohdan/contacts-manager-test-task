import * as React from 'react';
import {render} from 'react-dom';

import '@css/index.css';
import {App} from '@components/app';

const root = document.getElementById('app');

render(<App/>, root);