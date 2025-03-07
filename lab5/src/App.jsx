import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="Inicio" element={<Inicio />}></Route>
          <Route path="*" element={<Inicio />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
