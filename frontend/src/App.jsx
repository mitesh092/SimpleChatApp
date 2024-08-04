import "./App.css";
import SignUpRoute from "./pages/Signup/SignUpRoute";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUpRoute />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
