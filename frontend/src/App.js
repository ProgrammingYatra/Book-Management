import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetBook from "./pages/book/GetBook";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";

const App = () => {
  const token = JSON.parse(localStorage.getItem("data"));
  console.log(token);
  return (
    <>
      <BrowserRouter>
        <Navbar token={token} />
        <Routes>
          <Route path="/" element={<Home token={token} />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          {token ? (
            <Route path="/" element={<Home />}></Route>
          ) : (
            <Route path="/Login" element={<Login />}></Route>
          )}
          <Route path="/" element={<Home />}></Route>
          <Route path="/GetBook" element={<GetBook />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
