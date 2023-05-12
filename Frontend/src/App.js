import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        {/* TODO:: Add your routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
