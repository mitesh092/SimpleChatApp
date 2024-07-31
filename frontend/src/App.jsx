import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MessagesBody from "./Components/MessagesBody";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./AuthenticationComponent/Signup";
import Login from "./AuthenticationComponent/Login";
import PrivateRoute from "./AuthenticationComponent/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route 
          path="/login" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/messagesbody" 
          element={
            <PrivateRoute 
              isAuthenticated={isAuthenticated} 
              element={<MessagesBody />} 
            />
          } 
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
