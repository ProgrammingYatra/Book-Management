const express = require("express");
const {
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

const router = express.Router();

router.route("/books/:bookId/review").post(createReview);

router
  .route("/books/:bookId/review/:reviewId")
  .put(updateReview)
  .delete(deleteReview);

module.exports = router;
