import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
  Table,
  Button,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class App extends React.Component {
  state = {
    data: [],
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      pelicula: "",
    },
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/actores")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }

  refetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/actores");
      this.setState({ data: response.data, mostrarModalActualizar: false });
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };
  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };
  editar = async (dato) => {
    try {
      await axios.put(`http://localhost:8080/actores/${dato.id}`, dato);
      this.refetchData();
      this.cerrarModalActualizar();
    } catch (error) {
      console.error("Error al actualizar el dato:", error);
    }
  };
  eliminar = async (dato) => {
    const opcion = window.confirm(
      "Estás Seguro que deseas eliminar el elemento " + dato.id + "?"
    );
    if (opcion === true) {
      try {
        await axios.delete(`http://localhost:8080/actores/${dato.id}`);
        this.refetchData();
      } catch (error) {
        console.error("Error al eliminar el dato:", error);
      }
    }
  };
  insertar = async () => {
    const valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;

    try {
      await axios.post("http://localhost:8080/actores", valorNuevo);
      this.cerrarModalInsertar();
      this.refetchData();
    } catch (error) {
      console.error("Error al insertar el dato:", error);
    }
  };
  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <br />
          <Table bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Película</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.pelicula}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label> Id:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            <FormGroup>
              <label>Nombre:</label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            <FormGroup>
              <label>Película:</label>
              <input
                className="form-control"
                name="pelicula"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.pelicula}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar nombre</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id: </label>
              <input
                className="form-control"
                readOnly
                type="text"
                // para evitar colisiones de ids
                value={
                  this.state.data.length > 0
                    ? Math.max(...this.state.data.map((d) => d.id)) + 1
                    : 1
                }
              />
            </FormGroup>
            <FormGroup>
              <label>Nombre: </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Película: </label>
              <input
                className="form-control"
                name="pelicula"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar{" "}
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
