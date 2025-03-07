import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Layout />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Perfil" element={<Perfil />}></Route>
        <Route path="Inicio" element={<Inicio />}></Route>
        <Route path="*" element={<Inicio />}></Route>
      </Routes>
    </div>
  );
}

export default App
