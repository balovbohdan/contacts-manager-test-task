import * as React from 'react';
import classnames from 'classnames';

import {ModalWindow} from '@components/modal-window';

import * as T from './types';
import css from './ContactWindow.css';
import {CallsHistory} from './calls-history';

export const ContactWindow = (props:T.Props) => {
    const {name, img, phone, tip} = props.contacts[props.id];

    return (
        <ModalWindow close={props.close} title={name}>
            <Body
                img={img}
                tip={tip}
                phone={phone}
                id={props.id}
                call={props.call}
                remove={props.remove}
                contacts={props.contacts}
                callsHistory={props.callsHistory}
                toggleEditWindow={props.toggleEditWindow}
                fetchCallsHistory={props.fetchCallsHistory}/>
        </ModalWindow>
    );
};

const Body = (props:T.BodyProps) => {
    const {id, tip} = props;

    const doCall = () => props.call({
        contactId: id
    });

    return (
        <div className={css.body}>
            <Actions
                id={id}
                remove={props.remove}
                toggleEditWindow={props.toggleEditWindow}/>
            <div title='Call' className={css.phone} onClick={doCall}>
                <div className={css.phone_icon}/>
                <h5 className={css.phone_txt}>{props.phone}</h5>
            </div>
            {tip && <p className={css.tip}>{tip}</p>}
            <CallsHistory
                contactId={id}
                contacts={props.contacts}
                history={props.callsHistory}
                fetchCallsHistory={props.fetchCallsHistory}/>
        </div>
    );
};

const Actions = ({id, remove, toggleEditWindow}:T.ActionsProps) => {
    const doRemove = () => remove({ id });
    const openEditWindow = () => toggleEditWindow({ id });

    const editClassName = classnames(
        css.actions_btnInnerWrapper,
        css.actions_btnInnerWrapper__edit
    );

    const removeClassName = classnames(
        css.actions_btnInnerWrapper,
        css.actions_btnInnerWrapper__remove
    );

    return (
        <div className={css.actions}>
            <div onClick={openEditWindow} className={css.actions_btn}>
                <div className={editClassName}/>
            </div>
            <div onClick={doRemove} className={css.actions_btn}>
                <div className={removeClassName}/>
            </div>
        </div>
    );
};