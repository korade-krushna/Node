import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://root:root@mongo.jmu5fi9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connect() {
  try {
    await client.connect();
    await client.db("assignments").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function getClient() {
  return client;
}

export { connect, getClient };
