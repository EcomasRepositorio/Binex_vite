import React, { useState, useEffect, useRef } from "react";
import { StudentForm } from "./StudentForm";
import { StudentTable } from "./StudentTable";
import * as XLSX from "xlsx";
import { useAuth0 } from '@auth0/auth0-react';
import NavDash from "./NavDash";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




export const Students = () => {
  const { isAuthenticated, user } = useAuth0();
  const topOfPageRef = useRef(null);
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

  useEffect(() => {
    setIsLoading(true);

    fetch("https://binex.edu.pe:5000/server/students")
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
        console.log("Acción exitosa:", data);
        setShouldReloadData(true);
      })
      .catch((error) => {
        console.error("Error al realizar la acción HTTP:", error);
      });
  };

  const handleAddStudent = (newStudentData) => {
    if (selectedStudent && selectedStudent.id_estudiante) {
      handleHttpAction(
        `https://binex.edu.pe:5000/server/students/update/${selectedStudent.id_estudiante}`,
        "PUT",
        newStudentData
      );
      setIsEditingStudent(false);
      setSelectedStudent(null);
    } else {
      handleHttpAction(
        "https://binex.edu.pe:5000/server/students/save",
        "POST",
        newStudentData
      );
      setIsAddingStudent(false);
    }

    topOfPageRef.current.scrollIntoView({ behavior: "smooth" });
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

    topOfPageRef.current.scrollIntoView({ behavior: "smooth" });
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
      `https://binex.edu.pe:5000/server/students/delete/${studentCodigo}`,
      "DELETE"
    );

    const updatedStudents = data.filter(
      (student) => student.Codigo !== studentCodigo
    );  
    setData(updatedStudents);
    setFilteredStudents(updatedStudents);

    topOfPageRef.current.scrollIntoView({ behavior: "smooth" });
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
        student.Fecha = String(student.Fecha);
        handleHttpAction(
          "https://binex.edu.pe:5000/server/students/save",
          "POST",
          student
        );
      });

      setShouldReloadData(true);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSearch = () => {
    
    const searchTerm = searchValue.trim().toLowerCase();

    if (searchTerm === "") {
      // Si el término de búsqueda está vacío, mostramos todos los estudiantes
      setFilteredStudents(data);
    } else {
      // Filtramos los estudiantes por DNI
      const filtered = data.filter(student => {
        const studentDNI = String(student.DNI).trim().toLowerCase();
       
        return studentDNI === searchTerm;
      });

      setFilteredStudents(filtered);
    }
   
  };


 
 
// PARA LIMPIAR LOS DATOS INSERTADOS
  const handleClear = () => {
    setSearchValue('');
    setIsSearching(false);
    setHasSearchResult(false);
   
    
  }; 

  const handleShowAll = () => {
    setShouldReloadData(true);
    setShouldShowAll(true);
  };

  useEffect(() => {
    setIsLoading(true);
  
    if (shouldReloadData) {
      fetch("https://binex.edu.pe:5000/server/students")
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
    }
  }, [shouldReloadData]);
  
  

  if (!isAuthenticated || (isAuthenticated && user.email !== 'cimade.educacion@gmail.com')) {
    return (
      <div className="flex justify-center align-middle text-2xl p-4">
        <h1 className="uppercase font-bold p-1">No tienes acceso a esta página.</h1>
        <img className="h-10" src="src\assets\IMG\sad.png" alt="Access Denied" />
      </div>
    );
  }

  return (
    <div>
      <div ref={topOfPageRef}></div>
      <NavDash />
      <h2 className="font-semibold p-3 text-center text-5xl">Administración de estudiantes</h2>

      {isLoading ? (
        <div className="flex justify-center align-middle">
          <img src="src\assets\landing2.gif" alt="Loading" />
        </div>
      ) : (
        <div>
          <Container>
          <InputGroup>
        <Form.Control
         placeholder="Buscar por DNI"
         aria-label="Recipient's username with two button addons"
         value={searchValue}
         onChange={(e) => setSearchValue(e.target.value)}
         />
         <br />
         <Button variant="outline-primary"  onClick={() => { handleSearch(); setIsSearching(true);}}>
            Buscar
          </Button>
          <Button variant="outline-danger" onClick={() => handleClear()} >
            Limpiar
          </Button>
          <Button variant="outline-primary" onClick={() => { handleSearch(); setIsSearching(true);}} className="mr-6" >
            Regresar
          </Button>
            <Button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 hover:bg-green-700 active:bg-blue-800" onClick={() => setIsAddingStudent(true)}>
           Agregar estudiante
            </Button>
             <Button className="bg-green-500 hover:bg-green-700 active:bg-green-800 hover:bg-green-700 active:bg-green-800" onClick={() => document.getElementById("importExcelInput").click()}>
           Agregar por excel
            </Button>
            
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

export default Students;
