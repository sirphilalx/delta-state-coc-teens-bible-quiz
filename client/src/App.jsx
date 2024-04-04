import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import QuestionDashboard from "./pages/QuestionDashboard";
import QuestionDetail from "./pages/QuestionDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signIn" Component={SignIn} />
          <Route path="/signUp" Component={SignUp} />
          <Route path="/questionDashboard" Component={QuestionDashboard} />
          <Route path="/question/detail/:id" Component={QuestionDetail} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
