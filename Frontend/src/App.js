import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import FeedScreen from "./screens/FeedScreen";
import NotificationScreen from "./screens/NotificationScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/feed" element={<FeedScreen />} />
        <Route path="/feed/notification" element={<NotificationScreen />} />
        {/* TODO:: Add your routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
