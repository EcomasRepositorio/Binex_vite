import React, { useState, useEffect } from "react";

export const StudentForm = ({ student, onSave, onCancel }) => {
  const [studentData, setStudentData] = useState(student);

  useEffect(() => {
    setStudentData(student);
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setStudentData((prevState) => ({
      ...prevState,
      [name]: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentData.DNI || !studentData.Nombre || !studentData.ActividadAcademica) {
      alert('DNI, Nombre y Actividad Académica son campos obligatorios.');
      return;
    }

    const formData = new FormData();
    for (const key in studentData) {
      if (key === 'PDF') {
        formData.append(key, studentData[key]);
      } else {
        formData.append(key, studentData[key]);
      }
    }

    try {
      const response = await fetch('https://binex.edu.pe:8443/server/students/save', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error saving student data');
      }

      const data = await response.json();
      onSave(data);

      onCancel();
    } catch (error) {
      console.error('Error:', error.message);

    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="dniInput" className="form-label">
          DNI:
        </label>
        <input
          type="text"
          id="dniInput"
          className="form-control"
          name="DNI"
          value={studentData.DNI}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nombreInput" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          id="nombreInput"
          className="form-control"
          name="Nombre"
          value={studentData.Nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="codigoInput" className="form-label">
          Código:
        </label>
        <input
          type="text"
          id="codigoInput"
          className="form-control"
          name="Codigo"
          value={studentData.Codigo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="actividadInput" className="form-label">
          Actividad Académica:
        </label>
        <input
          type="text"
          id="actividadInput"
          className="form-control"
          name="ActividadAcademica"
          value={studentData.ActividadAcademica}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="participacionInput" className="form-label">
          Participación:
        </label>
        <input
          type="text"
          id="participacionInput"
          className="form-control"
          name="Participacion"
          value={studentData.Participacion}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="institucionesInput" className="form-label">
          Instituciones:
        </label>
        <input
          type="text"
          id="institucionesInput"
          className="form-control"
          name="Instituciones"
          value={studentData.Instituciones}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="horasInput" className="form-label">
          Horas:
        </label>
        <input
          type="text"
          id="horasInput"
          className="form-control"
          name="Horas"
          value={studentData.Horas}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fechaInput" className="form-label">
          Fecha:
        </label>
        <input
          type="text"
          id="fechaInput"
          className="form-control"
          name="Fecha"
          value={studentData.Fecha}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pdfInput" className="form-label">
          PDF:
        </label>
        <input
          type="file"
          id="pdfInput"
          className="form-control"
          name="PDF"
          accept="application/pdf"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit" className="btn btn-primary m-2">
          Guardar
        </button>
        <button type="button" className="btn btn-warning m-2" onClick={onCancel}>
          Cancelar
        </button>
    </form>
    </div>
  );
};
