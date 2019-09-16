const {pbkdf2} = require('pbkdf2');

const {genRndNumber} = require('../../../lib/math');

exports.genPassHash = ({name, phone, pass}) =>
    new Promise(resolve => {
        const salt = name + phone + genRndNumber();

        const cb = (_, pass) => {
            pass = pass.toString('utf-8');

            resolve({ salt, pass })
        };

        return pbkdf2(pass, salt, 4, 10, 'sha512', cb);
    });