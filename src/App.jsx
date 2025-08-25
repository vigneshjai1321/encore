import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Appointment from "./pages/Appointments/Appointments";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
         
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;
