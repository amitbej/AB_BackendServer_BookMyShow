const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//environment variable By default port is 8080
const PORT = process.env.PORT || 8080;
const bookingRouter = require("./Routes/bookingRoutes");
const connectDb = require("./database/database");

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//booking routes
app.use("/api", bookingRouter);

// connecting the database and starting up of the server
connectDb(() => app.listen(PORT, () => console.log("server is listening")));
