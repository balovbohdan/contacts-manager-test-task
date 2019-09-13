import * as React from 'react';

import {LeftBar} from './LeftBar';
import {RightBar} from './RightBar';

import css from './Header.css';

export const Header = () => (
    <div className={css.main}>
        <LeftBar/>
        <RightBar/>
    </div>
);