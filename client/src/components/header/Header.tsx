import * as React from 'react';

import {LeftBar} from './LeftBar';
import {RightBar} from './RightBar';

import css from './Header.css';

type Props = {
    toggleRegWindow:()=>void;
    toggleLoginWindow:()=>void;
};

export const Header = (props:Props) =>
    <div className={css.main}>
        <LeftBar/>
        <RightBar
            toggleRegWindow={props.toggleRegWindow}
            toggleLoginWindow={props.toggleLoginWindow}/>
    </div>;