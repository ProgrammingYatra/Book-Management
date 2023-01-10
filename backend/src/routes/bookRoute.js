const express = require("express");
const {
  createBooks,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const { authentication, Authorisation } = require("../middleware/auth");

const router = express.Router();

router
  .route("/books")
  .post(authentication, createBooks)
  .get(authentication, getBooks);

router
  .route("/books/:bookId")
  .get(authentication, Authorisation, getBooks)
  .put(authentication, Authorisation, updateBook)
  .delete(authentication, Authorisation, deleteBook);

module.exports = router;
