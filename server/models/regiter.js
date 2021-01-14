const getDB = require('../../util/db-connect').getDb;

class RegisterUser {
    constructor(firstName, lastName, userName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
    }

    saveUser() {
        const db = getDB();
        return db.collection('users').insertOne(this).then(
            (result) => {
                console.log('Insert Successfully...');
                return true;
            }
        ).catch((err) => {
            console.log('err,', err);
            throw err;
        });
    }

    static fetchAllUsers() {
        const db = getDB();
        return db.collection('users').find().toArray().then(
            (result) => {
                return result;
            }
        ).catch((err) => {
            console.log('err in fetching data..', err);
            throw err;
        });
    }

    static fetchSingleUser(userName) {
        const db = getDB();
        return db.collection('users').find({ userName: userName }).next().then(
            (result) => {
                return result;
            }
        ).catch((err) => {
            console.log('err in fetching data for single user..', err);
            throw err;
        });
    }
}

module.exports = RegisterUser;