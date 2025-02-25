import React, { useState } from "react";

export const Form = () => {

  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "Usuario",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // para prevenir que se refresque innecesariamente la pag
    console.log(formData);
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="text-start">
      <h2 className="text-center mb-4">Hola {formData.nombre},</h2>
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
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
  
};
