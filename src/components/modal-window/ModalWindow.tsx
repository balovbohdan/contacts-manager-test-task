import * as React from 'react';

import {Fader} from '@components/fader';

import css from './ModalWindow.css';

type Props = {
    close:Close;
    title:string;
    children:React.ReactNode;
};

type HeadProps = {
    close:Close;
    title:string;
};

type CloseBtnProps = {
    close:Close;
};

type Close = ()=>void;

export const ModalWindow = ({close, title, children}:Props) => {
    const onWrapperClick = createOnWrapperClick(close);

    return (
        <Fader>
            <div className={css.main} onClick={onWrapperClick}>
                <div className={css.body}>
                    <Head close={close} title={title}/>
                    {children}
                </div>
            </div>
        </Fader>
    );
};

const Head = ({close, title}:HeadProps) =>
    <div className={css.head}>
        <h5>{title}</h5>
        <CloseBtn close={close}/>
    </div>;

const CloseBtn = ({close}:CloseBtnProps) =>
    <div onClick={close} className={css.closeBtn}>
        <div className={css.closeBtn_img}/>
    </div>;

const createOnWrapperClick = (close:Close) =>
    ({target}) => {
        const isMain = target.classList.contains(css.main);

        if (isMain) close();
    };