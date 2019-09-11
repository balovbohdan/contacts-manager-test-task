import * as React from 'react';
import {Link} from 'react-router-dom';

import {paths} from '@routes';

import css from './LeftBar.css';

export const LeftBar = () =>
    <div className={css.main}>
        <Logo/>
    </div>;

const Logo = () =>
    <Link to={paths.home}>
        <div className={css.logo}/>
    </Link>;