const mongoDb = require('mongodb');
const mongoClient = mongoDb.MongoClient;
let _db

const mongoConnect = (cb => { 
mongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5ei76.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useUnifiedTopology: true})
.then(client => {
    _db = client.db();
    cb(client)
    
})
.catch(err => {
    console.log(err);
})
});

const getDb = () => {
    if (_db) {
        return _db
    }
    else{
        throw new Error('no database found');
    }
}





exports.server = mongoConnect;
exports.getDb = getDb;