import React, { useState, useEffect } from "react";
import { StudentForm } from "./StudentForm";
import { StudentTable } from "./StudentTable";
import * as XLSX from "xlsx";
import { useAuth0 } from '@auth0/auth0-react';
import NavDash from "./NavDash";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";

export const Students = () => {
  const { isAuthenticated, user } = useAuth0();
  
  const [data, setData] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [isEditingStudent, setIsEditingStudent] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({
    Nombre: "",
    DNI: "",
    Codigo: "",
    ActividadAcademica: "",
    Participacion: "",
    Instituciones: "",
    Horas: 0,
    Fecha: "",
    PDF: { type: "", data: [] },
  });
  const [shouldReloadData, setShouldReloadData] = useState(false);
  const [searchValue, setSearchValue] = useState('');

/*
  useEffect(() => {
    if (isAuthenticated) {
      console.log("Usuario autenticado:", user);
      // const userName = user.name;
      // const userEmail = user.email;
      // const userPicture = user.picture;
    }
  })*/

  useEffect(() => {
    setIsLoading(true);

<<<<<<< HEAD
    fetch("https://binex.edu.pe:5000/server/students")
=======
    fetch("https://binex.edu.pe:3000/server/students")
>>>>>>> 2a98695d84f433837875b64dc63587bd4b4bc759
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setFilteredStudents(data.results);
        setIsLoading(false);
        setShouldReloadData(false);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setIsLoading(false);
      });
  }, [shouldReloadData]);

  const handleHttpAction = (url, method, body) => {
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Action successful:", data);
        setShouldReloadData(true);
      })
      .catch((error) => {
        console.error("Error performing HTTP action:", error);
      });
  };

  const handleAddStudent = (newStudentData) => {
    if (selectedStudent && selectedStudent.id_estudiante) {
      handleHttpAction(
<<<<<<< HEAD
        `https://binex.edu.pe:5000/server/students/update/${selectedStudent.id_estudiante}`,
=======
        `https://binex.edu.pe:3000/server/students/update/${selectedStudent.id_estudiante}`,
>>>>>>> 2a98695d84f433837875b64dc63587bd4b4bc759
        "PUT",
        newStudentData
      );
      setIsEditingStudent(false);
      setSelectedStudent(null);
    } else {
      handleHttpAction(
<<<<<<< HEAD
        "https://binex.edu.pe:5000/server/students/save",
=======
        "https://binex.edu.pe:3000/server/students/save",
>>>>>>> 2a98695d84f433837875b64dc63587bd4b4bc759
        "POST",
        newStudentData
      );
      setIsAddingStudent(false);
    }
  };

  const handleEditStudent = (student) => {
    setNewStudent({
      Nombre: student.Nombre,
      DNI: student.DNI,
      Codigo: student.Codigo,
      ActividadAcademica: student.ActividadAcademica,
      Participacion: student.Participacion,
      Instituciones: student.Instituciones,
      Horas: student.Horas,
      Fecha: student.Fecha,
      PDF: student.PDF,
    });
    setSelectedStudent(student);
    setIsEditingStudent(true);
  };

  const handleCancel = () => {
    setIsAddingStudent(false);
    setIsEditingStudent(false);
    setSelectedStudent(null);
    setNewStudent({
      Nombre: "",
      DNI: "",
      Codigo: "",
      ActividadAcademica: "",
      Participacion: "",
      Instituciones: "",
      Horas: 0,
      Fecha: "",
      PDF: { type: "", data: [] },
    });
  };

  const handleDeleteStudent = (studentCodigo) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de eliminar este estudiante?"
    );
    if (!confirmDelete) return;

    handleHttpAction(
<<<<<<< HEAD
      `https://binex.edu.pe:5000/server/students/delete/${studentCodigo}`,
=======
      `https://binex.edu.pe:3000/server/students/delete/${studentCodigo}`,
>>>>>>> 2a98695d84f433837875b64dc63587bd4b4bc759
      "DELETE"
    );

    const updatedStudents = data.filter(
      (student) => student.Codigo !== studentCodigo
    );  
    setData(updatedStudents);
    setFilteredStudents(updatedStudents);
  };
  
  
  const handleImportFromExcel = (e) => {
    const file = e.target.files[0];
  
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const students = XLSX.utils.sheet_to_json(worksheet);
  
      students.forEach((student) => {
        // Convertir la propiedad 'Fecha' a una cadena
        student.Fecha = String(student.Fecha);
  
        // Enviar la solicitud HTTP al backend
        handleHttpAction(
<<<<<<< HEAD
          "https://binex.edu.pe:5000/server/students/save",
=======
          "https://binex.edu.pe:3000/server/students/save",
>>>>>>> 2a98695d84f433837875b64dc63587bd4b4bc759
          "POST",
          student
        );
      });
  
      setShouldReloadData(true);
    };
    reader.readAsArrayBuffer(file);
  };
  
  
/*
  if (!isAuthenticated) {
    return <div className="flex justify-center align-middle text-2xl p-4"><h1 className="upercase font-bold p-1">No tienes acceso a esta página.</h1><img className="h-10" src="src\assets\IMG\duke_java.png"></img></div>;
  }*/
  if (!isAuthenticated || (isAuthenticated && user.email !== 'maycolmedina366@gmail.com')) {
    return <div className="flex justify-center align-middle text-2xl p-4"><h1 className="upercase font-bold p-1">No tienes acceso a esta página.</h1><img className="h-10" src="src\assets\IMG\duke_java.png"></img></div>;
  
  }

  return (
    <div style={{}}>
    <NavDash />
    <h2 className="font-semibold p-3 text-center text-5xl">Administración estudiantes</h2>
  
    {isLoading ? (
      <div className="flex justify-center align-middle"><img src="src\assets\loading.gif"></img></div>
    ) : (
      <div>
        <Container>
        <InputGroup>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <Button variant="outline-primary" onClick={() => setIsAddingStudent(true)}>Agregar estudiante</Button>
        <Button variant="outline-primary" onClick={() => document.getElementById("importExcelInput").click()}>Agregar por excel</Button>
      </InputGroup>
        <input
          type="file"
          id="importExcelInput"
          accept=".xls,.xlsx"
          style={{ display: "none" }}
          onChange={handleImportFromExcel}
        />
        </Container>
        
        {isAddingStudent && (
          <StudentForm
            student={newStudent}
            onSave={handleAddStudent}
            onCancel={handleCancel}
          />
        )}
  
        {isEditingStudent && selectedStudent && (
          <StudentForm
            student={newStudent}
            onSave={handleAddStudent}
            onCancel={handleCancel}
          />
        )}
  
  <StudentTable
  students={filteredStudents}
  onDelete={handleDeleteStudent}
  onEdit={handleEditStudent}
/>

      </div>
    )}
  </div>
  
  );
};
export default Students