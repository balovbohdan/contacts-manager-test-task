import * as React from 'react';
import classnames from 'classnames';

import submitBtnCss from '@css/submit-btn.css';

type Props = {
    submit:()=>void;
    isDataValid:boolean;
};

export const SubmitBtn = ({submit, isDataValid}:Props) => {
    const className = classnames({
        [submitBtnCss.submitBtn]: true,
        [submitBtnCss.submitBtn__disabled]: !isDataValid
    });

    return <div onClick={submit} className={className}>Submit</div>;
};