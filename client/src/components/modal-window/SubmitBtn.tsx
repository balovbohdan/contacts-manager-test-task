import * as React from 'react';
import classnames from 'classnames';

import * as submitBtnCss from '@css/submit-btn.css';

type Props = {
    submit:()=>void;
    isDataValid:boolean;
};

export const SubmitBtn = ({submit, isDataValid}:Props) => {
    const doSubmit = () => isDataValid && submit();

    const className = classnames({
        [submitBtnCss.submitBtn]: true,
        [submitBtnCss.submitBtn__disabled]: !isDataValid
    });

    return <div onClick={doSubmit} className={className}>Submit</div>;
};