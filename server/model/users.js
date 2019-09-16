const db = require('./db');
const {genRndNumber} = require('../lib/math');
const userUtils = require('../lib/entities/user/utils');

/**
 * @param props
 *     @param {string} props.pass
 *     @param {string} props.name
 *     @param {string} props.phone
 *
 *     @return {Promise<{id, name, phone}>}
 */
function createUser({pass, name, phone}) {
    const id = genRndNumber();

    const cb = ({pass, salt}) => {
        const user = { id, name, phone };

        db.push('/users', { salt, pass, ...user });

        return user;
    };

    return userUtils
        .genPassHash({ name, phone, pass })
        .then(cb);
}

module.exports = {
    createUser
};