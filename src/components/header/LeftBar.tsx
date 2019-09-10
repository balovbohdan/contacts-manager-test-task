import * as React from 'react';

import css from './LeftBar.css';

export const LeftBar = () =>
    <div className={css.main}>
        <Logo/>
    </div>;

const Logo = () =>
    <h3 className={css.logo}>CM</h3>;