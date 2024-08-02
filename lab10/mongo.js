const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI

const dbName = 'sampleDB'; // Replace with your database name
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        await insertDocument(db);
        await findDocuments(db);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

async function insertDocument(db) {
    const collection = db.collection('documents');
    const result = await collection.insertOne({ name: 'John Doe', age: 30 });
    console.log(`Document inserted with _id: ${result.insertedId}`);
}

async function findDocuments(db) {
    const collection = db.collection('documents');
    const cursor = collection.find();
    await cursor.forEach(doc => {
        console.log(doc);
    });
}
main().catch(console.error);