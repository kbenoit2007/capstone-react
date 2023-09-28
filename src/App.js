import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Profile from "./pages/Profile/Profile";
import Book from "./pages/Book/Book";

//Components
import ImageUpload from "./components/ImageUpload/ImageUpload";

function App() {
  return (
    <>
    <BrowserRouter>
    <div>Capstone</div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="user/:id" element={<Profile />} />
      <Route path="user/:id/book/:id" element={<Book />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    
    </BrowserRouter>
     
      {/* <ImageUpload /> */}
    </>
  );
}

export default App;
