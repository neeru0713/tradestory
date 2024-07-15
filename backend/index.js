const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const envFile = ".env";
dotenv.config({ path: path.resolve(__dirname, '..', envFile) });

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const mongoUrl = process.env.MONGODB_URL;

// MongoDB connection
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


const port = process.env.PORT || 8080; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});