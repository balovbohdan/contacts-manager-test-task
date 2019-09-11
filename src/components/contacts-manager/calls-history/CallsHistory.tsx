import * as React from 'react';

import {ModalWindow} from '@components/modal-window';

import css from './CallsHistory.css';

export const CallsHistory = () =>
    <ModalWindow title='Title' close={() => alert('close')}>
        <div className={css.main}>
            <div className={css.body}>
            </div>
        </div>
    </ModalWindow>;