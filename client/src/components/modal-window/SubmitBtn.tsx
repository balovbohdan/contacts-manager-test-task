import * as React from 'react';
import classnames from 'classnames';

import * as css from './SubmitBtn.css';

type Props = {
    submit:()=>void;
    isDataValid:boolean;
};

export const SubmitBtn = ({submit, isDataValid}:Props) => {
    const doSubmit = () => isDataValid && submit();

    const className = classnames({
        [css.submitBtn]: true,
        [css.submitBtn__disabled]: !isDataValid
    });

    return <div onClick={doSubmit} className={className}>Submit</div>;
};