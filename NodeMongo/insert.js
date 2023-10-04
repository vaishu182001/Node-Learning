const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = "mongodb+srv://annagirivaishnavi2:vitap123@cluster0.gdwh1ca.mongodb.net/test?retryWrites=true&w=majority";

// Create a MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to insert data into a MongoDB collection
async function insertData() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access the target database and collection
    const database = client.db("Sample"); // Replace with your database name
    const collection = database.collection("samcol"); // Replace with your collection name

    // Create the document you want to insert
    const documentToInsert = {
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com"
    };

    // Insert the document into the collection
    const result = await collection.insertOne(documentToInsert);

    // Check the result
    if (result.insertedCount === 1) {
      console.log("Document inserted successfully!");
    } else {
      console.log("Failed to insert the document.");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    // Close the MongoDB client to release resources
    await client.close();
  }
}

// Call the insertData function to insert the document
insertData();
