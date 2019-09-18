import {CallType} from '@lib/entities/calls-history';
import {CallsHistory} from '@lib/entities/calls-history/types';

import * as utils from './utils';

describe('Calls history utils', () => {
    describe('Calls history filter', () => {
        it('Should filter calls history', () => {
            const callsHistory:CallsHistory = {
                1: {
                    id: 1,
                    contactId: 1,
                    time: 1568728308621,
                    type: CallType.INCOME
                },
                2: {
                    id: 2,
                    contactId: 2,
                    time: 1568728308622,
                    type: CallType.OUTCOME
                },
                3: {
                    id: 3,
                    contactId: 1,
                    time: 1568728308623,
                    type: CallType.OUTCOME
                }
            };

            const contactId = 1;
            const res = utils.filterCallsHistory(contactId, callsHistory);

            const item1 = callsHistory[1];
            const item2 = callsHistory[3];

            expect(res[item1.id]).toBe(item1);
            expect(res[item2.id]).toBe(item2);
        });
    });
});