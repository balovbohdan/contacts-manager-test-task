import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {CallsHistory} from './CallsHistory';
import {CallType} from '@lib/entities/calls-history';

describe('CallsHistory', () => {
    const propsDef = {
        contactId: 1,
        fetchCallsHistory: jest.fn(),
        contacts: [{
            id: 1,
            name: 'name',
            img: '/user.svg',
            phone: '+380961514231'
        }],
        history: {
            1: {
                id: 1,
                contactId: 1,
                time: 1568728308621,
                type: CallType.INCOME
            }
        }
    };

    it('Should match snapshot', () => {
        const props = { ...propsDef };
        const history = shallow(<CallsHistory {...props}/>);

        expect(history).toMatchSnapshot();
    });

    it('Should call history fetcher function', () => {
        const props = {
            ...propsDef,
            fetchCallsHistory: jest.fn()
        };

        mount(<CallsHistory {...props}/>);

        expect(props.fetchCallsHistory).toBeCalledTimes(1);
    });
});