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

          <div className="col-sm"><br/>
            <h2 className="font-sans text-2xl font-bold mb-2">Informes</h2><br/>
            <ul className="text-base mb-5">

            <li className="flex items-center">

               <img 
                src="src\assets\SVG\Icono_Correo.svg"
                alt="correo"
                className="w-7 h-10 mr-2"
              />
              <span>capacitaciones@binex.edu.pe</span>
             </li>
             <li className="flex items-center">

             <img 
             src="src\assets\SVG\Icono_reclamaciones.svg"
             alt="correo"
             className="w-6 h-9 mr-2"
             />
            <span>Libro de Reclamaciones</span>
             </li>

            </ul>
          </div>

          <div className="col-sm"><br/>
            <h2 className="font-sans text-2xl font-bold mb-6">Matriculas Abiertas</h2>
            <li className="flex items-center">

               <img 
                src="src\assets\SVG\Icono_Whatsapp.svg"
                alt="correo"
                className="w-7 h-10 mr-1"
                 />
                  <span>+51 921814045</span>
                </li>

                <li className="flex items-center">

            <img 
              src="src\assets\SVG\Icono_Reloj.svg"
              alt="correo"
              className="w-7 h-10 mr-2"
            />
               <span className="mr-2">Horarios de Atención:</span>
               <span className="ml-2">09:00 AM - 06:00 PM</span>

            </li><br/> 
            </div>
       

          <div className="col-sm">
            <br />
            <h5 className="font-sans text-2xl font-bold mb-4">Síguenos en </h5>
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
                  alt="Instagram"
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
                  src="src\assets\SVG\tiktokblack.svg"
                  alt="Tiktok"
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
              © 2024 Binex All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


