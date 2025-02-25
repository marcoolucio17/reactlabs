import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "Usuario",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se refresque la pag en submit
    setIsModalOpen(true); 
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="text-start">
        <h2 className="text-center mb-4">Hola {formData.nombre}!!!</h2>
        <div className="mb-3">
          <label className="form-label">Matricula:</label>
          <input
            type="text"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Edad:</label>
          <input
            type="text"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Universidad:</label>
          <input
            type="text"
            name="universidad"
            value={formData.universidad}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Carrera:</label>
          <input
            type="text"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

     {/* condicional para checar si abrir el modal o no */}
      {isModalOpen && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Datos ingresados</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body text-start">
                <ul>
                  <li>
                    Matricula: {formData.matricula}
                  </li>
                  <li>
                    Nombre: {formData.nombre}
                  </li>
                  <li>
                    Apellidos: {formData.apellidos}
                  </li>
                  <li>
                    Edad: {formData.edad}
                  </li>
                  <li>
                    Universidad: {formData.universidad}
                  </li>
                  <li>
                    Carrera: {formData.carrera}
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fondo oscuro del modal */}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};
