import * as React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {Header} from '@components/header';
import {root as actions} from '@storehouse/actions';

import {Routes} from './Routes';
import {Windows} from './Windows';

type Props = {
    toggleRegWindow:()=>void;
    toggleLoginWindow:()=>void;
};

const C = (props:Props) =>
    <BrowserRouter>
        <Header
            toggleRegWindow={props.toggleRegWindow}
            toggleLoginWindow={props.toggleLoginWindow}/>
        <Routes/>
        <Windows/>
    </BrowserRouter>;

const mapDispatchToProps = dispatch => ({
    toggleRegWindow() {
        const action = actions.toggleRegWindow();

        dispatch(action);
    },
    toggleLoginWindow() {
        const action = actions.toggleLoginWindow();

        dispatch(action);
    }
});

export const Content = connect(null, mapDispatchToProps)(C);