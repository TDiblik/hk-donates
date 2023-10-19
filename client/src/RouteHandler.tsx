import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./modules/login";

const RouteHandler: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);

export default RouteHandler;
