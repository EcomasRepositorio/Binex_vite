import React, { useState } from "react";
import { Header } from './navigations/Header'
import Footer from './navigations/Footer'

const Nosotros = () => {
	return (
		<div>
			<Header />
			
			<div>
				<div id="nosotros_banner_ecomas" className="">
				<div className="mb-5" style={{ height: "50px" }}></div>
					<div className="container ">
						<h1 className="text-white text-center">Sobre Nosotros:</h1>
						<p className=" text-white ">ECOMÁS, en línea con su misión de promover el desarrollo y la educación continua, se ha convertido en una referencia en el ámbito de la
							formación mediante cursos y diplomados. Desde su inicio, nuestra institución ha trabajado incansablemente para proporcionar a los estudiantes y
							profesionales las herramientas necesarias para destacar en sus respectivos campos. Nuestra amplia oferta académica abarca diversas áreas, permitiendo
							a nuestros alumnos adquirir habilidades cruciales para sobresalir en la industria y en una amplia variedad de sectores económicos. Como pilar fundamental
							de nuestro compromiso, nos esforzamos por brindar una formación de calidad que empodere a nuestros estudiantes y los prepare para los desafíos cambiantes del mundo laboral.</p>
					</div>
				</div>
				<div className="container">
					<ul id="ul_nosotros_target" className="text-center row p-2 mx-4 shadow border">
						<li className="nav-link col-sm  py-5">Nosotros</li>
						<li className="nav-link col-sm  py-5">Alianzas</li>
						<li className="nav-link col-sm  py-5">Servicios</li>
						<li className="nav-link col-sm  py-5">Diplomados</li>
						<li className="nav-link col-sm  py-5">Sedes</li>
					</ul>
				</div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<Footer />
		</div>
	)
}

export default Nosotros