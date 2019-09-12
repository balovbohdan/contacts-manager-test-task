import * as React from 'react';

import {ModalWindow} from '@components/modal-window';

import * as T from './types';
import {CallsHistory} from './CallsHistory';
import css from './ContactWindow.css';

export const ContactWindow = ({id, call, close, contacts, callsHistory}:T.Props) => {
    const {name, img, phone, tip} = contacts[id];

    return (
        <ModalWindow close={close} title={name}>
            <Body
                id={id}
                img={img}
                tip={tip}
                call={call}
                phone={phone}
                contacts={contacts}
                callsHistory={callsHistory}/>
        </ModalWindow>
    );
};

const Body = ({id, tip, call, phone, contacts, callsHistory}:T.BodyProps) => {
    const doCall = () => call({
        contactId: id
    });

    return (
        <div className={css.body}>
            <div title='Call' className={css.phone} onClick={doCall}>
                <div className={css.phone_icon}/>
                <h5 className={css.phone_txt}>{phone}</h5>
            </div>
            {tip && <p className={css.tip}>{tip}</p>}
            <CallsHistory contacts={contacts} history={callsHistory}/>
        </div>
    );
};