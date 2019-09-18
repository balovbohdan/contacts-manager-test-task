import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {ContactForm} from './ContactForm';
import * as css from '../../modal-window/SubmitBtn.css';

describe('ContactForm', () => {
    it('Should match snapshot', () => {
        const props = {
            submit: jest.fn()
        };

        const form = shallow(<ContactForm {...props}/>);

        expect(form).toMatchSnapshot();
    });

    it('Should react on submit btn click', () => {
        const props = {
            submit: jest.fn(),
            def: {
                tip: 'tip',
                name: 'name',
                phone: '+380961514231'
            }
        };

        const form = mount(<ContactForm {...props}/>);

        form.find(`.${css.submitBtn}`).simulate('click');
        expect(props.submit).toBeCalledTimes(1);
    });
});