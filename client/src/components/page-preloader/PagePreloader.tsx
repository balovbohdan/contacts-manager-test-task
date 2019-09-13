import * as React from 'react';

import css from './PagePreloader.css';

export const PagePreloader = () =>
    <div className={css.main}>
        <div className={css.loader}/>
    </div>;