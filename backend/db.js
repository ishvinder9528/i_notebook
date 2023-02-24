const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/";
const connectToMongoose = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(mongoURI, () => {
    console.log("Connecting to Mongoose Successfully");
  });
};

module.exports = connectToMongoose;

