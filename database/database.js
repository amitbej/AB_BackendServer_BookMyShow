const mongoose = require("mongoose");

// mongodb connection url
const connectionString = `mongodb+srv://amitbej:amitbej@cluster0.jz8b9cz.mongodb.net/bookmyshow?retryWrites=true&w=majorityy`;

// function to connect the mongodb database
const connectDb = (server) => {
  // database using string by the MongoDB Atlas 
  mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => console.log("db-connected"))
    .then(() => server())
    .catch((error) => console.log(error));
};

// exporting 
module.exports = connectDb;
