import React from "react";
import Cursos from "./Cursos";
import Eventos from "./Eventos";
import Testimonios from "./Testimonios";
import Ecomas from "./Ecomas";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";

const HomeContend = () => {
  return (
    <>
      <Carousel className="animate__animated animate__backInLeft">
        <Carousel.Item>
          <img src="src\assets\IMG\oficial.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="src\assets\IMG\oficial2.jpg" />
        </Carousel.Item>
      </Carousel>

      <Container className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        <Card className="border-0">
          <Card.Body>
            <Card.Title className="flex justify-start align-middle">
              <p
                style={{ color: "#05be50" }}
                className="animate__animated animate__backInDown font-bold text-6xl"
              >
                ¿Porque estudiar en Binex?
              </p>
            </Card.Title>
            <Card.Text>
              <p
                style={{ color: "#0039a6" }}
                className="animate__animated animate__backInLeft text-2xl"
              >
                ¡Optar por Binex implica acceder a una formación de alta calidad respaldada
                 por instituciones académicas y reconocimiento profesional!
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Figure className="flex justify-center align-middle">
          <Figure.Image className="animate__animated animate__backInLeft" src="src\assets\IMG\image2.jpg"/>
        </Figure>
      </Container>

      <div style={{  backgroundImage: "linear-gradient(to right, #1DDAB8, #2878B7)" }} className="p-5">
      <Container className="my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center text-center">
        <Card className="animate-slide-in-left min-w-[250px] p-2 rounded-3xl w-7/12 shadow-2xl hover:-translate-y-12 transition delay-150 duration-300">
          <img className="h-20" src="src\assets\SVG\mortarboard-fill.svg" />
          <Card.Body>
            <Card.Title className="font-bold ">Diplomados</Card.Title>
            <Card.Text>
              Programas de formación académica y profesional que ofrecemos con
              el propósito de brindar capacitación especializada para todos
              nuestros participantes en las áreas de ingeniería, sociales y
              biomédicas.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="animate-slide-in-left min-w-[250px] p-2 rounded-3xl  w-7/12 shadow-2xl hover:-translate-y-12 transition delay-150 duration-300">
          <img className="h-20" src="src\assets\SVG\mortarboard.svg" />
          <Card.Body>
            <Card.Title className="font-bold">Cursos</Card.Title>
            <Card.Text>
              Programas de estudio más cortos y específicos. Enfocados en temas
              particulares y están diseñados para proporcionar conocimientos y
              habilidades en un período de tiempo más breve, nuestros cursos
              abarcan de tres a seis sesiones.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="animate-slide-in-left min-w-[250px] p-2 rounded-3xl  w-7/12 shadow-2xl hover:-translate-y-12 transition delay-150 duration-300">
          <img className="h-20" src="src\assets\SVG\laptop-fill.svg" />
          <Card.Body>
            <Card.Title className="font-bold">Capacitaciones</Card.Title>
            <Card.Text>
              Programas de aprendizaje diseñados para proporcionar a las
              personas conocimientos y habilidades específicas. Nuestras
              capacitaciones son gratuitas y se realizan mediante nuestra página
              de Facebook.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      </div>
    </>
  );
};

export default HomeContend;
