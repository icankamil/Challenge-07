import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import App from "./components/App";
import CariPage from "./components/CariPage";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cars" element={<CariPage />} />
    </Routes>
    <Footer />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
