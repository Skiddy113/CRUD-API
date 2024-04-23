const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//get product
app.get("/", (req, res) => {
  res.send("Response from node api");
});

mongoose
  .connect(
    "mongodb+srv://admin:nodeAPI1@backend.ybcklkj.mongodb.net/?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected");
    app.listen(3000, () => {
      console.log("Running on 3000");
    });
  })
  .catch((error) => {
    console.error("Connection Failed", error);
  });
