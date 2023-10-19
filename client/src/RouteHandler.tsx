import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Auth from "./modules/auth";

const RouteHandler: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/login" element={<Auth method="login" />} />
        <Route path="/register" element={<Auth method="register" />} />
      </Routes>
    </Layout>
  </Router>
);

export default RouteHandler;
