const express = require("express");
const { createUser, loginUser } = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(createUser)

router.route("/login").post(loginUser)




// // ________________________________|| CONTROLLERS ||________________________________-----

// const bookController = require("../controllers/bookController.js"); // BOOK CONTROLLER
// const reviewController = require("../controllers/reviewController.js"); // REVIEW CONTROLLER
// const userController = require("../controllers/userController.js"); // USER CONTROLLER

// //________________________________|| MIDDLEWARE ||___________________________________

// const {
//   authentication,
//   Authorisation,
//   bookAuthorization,
// } = require("../middleware/auth.js");

// // ________________________________|| BOOK ||________________________________

// router.post("/books", authentication, bookController.createBooks);
// router.get("/books", authentication, bookController.getBooks);
// router.get(
//   "/books/:bookId",
//   authentication,
//   Authorisation,
//   bookController.getBookById
// );
// router.put(
//   "/books/:bookId",
//   authentication,
//   Authorisation,
//   bookController.updateBook
// );
// router.delete(
//   "/books/:bookId",
//   authentication,
//   Authorisation,
//   bookController.deleteBook
// );

// // ________________________________|| REVIEW ||________________________________

// router.post("/books/:bookId/review", reviewController.createReview);
// router.put("/books/:bookId/review/:reviewId", reviewController.updateReview);
// router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview);

// // ________________________________|| ROUTER VALIDATION ||________________________________-----


 module.exports = router;
