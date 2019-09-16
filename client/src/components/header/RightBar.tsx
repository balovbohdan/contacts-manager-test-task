import * as React from 'react';

import css from './RightBar.css';

type Props = {
    toggleRegWindow:()=>void;
    toggleLoginWindow:()=>void;
};

export const RightBar = (props:Props) =>
    <div className={css.main}>
        <AboutBtn/>
        <RegBtn onClick={props.toggleRegWindow}/>
        <LoginBtn onClick={props.toggleLoginWindow}/>
    </div>;

const Btn = ({onClick, children}) =>
    <div className={css.btn} onClick={onClick}>
        {children}
    </div>;

const LoginBtn = ({onClick}) =>
    <Btn onClick={onClick}>Login</Btn>;

const RegBtn = ({onClick}) =>
    <Btn onClick={onClick}>Register</Btn>;

const AboutBtn = () =>
    <Btn onClick={()=>{}}>About</Btn>;