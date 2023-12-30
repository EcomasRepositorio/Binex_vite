import React from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
export const StudentTable = ({ students, onDelete, onEdit }) => {



  const viewPDF = (pdfFileName) => {
    if (pdfFileName) {
<<<<<<< HEAD
      const pdfURL = `https://binex.edu.pe:5000/server/pdf/${pdfFileName}`;
=======
      const pdfURL = `https://binex.edu.pe:3000/server/pdf/${pdfFileName}`;
>>>>>>> 2a98695d84f433837875b64dc63587bd4b4bc759
      window.open(pdfURL, '_blank');
    }
  };

  return (
    <>
    
    <Container>
    <Table className="my-5">
    <thead>
        <tr>
          <th>#</th>
          <th>DNI</th>
          <th>Nombre</th>
          <th>Código</th>
          <th>Actividad Académica</th>
          <th>Participación</th>
          <th>Instituciones</th>
          <th>Horas</th>
          <th>Fecha</th>
          <th>PDF</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.DNI}>
            <td>{index + 1}</td>
            <td>{student.DNI}</td>
            <td>{student.Nombre}</td>
            <td>{student.Codigo}</td>
            <td>{student.ActividadAcademica}</td>
            <td>{student.Participacion}</td>
            <td>{student.Instituciones}</td>
            <td>{student.Horas}</td>
            <td>{student.Fecha}</td>
            <td>
            {student.pdf && (
                <button className="btn btn-primary mr-2 ml-2" onClick={() => viewPDF(student.pdf)}>
                  Ver PDF
                </button>
              )}
            </td>
            <td>
              <button className="mx-2" onClick={() => onEdit(student)}>
                <img src="src\assets\SVG\pencil-square.svg"></img>
              </button>
              <button className="mx-2" onClick={() => onDelete(student.Codigo)}>
                <img src="src\assets\SVG\trash2.svg"></img>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
  </Table>
  </Container>
    </>
  );
};