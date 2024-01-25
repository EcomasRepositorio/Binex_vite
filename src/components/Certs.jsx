import React, { useState } from "react";
import { useFetch } from "../components/useFetch";
import { Header } from "./navigations/Header";
import Footer from "./navigations/Footer";
import ListGroup from "react-bootstrap/ListGroup";
import { Card, Container, Row, Col } from "react-bootstrap";
import IconSvgA from '/src/assets/SVG/otorgado.svg';
import IconSvgB from '/src/assets/SVG/creditos_horas.svg';
import IconSvgC from '/src/assets/SVG/fecha_emision.svg';
import IconSvgD from '/src/assets/SVG/nom_evento.svg';
import IconSvgE from '/src/assets/SVG/organizadopor.svg';


const Certs = () => {
  const [searchType, setSearchType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { data, loading } = useFetch("https://binex.edu.pe:5000/server/students");
  const [selectedCert, setSelectedCert] = useState(null);

  const handleSearch = (type) => {
    setSearchType(type);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value; // Convertir a minúsculas y quitar espacios
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
        return nombre.toLowerCase().includes(searchValue.toLowerCase());
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
            <div className="prose bg-white p-12  mx-full rounded-lg" style={{width:'520px'}} >
              <Container className="flex justify-end">
                <button onClick={handleWindowClose}>
                  <span className="h-60" aria-hidden="true">
                    &times;
                  </span>
                </button>
              </Container>
              <Container className="flex items-center justify-center mt-[-90px] ">
                <img className="h-35 w-64 mt-1" src="src\assets\IMG\UNP.png" alt="UNP" />
              </Container>
              <Container>
                <ListGroup className="">
                
                 <ListGroup.Item style={{height: '35px', width:'280px', marginLeft:'60px'}} className="bg-[#4D4D4D] font-bold text-white rounded flex items-center mb-1">
                  <img src={IconSvgE} alt="Icono" style={{ width: '20px' }} className="h-5 w-5 ml-2 mr-0" />
                  <span className="flex items-center justify-center"style={{width:'205px'}}>Organizado por:</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0  "style={{width:'440px',marginLeft:'-20px'}} >{cert.Instituciones}</ListGroup.Item>

                  <ListGroup.Item style={{height: '35px', width:'280px', marginLeft:'60px'}} className="bg-[#4D4D4D] font-bold text-white rounded mr-0 flex items-center mb-2 ml-12">
                  <img src={IconSvgA} alt="Icono" style={{ width: '20px' }} className="h-5 w-5 ml-2 mr-0" />
                  <span className="flex items-center justify-center"style={{width:'210px'}}>Otorgado a:</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0  ">
                  <ul>
                  <li> {cert.Nombre}</li> 
                  <li> ({cert.Participacion})</li>
                  </ul>
                  </ListGroup.Item>

                  <ListGroup.Item style={{height: '35px', width:'280px', marginLeft:'60px'}} className="bg-[#4D4D4D] font-bold text-white rounded mr-0 flex items-center mb-2 ml-12 ">
                  <img src={IconSvgD} alt="Icono" style={{ width: '20px' }} className="h-5 w-5 ml-1 mr-0" />
                  <span className="flex items-center justify-center ml-05"style={{width:'210px'}}>Nombre del evento:</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 ">{cert.ActividadAcademica}</ListGroup.Item>

                  <ListGroup.Item style={{height: '35px', width:'280px', marginLeft:'60px'}} className="bg-[#4D4D4D] font-bold text-white rounded mr-0 flex items-center mb-2 ml-12">
                  <img src={IconSvgB} alt="Icono" style={{ width: '20px' }} className="h-5 w-5 ml-2 mr-0" />
                  <span className="flex items-center justify-center ml-05"style={{width:'205px'}}>Créditos/Horas:</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">{cert.Horas}</ListGroup.Item>

                  <ListGroup.Item style={{height: '35px', width:'280px', marginLeft:'60px'}} className="bg-[#4D4D4D] font-bold text-white rounded mr-0 flex items-center mb-2 ml-12">
                  <img src={IconSvgC} alt="Icono" style={{ width: '20px' }} className="h-5 w-5 ml-2 mr-0" />
                  <span className="flex items-center justify-center ml-05" style={{width:'210px'}}>Fecha emisión:</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 ">{cert.Fecha}</ListGroup.Item>
                  
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
                className="btn m-2 text-center bg-blue-500 text-white hover:bg-blue-700" 
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
                className="btn m-2 text-center bg-teal-500 text-white hover:bg-teal-700"
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
                className="btn m-2 text-center bg-blue-500 text-white hover:bg-blue-700"  
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
