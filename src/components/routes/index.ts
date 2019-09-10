import {Home} from '@routes/home';
import {Contacts} from '@routes/contacts';

export type Route = {
    component;
    path:string;

    exact?:boolean;
};

export const routes:Route[] = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/contacts',
        component: Contacts
    }
];

export default routes;