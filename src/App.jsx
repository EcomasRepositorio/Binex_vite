import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Router, Form } from "react-router-dom";
import Home from "./components/Home";
import Students from "./components/dashboard/Students";
import Auth0ProviderWithHistory from "./components/dashboard/auth0Provider";
import Blog from "./components/Blog";
import Curso from "./components/Curso";
import Nosotros from "./components/Nosotros";
import Certs from "./components/Certs";
import Preguntas from "./components/Preguntas";
import Eventos from "./components/Eventos";
import Contactanos from "./components/Contactanos";
import Forms from "./components/dashboard/Forms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Auth0ProviderWithHistory>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/certs" element={<Certs />} />
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/Curso" element={<Curso />}></Route>
            <Route path="/Nosotros" element={<Nosotros />}></Route>
            <Route path="/Eventos" element={<Eventos />}></Route>
            <Route path="/Preguntas" element={<Preguntas />}></Route>
            <Route path="/contactanos" element={<Contactanos />}></Route>
            <Route path="/Forms" element={<Forms />}></Route>
            <Route path="/Eventos" element={<Eventos />} />
            <Route path="/Eventos/:formId" element={<Eventos />} />
          </Routes>
        </div>
      </Auth0ProviderWithHistory>
    </>
  );
}

export default App;
