const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/db");

const ItemRoutes = require("./routes/itemRoutes");
const BatchRoutes = require("./routes/batchRoutes");
const CustomerRoutes = require("./routes/customerRoutes");

const app = express();
const port = 8080;

const corsOptions = {
  origin: "http://localhost:3000", // Only allow React frontend
};

app.use(cors());

app.use(express.json());

connectDB(); // 🟢 call the DB function

app.use("/item", ItemRoutes);
app.use("/batch", BatchRoutes);
app.use("/customer", CustomerRoutes);

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
