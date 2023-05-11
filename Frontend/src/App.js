import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Post from "./screens/commentComponent/Post";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
      <div><Post/> </div>
    </BrowserRouter>
   
  );
}

export default App;
