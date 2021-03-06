import * as React from 'react';
import {Provider} from 'react-redux';

import {store} from '@storehouse';

type Props = {
    children:React.ReactNode;
};

export const Redux = ({children}:Props) =>
    <Provider store={store}>
        {children}
    </Provider>;