const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/test.env" });

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});






