import React, { useState } from "react";
import NavDash from "./NavDash";
import { useAuth0 } from "@auth0/auth0-react";

const Forms = () => {
  const [url, setUrl] = useState("");
  const [fileKey, setFileKey] = useState(0);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth0();

  const handleHttpAction = (url, method, formData) => {
    fetch(url, {
      method,
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUrl("");
        setFileKey((prevKey) => prevKey + 1);
        setError(null);
        alert("URL Guardado: " + data.imageUrl);
      })
      .catch((error) => {
        console.error("Error performing HTTP action:", error);
        setError("Error al enviar el formulario.");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!url.trim()) {
      setError("Por favor, ingresa una URL.");
      return;
    }

    const formData = new FormData();
    formData.append("url", url);
    formData.append("image", fileRef.current.files[0]);

    handleHttpAction("https://binex.edu.pe:3000/server/formulario/add", "POST", formData);
  };

  const fileRef = React.createRef();

  if (!isAuthenticated) {
    return (
      <>
      <Header></Header>
      <div>
        <h1 className="display-6 text-center">
          No tienes acceso a esta página.
        </h1>
        <p className="text-center">:c</p>
      </div>
      </>
    );
  }

  return (
    <div>
      <NavDash />
      <div className="container">
        <form className="m-5" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">URL: forms</label>
            <input
              type="text"
              className="form-control m-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <label htmlFor="formFile" className="form-label">
              Banner Img
            </label>
            <input
              type="file"
              key={fileKey}
              className="form-control m-3"
              id="formFile"
              ref={fileRef}
              onChange={() => {}}
            />
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
