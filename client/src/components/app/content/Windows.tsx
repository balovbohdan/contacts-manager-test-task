import * as React from 'react';
import {connect} from 'react-redux';

import {State} from '@storehouse/types';
import {root as actions} from '@storehouse/actions';

import {RegWindow} from '@components/reg-window';
import {LoginWindow} from '@components/login-window';

type Props = {
    closeReg:()=>void;
    closeLogin:()=>void;

    needShowReg:boolean;
    needShowLogin:boolean;
};

type WindowProps = {
    close:()=>void;
    needShow:boolean;
};

const C = (props:Props) =>
    <>
        <Reg close={props.closeReg} needShow={props.needShowReg}/>
        <Login close={props.closeLogin} needShow={props.needShowLogin}/>
    </>;

const Reg = ({close, needShow}:WindowProps) =>
    needShow
        ? <RegWindow close={close}/>
        : null;

const Login = ({close, needShow}:WindowProps) =>
    needShow
        ? <LoginWindow close={close}/>
        : null;

const mapStateToProps = ({root}:State) => ({
    needShowReg: root.needShowRegWindow,
    needShowLogin: root.needShowLoginWindow
});

const mapDispatchToProps = dispatch => ({
    closeReg() {
        const action = actions.toggleRegWindow();

        dispatch(action);
    },
    closeLogin() {
        const action = actions.toggleLoginWindow();

        dispatch(action);
    }
});

export const Windows = connect(mapStateToProps, mapDispatchToProps)(C);