import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const onLogin = () => {
    // Suponiendo que la validación es exitosa
    navigate("/Perfil");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
