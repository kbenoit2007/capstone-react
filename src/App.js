import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Profile from "./pages/Profile/Profile";
import Book from "./pages/Book/Book";
import RegisterPage from "./pages/RegisterPage/RegisterPage";



//Components
import ImageUpload from "./components/ImageUpload/ImageUpload";

// import {useParams} from 'react-router-dom'

// const {id} = useParams
// console.log("The Params "+id)

function App() {
  return (
    <>
    <BrowserRouter>
    <Link to={"/"}>
    <div>Capstone</div>

    </Link>
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="user/:userId" element={<Profile />} />
      <Route path="user/:userId/book/:bookId" element={<Book />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    
    </BrowserRouter>
     
      {/* <ImageUpload /> */}
    </>
  );
}

export default App;
