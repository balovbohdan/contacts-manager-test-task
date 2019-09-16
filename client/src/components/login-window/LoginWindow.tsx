import * as React from 'react';

import {ModalWindow} from '@components/modal-window';

type Props = {
    close:()=>void;
};

export const LoginWindow = ({close}:Props) =>
    <ModalWindow title='Login' close={close}>
        <h1>Login Window Body</h1>
    </ModalWindow>;