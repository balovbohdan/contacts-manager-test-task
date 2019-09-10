import * as React from 'react';

import css from './RightBar.css';

export const RightBar = () =>
    <div className={css.main}>
        <AboutBtn/>
        <RegisterBtn/>
        <LoginBtn/>
    </div>;

const Btn = ({children}) =>
    <div className={css.btn}>
        {children}
    </div>;

const LoginBtn = () =>
    <Btn>Login</Btn>;

const RegisterBtn = () =>
    <Btn>Register</Btn>;

const AboutBtn = () =>
    <Btn>About</Btn>;