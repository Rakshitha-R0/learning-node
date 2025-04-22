import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Login from "./component/login";
import SignUp from "./component/signUp";
import ProtectRoutes from "./component/ProtectRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectRoutes>
              <Home />
            </ProtectRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
