import * as utils from './utils';

describe('Registration window utils', () => {
    describe('Form data checker', () => {
        it('Should check for data correctly with valid data', () => {
            const isValid = utils.checkFormData({
                pass: '1111',
                name: 'name',
                phone: '+380986512593'
            });

            expect(isValid).toBe(true);
        });

        it('Should check data correctly with invalid data', () => {
            const isValid = utils.checkFormData({
                pass: '',
                name: '',
                phone: '+380954320654'
            });

            expect(isValid).toBe(false);
        });
    });
});