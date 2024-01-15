import React, { useState } from "react";
import { useFetch } from "../components/useFetch";
import { Header } from "./navigations/Header";
import Footer from "./navigations/Footer";
import ListGroup from "react-bootstrap/ListGroup";
import { Card, Container, Row, Col } from "react-bootstrap";


const Certs = () => {
  const [searchType, setSearchType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { data, loading } = useFetch("https://binex.edu.pe:5000/server/students");
  const [selectedCert, setSelectedCert] = useState(null);

  const handleSearch = (type) => {
    setSearchType(type);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value.trim().toLowerCase(); // Convertir a minúsculas y quitar espacios
    setSearchValue(inputValue);
  };

  const handleRowClick = (cert) => {
    setSelectedCert(cert);
  };

  const renderTable = () => {
    if (!searchValue || loading) {
      return null;
    }

    let filteredData = [];

    if (searchType == "DNI") {
      filteredData = data.results.filter((cert) => cert.DNI == searchValue);
    } else if (searchType == "nombre") {
      // Filtrar solo cuando la búsqueda coincida con el nombre completo
      filteredData = data.results.filter((cert) => {
        const nombre = cert.Nombre || "";
        return nombre.toLowerCase() == searchValue;
      });
    } else if (searchType == "codigo") {
      const foundCert = data.results.find(
        (cert) => cert.Codigo == searchValue
      );
      if (foundCert) {
        return renderFloatingWindow(foundCert);
      }
    }

    if (filteredData.length === 0) {
      return (
        <p className="flex justify-center align-middle uppercase p-2">
          <span className="font-bold p-2  flex justify-center">
            Sin coincidencias.
          </span>
          <img className="h-10" src="src/assets/IMG/sad.png"></img>
        </p>
      );
    }
    let i = 1;

    return (
      <div>
        <table
          id="table_results"
          className="table table-striped table-bordered m-1"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Evento</th>
              <th>Nombre</th>
              <th>Fecha emitido</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((cert, index) => (
              <tr
                className="contend_table"
                key={cert.id}
                onClick={() => handleRowClick(cert)}
              >
                <td>{index + 1}</td>
                <td>{cert.ActividadAcademica}</td>
                <td>{cert.Nombre}</td>
                <td>{cert.Fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const handleWindowClose = () => {
    setSelectedCert(null);
    setSearchType("");
    setSearchValue("");
  };

  const renderFloatingWindow = (cert) => {
    const isModalOpen = !!cert;
    

    return (
      <div>
        {/* Contenido del modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center ">
            <div className="prose bg-white p-12 md:max-w-md mx-auto rounded-lg">
              <Container className="flex justify-end">
                <button onClick={handleWindowClose}>
                  <span className="h-60" aria-hidden="true">
                    &times;
                  </span>
                </button>
              </Container>
              <Container className="flex items-center justify-center mt-[-50px]">
                <img className=" h-64" src="src\assets\IMG\UNP.png" alt="UNP" />
              </Container>
              <Container>
                <ListGroup className="">
                  <ListGroup.Item className="bg-gray-700 font-bold text-white rounded">
                    Organizado por:
                    
                    </ListGroup.Item>
                  <ListGroup.Item>{cert.Instituciones}</ListGroup.Item>
                  <ListGroup.Item className="bg-gray-700 font-bold text-white rounded">Otorgado a:</ListGroup.Item>
                  <ListGroup.Item>
                    {cert.Nombre} <span> ({cert.Participacion})</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-gray-700 font-bold text-white rounded">Nombre del evento:</ListGroup.Item>
                  <ListGroup.Item>{cert.ActividadAcademica}</ListGroup.Item>
                  <ListGroup.Item className="bg-gray-700 font-bold text-white rounded">Créditos/Horas:</ListGroup.Item>
                  <ListGroup.Item>{cert.Horas}</ListGroup.Item>
                  <ListGroup.Item className="bg-gray-700 font-bold text-white rounded">Fecha emisión:</ListGroup.Item>
                  <ListGroup.Item>{cert.Fecha}</ListGroup.Item>
                  
                </ListGroup>
              </Container>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-wrap justify-center items-center ">
          
          <img
            className="h-60 p-2 sm:flex"
            src="src\assets\IMG\UNP.png"
            alt="UNP"
          ></img>
          
        </div>
      </Container>
      <div className="page-content bg-white border-t border-gray-200 ">
        <div className="m-5"></div>
        <div className="container section-area section-sp2">
          <div className="parent_search_certificate text-center mt-5 mb-5">
            <div className="text_search">
              <h1 className="display-4 title-head">Certificados</h1>
              <p className="lead">
                En este módulo podrá realizar la búsqueda de certificados de los
                diferentes eventos ofrecidos por BINEX.
              </p>
              <h3 className="mt-4">Buscar por:</h3>
            </div>
            <div
              className="selections_search mt-4"
              id="selection_search_icon_ecomas"
            >
              <button
                className="btn btn-primary m-2 text-center "
                onClick={() => handleSearch("DNI")}
              >
                <span className="flex justify-center">
                  <img
                    className="invert mx-2"
                    src="src\assets\SVG\person-bounding-box.svg"
                  ></img>
                  Buscar por DNI
                </span>
              </button>
              <button
                className="btn btn-primary m-2"
                onClick={() => handleSearch("codigo")}
              >
                <span className="flex justify-center">
                  <img
                    className="invert mx-2"
                    src="src\assets\SVG\qr-code-scan.svg"
                  ></img>
                  Buscar por código
                </span>
              </button>
              <button
                className="btn btn-primary m-2 "
                onClick={() => handleSearch("nombre")}
              >
                <span className="flex justify-center">
                  <img
                    className="invert mx-2"
                    src="src\assets\SVG\person-vcard-fill.svg"
                  ></img>
                  Buscar por nombre
                </span>
              </button>
            </div>
            {searchType && (
              <div className="search_input_certificate mt-4">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleInputChange}
                  placeholder={`Ingrese ${searchType}`}
                  className="form-control mr-2  mb-4 bg-white "
                />
                <button
                  className="btn btn-secondary mt-2 d-flex justify-content-center"
                  onClick={() => setSearchValue("")}
                >
                  Limpiar búsqueda
                </button>
              </div>
            )}
            {renderTable()}
            {renderFloatingWindow(selectedCert)}
          </div>
        </div>
        <div className="mb-5" style={{ height: "200px" }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Certs;
