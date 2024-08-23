const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const stripe = require("stripe")(
  "sk_test_51Pqw5D2NKSixjN19dfq1hvOCxk28FX0Dy1jtA92jAzpqKU6gbVWcgAeX9jWMyURC0ghNgyOxmkEt2BFRqOgkjFQy00z7bs0CHC"
);

// middlewear
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// mongodb confiq here
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://softwarelink0:7yUi54ZnXawjqrFp@cluster0.uykxyjc.mongodb.net/book?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const bookCollections = client.db("BookInventory").collection("Books");

    // insert a book to db: Post Method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      // console.log(data);
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    // // get all books from db
    // app.get("/all-books", async (req, res) => {
    //     const books = bookCollections.find();
    //     const result = await books.toArray();
    //     res.send(result)
    // })

    // get all books & find by a category from db
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    // update a books method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const options = { upsert: true };

      // update now
      const result = await bookCollections.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    // delete a item from db
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    // get a single book data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// payment
app.post("/payment", async (req, res) => {
  const { products, email, name, phone } = req.body;

  console.log(products, email, name, phone);

  const lineItems = products.map((product) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Book",
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    customer_email: email,
    metadata: {
      customer_name: name,
      customer_phone: phone,
    },
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({ id: session.id });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
