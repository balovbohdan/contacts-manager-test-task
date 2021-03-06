import * as React from 'react';
import classnames from 'classnames';

import {ModalWindow} from '@components/modal-window';
import {findContact} from '@lib/entities/contacts/utils';

import * as T from './types';
import * as css from './ContactWindow.css';
import {CallsHistory} from './calls-history';

export const ContactWindow = (props:T.Props) => {
    const contact = findContact(props.id, props.contacts);

    if (!contact)
        return null;

    const {name, img, phone, tip} = contact;

    return (
        <ModalWindow close={props.close} title={name}>
            <Body
                img={img}
                tip={tip}
                phone={phone}
                id={props.id}
                call={props.call}
                close={props.close}
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
                close={props.close}
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

const Actions = ({id, close, remove, toggleEditWindow}:T.ActionsProps) => {
    const openEditWindow = () => toggleEditWindow({ id });

    const doRemove = () => {
        close();
        remove({ id });
    };

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