const getDb = require('../database').getDb;
const ObjectID = require('mongodb').ObjectId;

class Appointment {

    static save(data, cb) {
        const db = getDb();
        db.collection('appointments').insertOne(data, (err, result) => {
            if(err){
                throw new Error('could not add appointment');
            }
            console.log('appointment successfully added');
            cb();
        })
    }

    static fetch(cb) {
        const db = getDb();
        db.collection('appointments').find({}).toArray((err, result) => {
            if (err){
                throw new Error(err)
            }
            cb(result)
        })
    }

    static update(id, cb) {
        const db = getDb();
        const o_id = ObjectID(id);
        db.collection('appointments').updateOne({_id:o_id}, {$set: {appointmentStatus:'complete'}}, (err, result) => {
            if (err) {
                throw new Error('not updated');
            }
            cb();
        })
    }

}


module.exports = Appointment;