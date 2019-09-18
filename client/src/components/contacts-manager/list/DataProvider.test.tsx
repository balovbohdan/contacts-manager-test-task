import * as React from 'react';
import {mount, shallow} from 'enzyme';

import {DataProvider} from './DataProvider';

describe('Contacts list data provider', () => {
    it('Should match snapshot', () => {
        const props = {
            fetchContacts: jest.fn()
        };

        const provider = shallow(<DataProvider {...props}>Foo</DataProvider>);

        expect(provider).toMatchSnapshot();
    });

    it('Should call data fetcher function', () => {
        const props = {
            fetchContacts: jest.fn()
        };

        mount(<DataProvider {...props}>Foo</DataProvider>);

        expect(props.fetchContacts).toBeCalledTimes(1);
    });
});