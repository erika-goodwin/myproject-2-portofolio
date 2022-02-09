const mongoose = require("mongoose");

const connect = mongoose.connect(process.env.MONGODB_URL, {
  dbName: "portfolio",
});

connect
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log('db connection err: ', err));
