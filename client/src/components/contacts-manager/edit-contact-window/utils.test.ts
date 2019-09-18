import * as utils from './utils';

describe('EditContactWindow utils', () => {
    describe('Submit function creator', () => {
        it('Should create function', () => {
            const id = 1;
            const edit = jest.fn();
            const close = jest.fn();

            const submit = utils.createSubmit(id, close, edit);

            expect(submit).toBeType('function');
        });

        it('Should call passed in functions', () => {
            const id = 1;
            const edit = jest.fn();
            const close = jest.fn();

            const submit = utils.createSubmit(id, close, edit);

            submit({
                name: 'name',
                img: '/user.svg',
                phone: '+380961524384'
            });

            expect(edit).toBeCalledTimes(1);
            expect(close).toBeCalledTimes(1);
        });
    });
});