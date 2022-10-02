const mongoose = require("mongoose");

const connString = process.env.DATABASE_CONNECTION;

const connectDB = async () => {
  try {
    await mongoose.connect(connString);
    console.log("Mongodb connection SUCcESS 💛❤️‍🔥");
  } catch (error) {
    console.log("Mongodb connection FAIL 😝💔😡");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
