import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
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
import axios from "axios";
import LoginRegister from "./components/LoginRegister/LoginRegister";


//Components
import ImageUpload from "./components/ImageUpload/ImageUpload";


function App() {
  const [auth,setAuth ]= useState(false)
  const [name,setName] = useState('')
  const [message, setMessage] = useState('')



  axios.defaults.withCredentials = true
  useEffect(() =>{
    axios.get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/verify`)
    .then(res => {
       console.log(res)
        if(res.data.Status === "Success"){
            setAuth(true)
            setName(res.data.name)
        } else{
            setAuth(false)
            setMessage(res.data.Message)

        }
    })
   },[])

  return (
    <>
    <BrowserRouter>
    <Header />

    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} /> 
      {
        auth ?
        <>
      <Route path="user/:userId" element={<Profile />} />
      <Route path="user/:userId/bookbuilder" element={<BookBuilderPage />} />
      <Route path="user/:userId/book/:bookId" element={<Book />} />
      <Route path="user/:userId/viewbook/:bookId" element={<ViewBook />} />
      <Route path="user/:userId/book/" element={<Book />} />
        <Route path="*" element={<NotFound />} />
        </>
        :
        <>
        <>Not Logged In</>
        </>
      }


      {/* */}
      
    </Routes>
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
