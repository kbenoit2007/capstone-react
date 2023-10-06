import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Profile from "./pages/Profile/Profile";
import Book from "./pages/Book/Book";
import ViewBook from "./pages/ViewBook/ViewBook";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header"
import SelectCoverPage from "./pages/SelectCoverPage/SelectCoverPage";
import BookBuilderPage from "./pages/BookBuilderPage/BookBuilderPage";



//Components
import ImageUpload from "./components/ImageUpload/ImageUpload";


// import {useParams} from 'react-router-dom'

// const {id} = useParams
// console.log("The Params "+id)

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />

    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="user/:userId" element={<Profile />} />
      <Route path="user/:userId/bookbuilder" element={<BookBuilderPage />} />
      <Route path="user/:userId/book/:bookId" element={<Book />} />
      <Route path="user/:userId/viewbook/:bookId" element={<ViewBook />} />
      {/* <Route path="user/:userId/book/" element={<Book />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    
    </BrowserRouter>
     
      {/* <ImageUpload /> */}
    </>
  );
}

export default App;
