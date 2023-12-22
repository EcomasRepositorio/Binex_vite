import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-3">
      <div className="container">
        <div className="row text-secondary mt-2">
          <div className="col-sm">
            <p>
              <span className="text-center">BINEX</span> con una trayectoria de
              04 años, se ha destacado como una institución comprometida con la
              formación y el desarrollo de profesionales en diversos campos. A
              lo largo de este tiempo, hemos brindado cursos y diplomados de
              calidad que han impulsado el crecimiento y la capacitación de
              nuestros estudiantes en áreas clave. Nuestra dedicación a la
              excelencia educativa y la adaptabilidad a las demandas del mercado
              nos han permitido marcar una diferencia significativa en la
              formación de profesionales y en la satisfacción de sus necesidades
              educativas y laborales.
            </p>
            <Button className="flex justify-center align-middle m-2">
              <img className="h-10" src="src\assets\SVG\book.svg"></img>
              <p className="text-black font-bold flex justify-center p-2">Libro de Reclamos</p>
            </Button>
            <p>
              Conforme a lo establecido en el Código de Protección y Defensa del
              Consumidor este establecimiento cuenta con un Libro de
              Reclamaciones físico y virtual a tu disposición. Solicítalo para
              registrar una queja o reclamo.
            </p>
          </div>
          <div className="col-sm">
            <h5 className="font-bold">Nosotros</h5>
            <ul>
              <li>Sobre BINEX</li>
              <li>Historia</li>
              <li>Valores</li>
              <li>Funciones</li>
              <li>Política institucional</li>
              <li>Autoridades</li>
              <li>Publicaciones</li>
              <li>Galería de titulación</li>
            </ul>
            <ul className="font-bold">
              <li>Sedes</li>
              <li>Carreras</li>
              <li>Cursos</li>
              <li>Diplomados</li>
              <li>Másteres</li>
              <li>Bolsa de Trabajo</li>
              <li>Idiomas BINEX</li>
              <li>Segunda carrera</li>
            </ul>
          </div>
          <div className="col-sm">
            <h5 className="font-bold">Especialidades</h5>
            <ul>
              <li>Agroindustrias</li>
              <li>Administración de Empresas</li>
              <li>Artes gráficas</li>
              <li>Confecciones</li>
              <li>Electrotecnia</li>
              <li>Hotelería y turismo</li>
              <li>Industrias alimentarias</li>
              <li>Informática</li>
              <li>Mecánica automotriz</li>
              <li>Metalmecánica</li>
              <li>Tecnologías ambientales</li>
              <li>Textil</li>
            </ul>
            <ul className="font-bold">
              <li>Postulantes</li>
              <li>Empresas</li>
              <li>Alumnos</li>
              <li>Egresados</li>
              <li>Colaboradores</li>
            </ul>
          </div>
          <div className="col-sm">
            <h5 className="font-bold">BINEX para empresas</h5>
            <ul>
              <li>Asesoría y Consultoría</li>
              <li>Fabricación y Ensayos</li>
              <li>Unidad de servicios empresariales</li>
              <li>Patrocine alumnos</li>
              <li>Centro Tecnológico de Textiles y Confecciones (CTTC)</li>
              <li>Centro de Tecnologías Ambientales (CTA)</li>
            </ul>
          </div>
          <div className="col-sm">
            <h5 className="font-bold">Ayuda</h5>
            <ul>
              <li>Admisión</li>
              <li>Calendario de admisiones</li>
              <li>Contáctenos</li>
              <li>Preguntas frecuentes</li>
              <li>Atención alumnos</li>
              <li>Línea gratuita a nivel nacional</li>
              <li>0801-11100</li>
              <li>Número fijo</li>
              <li>5149700</li>
              <li>Informes y admisión</li>
              <li>Línea gratuita a nivel nacional</li>
              <li>0800-74577 (01)7160250</li>
              <li>contacto@binex.edu.pe</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyrights */}
      <div className="m-3 py-4 border-top border-secondary">
        <div className="container text-center">
          <p className="text-secondary mb-0 py-2">
            © 2023 Binex All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
