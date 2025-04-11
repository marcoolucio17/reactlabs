import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    setShowAlert(true);
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      const token = response.data.token;
      setToken(token);
      console.log("Yipee", token);

      setTimeout(() => {
        setShowAlert(false);
      }, 10000);

    } catch (error) {
      setToken("no");
      console.error("Dou :(", error.response?.data || error.message);
      
      setTimeout(() => {
        setShowAlert(false);
      }, 10000);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1.3rem",
      }}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: "#ffbf5f",
          padding: "50px",
          borderRadius: "10px",
        }}
      >
        <h2>Login</h2>
        <FormGroup style={{ width: "100%" }}>
          <Label>Username</Label>
          <Input
            value={username}
            onChange={handleUserChange}
            name="email"
            type="email"
          />
        </FormGroup>
        <FormGroup style={{ width: "100%" }}>
          <Label for="examplePassword">Password</Label>
          <Input
            value={password}
            onChange={handlePasswordChange}
            name="password"
            type="password"
          />
        </FormGroup>
        <Button color="primary" onClick={login}>
          Login
        </Button>
      </Form>

      {showAlert && token === "no" && (
        <Alert color="danger">
          Falló el login. Intenta con diferentes credenciales.
        </Alert>
      )}

      {showAlert && token !== "no" && (
        <Alert color="success">
          Bienvenido!! Tu JWT Token: {token}
        </Alert>
      )}
    </div>
  );
}

export default App;
