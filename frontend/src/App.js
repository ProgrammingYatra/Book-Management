import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import GetBooks from "./pages/book/GetBooks";
import AddBook from "./pages/book/AddBook";
import GetSingleBook from "./pages/book/GetSingleBook";
import UpdateBook from "./pages/book/UpdateBook";
import DeleteBook from "./pages/book/DeleteBook";
import CreateReview from "./pages/book/CreateReview";

const App = () => {
  const token = JSON.parse(localStorage.getItem("data"));
  console.log(token);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/GetBooks" element={<GetBooks />}></Route>
          <Route path="book/:id" element={<GetSingleBook />} />

          <Route path="/Editbook/:id" element={<UpdateBook />} />
          <Route path="/deleteBook/:id" element={<DeleteBook />} />

          <Route path="/books/:bookId/review" element={<CreateReview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
