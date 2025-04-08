import { useEffect, useState } from "react";
import "./App.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CryptoJS from "crypto-js";

function App() {
  const [input, setInput] = useState("");
  const [cipheredText, setCipheredText] = useState("");
  const [decipheredText, setDecipheredText] = useState("");

  const cifrar = (texto) => {
    try {
      return CryptoJS.AES.encrypt(texto, "hu1122").toString();
    } catch (err) {
      return "Error al cifrar";
    }
  };

  const descifrar = (texto) => {
    try {
      const bytes = CryptoJS.AES.decrypt(texto, "hu1122");
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted || "Texto no válido";
    } catch (err) {
      return "Error al descifrar";
    }
  };

  useEffect(() => {
    const encrypted = cifrar(input);
    setCipheredText(encrypted);
    const decrypted = descifrar(cipheredText);
    setDecipheredText(decrypted);
  }, [input]);

  return (
    <Form className="w-100 text-start">
      <Form.Group
        as={Row}
        className="mb-3 align-items-center"
        controlId="formPlaintextInput"
      >
        <Form.Label column sm="2">
          Escriba mensaje:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Texto a cifrar o descifrar..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formCiphered">
        <Form.Label column sm="2">
          Mensaje cifrado:
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly value={cipheredText} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formDeciphered">
        <Form.Label column sm="2">
          Mensaje descifrado:
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly value={decipheredText} />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default App;
