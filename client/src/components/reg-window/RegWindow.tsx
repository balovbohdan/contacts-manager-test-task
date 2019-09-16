import * as React from 'react';

import {ModalWindow} from '@components/modal-window';

type Props = {
    close:()=>void;
};

export const RegWindow = ({close}:Props) =>
    <ModalWindow title='Register' close={close}>
        <h1>Register Modal Window</h1>
    </ModalWindow>;