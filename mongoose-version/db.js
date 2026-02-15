// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

const mongoose = require('mongoose');

let database;

async function getDatabase(){
    // const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    // database = client.db('library');

    // if (!database) {
    //     console.log('No database found!');
    // }
    // return database;
    mongoose.connect('mongodb://127.0.0.1:27017/library')
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });
}

module.exports = {
    getDatabase, 
//    ObjectId
};
