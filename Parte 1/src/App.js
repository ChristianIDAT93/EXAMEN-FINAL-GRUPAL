import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, actor: "Leonardo Dicaprio", pelicula: "Titanic" },
  { id: 2, actor: "Adam Sandler", pelicula: "Como si fuera la primera vez" },
  { id: 3, actor: "Sandra Bullock", pelicula: "Alocada Obsesión" },
  { id: 4, actor: "Al Pacino", pelicula: "Caracortada" },
  { id: 5, actor: "Jackie Chan", pelicula: "El reino prohibido" },
  { id: 6, actor: "Sylvester Stallone", pelicula: "Rocky IV" },
  { id: 7, actor: "Cameron Diaz", pelicula: "La Mascara" },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      actor: "",
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
      if (dato.id == registro.id) {
        arreglo[contador].actor = dato.actor;
        arreglo[contador].pelicula = dato.pelicula;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
    alert('Se han modificado los datos');
  };

  eliminar = (dato) => {
    var opcion = window.confirm(
      "Desea eliminar al actor con id: " + dato.id
    );
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
      alert('Se ha eliminado el registro');
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
    alert('Se han registrado los datos');
  };
  
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <h1 class="animated wobble infinite text-center" id="title-medico">
          EXAMEN FINAL DESARROLLO WEB
        </h1>
        <div class="container">
          <div id="calendar"></div>
        </div>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active text-white alert-link m-auto">
            LISTADO DE ACTORES
          </li>
        </ol>
        <Container>
          <br />
          <Button color="info" onClick={() => this.mostrarModalInsertar()}>
            <FontAwesomeIcon icon={faUserPlus} />
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Actor</th>
                <th>Pelicula</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.actor}</td>
                  <td>{dato.pelicula}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      
                      <FontAwesomeIcon icon={faEdit}/></Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader className="bg-primary text-white">
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Actor:</label>
              <input
                className="form-control"
                name="actor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.actor}
              />
            </FormGroup>

            <FormGroup>
              <label>Pelicula:</label>
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
          <ModalHeader className="bg-info text-white">
            <div>
              <h3>Insertar Personaje</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Actor:</label>
              <input
                className="form-control"
                name="actor"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Pelicula:</label>
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
              Insertar
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
