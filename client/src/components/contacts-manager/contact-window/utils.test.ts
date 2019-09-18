import * as utils from './utils';

describe('ContactWindow utils', () => {
    describe('Time preparer', () => {
        it('Should prepare time', () => {
            const time = 1568728308621;
            const timePrepared = utils.prepareTime(time);

            expect(timePrepared).toBeType('string');
        });
    });
});