import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/IMG/logo1.png'; 

const Footer = () => {
  return (
    <footer className="pt-3 bg-black text-white">
      <div className="container">
        <div className="row text-secondary mt-2">
          <div className="col-sm">
            <img src={logo} alt="Logo de BINEX" className="w-25 h-35" />
          </div>

          <div className="page-content bg-white border-t border-white-100" />

          <div className="col-sm">
            <br />
            <h2 className="font-sans text-2xl font-bold mb-2">Contáctanos</h2>
            <ul className="text-base mb-5">
              <li>Sobre BINEX</li>
              <li>Historia</li>
              <li>Valores</li>
              <li>Funciones</li>
              <li>Política institucional</li>
              <li>Autoridades</li>
              <li>Publicaciones</li>
              <li>Galería de titulación</li>
            </ul>
          </div>

          <div className="col-sm">
            <br />
            <h5 className="font-sans text-2xl font-bold mb-2">Horario de atención</h5>
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
            <br />
            <h5 className="font-sans text-2xl font-bold mb-4">Síguenos en :</h5>
            <div className="flex items-center">
              <a
                href="https://www.facebook.com/BinexEdu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <img
                  src="src\assets\SVG\Icono_Facebook.svg"
                  alt="Facebook"
                  className="w-10 h-10 mr-6"
                />
              </a>

              <a
                href="https://www.instagram.com/binex.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <img
                  src="src\assets\SVG\Icono_Instagram.svg"
                  alt="Facebook"
                  className="w-10 h-10 mr-6"
                />
              </a>

              <a
                href="https://www.tiktok.com/@binex.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <img
                  src="src\assets\SVG\Icono_Tiktok.svg"
                  alt="Facebook"
                  className="w-10 h-10 mr-6"
                />
              </a>
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
      </div>
    </footer>
  );
};

export default Footer;


