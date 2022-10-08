const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const port = 5100;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully.....");
  })
  .catch((error) => {
    console.log(error.message);
  });

const server = app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
