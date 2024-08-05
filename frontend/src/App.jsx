import "./App.css";
import SignUpRoute from "./pages/Signup/SignUpRoute";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate, } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ?  <Home /> : <Navigate to="/login" />}></Route>
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />}></Route>
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUpRoute /> }></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
