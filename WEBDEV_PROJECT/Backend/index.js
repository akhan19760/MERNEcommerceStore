const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./Controllers/user");
const authRoute = require("./Controllers/auth");
const productRoute = require("./Controllers/products");
const cartRoute = require("./Controllers/cart");
const orderRoute = require("./Controllers/orders");
const stripeRoute = require("./Controllers/stripe");
const cors = require("cors");


mongoose
  .connect(process.env.mongodb_url)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});