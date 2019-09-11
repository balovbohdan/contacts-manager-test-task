import * as React from 'react';

import css from './LeftBar.css';

export const LeftBar = () =>
    <div className={css.main}>
        <Logo/>
    </div>;

const Logo = () =>
    <div className={css.logo}/>;