const express = require("express");
const { connectDB } = require("./config/db");
const { Item } = require("./models");

const ItemRoutes = require("./routes/itemRoutes");

const app = express();
const port = 8080;

app.use(express.json());

connectDB(); // 🟢 call the DB function

app.use("/item", ItemRoutes);

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
