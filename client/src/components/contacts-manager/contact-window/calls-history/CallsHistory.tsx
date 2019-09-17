import * as React from 'react';
import classnames from 'classnames';

import {CallType, T} from '@lib/entities/calls-history';
import {findContact} from '@lib/entities/contacts/utils';
import {Contact, Contacts} from '@lib/entities/contacts/contact/types';

import {FetchCallsHistory} from '@storehouse/actions/contacts/types';

import * as utils from '../utils';
import * as css from './CallsHistory.css';
import {DataProvider} from './DataProvider';

type Props = {
    contactId:number;
    contacts:Contacts;
    history:T.CallsHistory;

    fetchCallsHistory:FetchCallsHistory;
};

type ItemsProps = {
    contacts:Contacts;
    history:T.CallsHistory;
};

type ItemProps = {
    time:number;
    type:CallType;
    toContact:Contact;
};

export type CallTypeIconProps = {
    type:CallType;
};

export const CallsHistory = (props:Props) =>
    <DataProvider
        contactId={props.contactId}
        fetchCallsHistory={props.fetchCallsHistory}>
        <div className={css.main}>
            <div className={css.scrollWrapper}>
                <Items history={props.history} contacts={props.contacts}/>
            </div>
        </div>
    </DataProvider>;

const Items = ({history, contacts}:ItemsProps) => {
    const mapper = ({id, time, type, contactId}) => {
        try {
            const contact = findContact(contactId, contacts);

            return <Item key={id} time={time} type={type} toContact={contact}/>;
        } catch (e) {
            return null;
        }
    };

    const items = Object.values(history)
        .reverse()
        .map(mapper)
        .filter(item => !!item);

    return <>{items}</>;
};

const Item = ({time, type, toContact:{img, name, phone}}:ItemProps) => {
    const timePrepared = utils.prepareTime(time);
    const title = `${phone}; ${timePrepared}`;

    const iconStyle = {
        backgroundImage: `url(${img})`
    };

    return (
        <div title={title} className={css.item}>
            <div className={css.itemIcon}>
                <div style={iconStyle} className={css.itemIcon_img}/>
            </div>
            <CallTypeIcon type={type}/>
            <p className={css.item_toName}>{timePrepared}</p>
        </div>
    );
};

const CallTypeIcon = ({type}:CallTypeIconProps) => {
    const className = type === CallType.INCOME
        ? css.callType__income
        : css.callType__outcome;

    const classNames = classnames([
        className,
        css.callType
    ]);

    return <div className={classNames}/>;
};