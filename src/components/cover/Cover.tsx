import * as React from 'react';

import css from './Cover.css';

export const Cover = () =>
    <div className={css.main}>
        <Img/>
        <Slogan/>
        <TryItBtn/>
    </div>;

const Img = () =>
    <div className={css.img}/>;

const Slogan = () =>
    <h1 className={css.slogan}>
        <span>CM</span> — awesome <span>C</span>ontacts <span>M</span>anager
    </h1>;

const TryItBtn = () =>
    <div className={css.tryItBtn}>
        <h3 className={css.tryItBtn_txt}>Try it!</h3>
    </div>;