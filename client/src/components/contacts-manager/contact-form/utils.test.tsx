import * as utils from './utils';

describe('ContactForm utils', () => {
    describe('Form data checker', () => {
        it('Should return boolean', () => {
            const isValid = utils.checkFormData({
                name: 'name',
                img: '/user.svg',
                phone: '+380961514231'
            });

            expect(isValid).toBeType('boolean');
        });

        it('Should return valid value when data is valid', () => {
            const isValid = utils.checkFormData({
                name: 'name',
                img: '/user.svg',
                phone: '+380961515151'
            });

            expect(isValid).toBe(true);
        });

        it('Should return valid value when data is invalid', () => {
            const isValid = utils.checkFormData({
                name: '',
                img: '/user.svg',
                phone: '+380961514132'
            });

            expect(isValid).toBe(false);
        });
    });

    describe('Submit function creator', () => {
        it('Should create function', () => {
            const isDataValid = true;
            const submit = jest.fn();
            const getData = jest.fn();

            const fn = utils.createSubmit(isDataValid, submit, getData);

            expect(fn).toBeType('function');
        });

        it('Should create processor function if data is valid', () => {
            const isDataValid = true;
            const submit = jest.fn();
            const getData = jest.fn();

            const fn = utils.createSubmit(isDataValid, submit, getData);

            fn();

            expect(submit).toBeCalledTimes(1);
            expect(getData).toBeCalledTimes(1);
        });

        it('Should create gag function if data is invalid', () => {
            const isDataValid = false;
            const submit = jest.fn();
            const getData = jest.fn();

            const fn = utils.createSubmit(isDataValid, submit, getData);

            fn();

            expect(submit).toBeCalledTimes(0);
            expect(getData).toBeCalledTimes(0);
        });
    });
});