import * as React from 'react';
import classnames from 'classnames';

import * as css from './RightBar.css';

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

const Btn = ({onClick, children, className}) => {
    const classNames = classnames(css.btn, className);

    return (
        <div className={classNames} onClick={onClick}>
            {children}
        </div>
    );
};

const LoginBtn = ({onClick}) =>
    <Btn onClick={onClick} className={css.btn__login}>
        Login
    </Btn>;

const RegBtn = ({onClick}) =>
    <Btn onClick={onClick} className={css.btn__reg}>
        Register
    </Btn>;

const AboutBtn = () =>
    <Btn onClick={()=>{}} className={css.btn__about}>
        About
    </Btn>;