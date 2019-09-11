import {Home} from '@routes/home';
import {Contacts} from '@routes/contacts';

export type Route = {
    component;
    path:string;

    exact?:boolean;
};

export const paths = {
    home: '/',
    contacts: '/contacts'
};

export const routes:Route[] = [
    {
        exact: true,
        path: paths.home,
        component: Home
    },
    {
        path: paths.contacts,
        component: Contacts
    }
];

export default routes;