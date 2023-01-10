const express = require("express");
const User = require("./routes/userRoute");
const Book = require("./routes/bookRoute");
const Review = require("./routes/reviewRoute");
const router=express.Router()

const app = express();

app.use(express.json());

app.use(User);

app.use(Book);

app.use(Review);

router.all("/*", function (req, res) {
    res.status(400).send({
      status: false,
      message: "Make Sure Your Endpoint is Correct !!!",
    });
  });
  

module.exports = app;
