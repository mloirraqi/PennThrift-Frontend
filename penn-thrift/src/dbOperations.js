const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://alexscott:uGL75OxpdUYTjjTq@pennthriftbackend.stiff.mongodb.net/PennThriftBackend?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 });

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await listDatabases(client);

    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } catch(e) {
      console.error(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.e);