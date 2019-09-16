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
    if (userExists(name))
        throw new Error(`Failed to create user.`);

    const id = genRndNumber();

    const cb = ({pass, salt}) => {
        const user = { id, name, phone };

        db.push('/users[]', { salt, pass, ...user });

        return user;
    };

    return userUtils
        .genPassHash({ name, phone, pass })
        .then(cb);
}

/**
 * @param {string} name
 * @return {boolean}
 */
function userExists(name) {
    try {
        const names = getUsersNames();

        return names.includes(name);
    } catch (e) {
        return false;
    }
}

/**
 * @return {string[]}
 */
function getUsersNames() {
    const users = getUsers();

    return users
        ? users.map(user => user.name)
        : [];
}

function getUsers() {
    return db.getData('/users');
}

module.exports = {
    createUser
};