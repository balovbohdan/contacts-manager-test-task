import * as React from 'react';
import {shallow} from 'enzyme';

import {SubmitBtn} from './SubmitBtn';

describe('Submit modal window btn', () => {
    it('Should match snapshot', () => {
        const props = {
            submit: jest.fn(),
            isDataValid: true
        };

        const btn = shallow(<SubmitBtn {...props}/>);

        expect(btn).toMatchSnapshot();
    });

    it('Should react on click if data is valid', () => {
        const props = {
            submit: jest.fn(),
            isDataValid: true
        };

        const btn = shallow(<SubmitBtn {...props}/>);

        btn.simulate('click');
        expect(props.submit).toBeCalledTimes(1);
    });

    it('Should not react on click if data is invalid', () => {
        const props = {
            submit: jest.fn(),
            isDataValid: false
        };

        const btn = shallow(<SubmitBtn {...props}/>);

        btn.simulate('click');
        expect(props.submit).toBeCalledTimes(0);
    });
});