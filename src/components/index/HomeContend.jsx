import React from "react";
import Cursos from "./Cursos";
import Eventos from "./Eventos";
import Testimonios from "./Testimonios";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";

const HomeContend = () => {
  return (
    <>
      <Carousel className="animate__animated animate__backInLeft">
        <Carousel.Item>
        <img src="src\assets\IMG\banner.webp" alt="Banner 1" width="100%" height="auto" />
        </Carousel.Item>
        <Carousel.Item>
        <img src="src\assets\IMG\banner2.webp" alt="Banner 2" width="100%" height="auto" />
        </Carousel.Item>
        <Carousel.Item>
        <img src="src\assets\IMG\banner3.webp" alt="Banner 3" width="100%" height="auto" />
        </Carousel.Item>
        <Carousel.Item>
        <img src="src\assets\IMG\banner4.webp" alt="Banner 1" width="100%" height="auto" />
        </Carousel.Item>
      </Carousel>

      <Container className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        <Card className="border-0">
          <Card.Body>
            <Card.Title className="flex justify-start align-middle">
            <h1 className="font-extrabold text-transparent text-6xl sm:text-6xl bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #2878B7, #1DDAB8)' }}>
             Tu futuro comienza...
            </h1>

            </Card.Title>
            <Card.Text>
              <p
                style={{ color: "#6d6d6d", fontFamily: "Arial, sans-serif" }}
                className="animate__animated animate__backInLeft text-2xl"
              >
                Te invitamos a explorar nuestros programas y descubrir cómo podemos colaborar en la realización de tus metas académicas y profesionales.
                Estamos comprometidos con tu éxito y desarrollo integral. ¡Únete a nosotros y comienza tu viaje educativo hacia un futuro brillante!
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Figure className="flex justify-center align-middle">
          <Figure.Image className="animate__animated animate__backInLeft" src="src\assets\IMG\imageW.webp"/>
        </Figure>
      </Container>
       
      <div style={{  backgroundImage: "linear-gradient(to right, #2878B7, #1DDAB8)" }} className="p-5">
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
       
      </div><br/><br/>
     
     
      <div style={{ backgroundImage: "linear-gradient(to right, #ffffff, #ffffff)" }} className="p-5">
      <Container className="my-3 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center text-center">
        <Card className="animate-slide-in-left min-w-[450px] p-5 rounded-4xl w-7/12 shadow-4xl border-none ">
          <Card.Body >
          <Card.Title className="font-bold font-mono font-montserrat text-3xl">¡Desata tu potencial al máximo!</Card.Title>
            <Card.Text className="font-montserrat">
              El liderazgo y la innovación son componentes esenciales de tu desarrollo en Binex.
              Aquí, tus ideas pueden convertirse en realidad gracias a nuestra cultura.
              ¡Descubre cómo llevar tu talento al siguiente nivel!
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="flex items-center justify-center sm:justify-end">
        <img className="w-65 h-auto object-cover border border-solid border-blue-500 border-0 rounded-5 hover:-translate-x-4 transition delay-150 duration-500" src="src/assets/IMG/picture2.webp" alt="Mortarboard" />
        </div>
      </Container>
    </div>


    <div style={{ backgroundImage: "linear-gradient(to right, #ffffff, #ffffff)" }} className="p-5">
      <Container className="my-3 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center text-center">
        <div className="flex items-center justify-center sm:justify-end">
        <img className="w-full h-full object-cover border border-solid border-blue-500 border-0 rounded-5 hover:-translate-x-4 transition delay-150 duration-500" src="src/assets/IMG/picture.webp" alt="Mortarboard" />
        </div>
        <Card className="animate-slide-in-left min-w-[450px] p-5 rounded-4xl w-7/12 shadow-4xl border-none ">
          <Card.Body>
            <Card.Title className="font-bold font-mono font-montserrat text-3xl">Descubre un mundo de posibilidades.</Card.Title>
            <Card.Text className="font-montserrat">
              El liderazgo y la innovación son componentes esenciales de tu desarrollo en Binex.
              Aquí, tus ideas pueden convertirse en realidad gracias a nuestra cultura.
              ¡Descubre cómo llevar tu talento al siguiente nivel!
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>

    </>
  );
}; 

export default HomeContend;