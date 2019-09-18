import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {DataProvider} from './DataProvider';

describe('CallsHistory data provider', () => {
    it('Should match snapshot', () => {
        const props = {
            contactId: 1,
            fetchCallsHistory: jest.fn()
        };

        const provider = shallow(<DataProvider {...props}>Foo</DataProvider>);

        expect(provider).toMatchSnapshot();
    });

    it('Should call data fetcher function', () => {
        const props = {
            contactId: 1,
            fetchCallsHistory: jest.fn()
        };

        mount(<DataProvider {...props}>Foo</DataProvider>);
        expect(props.fetchCallsHistory).toBeCalledTimes(1);
    });
});