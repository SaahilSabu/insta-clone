import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from './pages/Post';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
