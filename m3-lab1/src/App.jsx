import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

const data = [
  { id: 1, nombre: "Leonardo DiCaprio", pelicula: "Inception" },
  { id: 2, nombre: "Robert Downey Jr.", pelicula: "Iron Man" },
  { id: 3, nombre: "Gael García Bernal", pelicula: "Amores Perros" },
  { id: 4, nombre: "Tom Hanks", pelicula: "Forrest Gump" },
  { id: 5, nombre: "Denzel Washington", pelicula: "Training Day" },
  { id: 6, nombre: "Brad Pitt", pelicula: "Fight Club" },
  { id: 7, nombre: "Keanu Reeves", pelicula: "The Matrix" },
  { id: 8, nombre: "Christian Bale", pelicula: "The Dark Knight" },
  { id: 9, nombre: "Morgan Freeman", pelicula: "The Shawshank Redemption" },
  { id: 10, nombre: "Al Pacino", pelicula: "The Godfather" },
  { id: 11, nombre: "Marlon Brando", pelicula: "Apocalypse Now" },
  { id: 12, nombre: "Heath Ledger", pelicula: "The Dark Knight" },
  { id: 13, nombre: "Joaquin Phoenix", pelicula: "Joker" },
  { id: 14, nombre: "Samuel L. Jackson", pelicula: "Pulp Fiction" },
  { id: 15, nombre: "Tom Cruise", pelicula: "Top Gun: Maverick" },
  { id: 16, nombre: "Matt Damon", pelicula: "Good Will Hunting" },
  { id: 17, nombre: "Harrison Ford", pelicula: "Indiana Jones" },
  { id: 18, nombre: "Ryan Gosling", pelicula: "La La Land" },
  { id: 19, nombre: "Will Smith", pelicula: "The Pursuit of Happyness" },
  { id: 20, nombre: "Javier Bardem", pelicula: "No Country for Old Men" }
];


class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      pelicula: "",
    },
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
  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].pelicula = dato.pelicula;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };
  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.id
    );
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };
  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
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
                value={this.state.data.length + 1}
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
