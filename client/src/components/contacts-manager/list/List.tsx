import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import css from './List.css';
import * as T from './types';
import {Contact} from '../contact';
import {DataProvider} from './DataProvider';
import {createContactsFetcher} from './contacts-fetcher';

export const List = (props:T.Props) => {
    const {contacts} = props;

    const contactsQty = Object.keys(contacts).length;
    const doFetchContacts = createContactsFetcher(contacts, props.fetchContacts);

    return (
        <DataProvider fetchContacts={doFetchContacts}>
            <Scroller
                contactsQty={contactsQty}
                fetchMore={doFetchContacts}
                hasMore={props.hasMoreContacts}>
                <Items
                    contacts={contacts}
                    toggleContactWindow={props.toggleContactWindow}/>
            </Scroller>
        </DataProvider>
    );
};

const Scroller = ({hasMore, fetchMore, children, contactsQty}:T.ScrollerProps) => {
    const height = window.innerHeight - 170;

    return (
        <InfiniteScroll
            height={height}
            next={fetchMore}
            hasMore={hasMore}
            loader={<Loader/>}
            dataLength={contactsQty}>
            {children}
        </InfiniteScroll>
    );
};

const Items = ({contacts, toggleContactWindow}:T.ItemsProps) => {
    const mapper = contact =>
        <Item
            key={contact.id}
            contact={contact}
            toggleContactWindow={toggleContactWindow}/>;

    const items = Object.values(contacts).map(mapper);

    return <>{items}</>;
};

const Item = ({contact, toggleContactWindow}:T.ItemProps) =>
    <Contact
        contact={contact}
        toggleContactWindow={toggleContactWindow}/>;

const Loader = () =>
    <div className={css.loader}>
        <div className={css.loader_img}/>
    </div>;