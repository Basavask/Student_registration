const getDB = require('../../util/db-connect').getDb;

class StudentInfo {
    constructor(username, dob, email, nationality, gender) {
        this.username = username;
        this.dob = dob;
        this.email = email;
        this.nationality = nationality;
        this.gender = gender;
    }

    saveStudentInfo() {
        const db = getDB();
        return db.collection('studentInfo').insertOne(this).then(
            (result) => {
                console.log('studentInfo Insert Successfully...');
                return true;
            }
        ).catch((err) => {
            console.log('err,', err);
            throw err;
        });
    }

    static fetchAllStudents() {
        const db = getDB();
        return db.collection('studentInfo').find().toArray().then(
            (result) => {
                return result;
            }
        ).catch((err) => {
            console.log('err in fetching data..', err);
            throw err;
        });
    }
}

module.exports = StudentInfo;