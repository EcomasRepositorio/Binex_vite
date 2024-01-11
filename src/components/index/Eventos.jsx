import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";

const Eventos = () => {
  const { data: formData, loading, error } = useFetch(
    "https://binex.edu.pe:5000/server/forms"
  );

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="slider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {(() => {
            try {
              if (formData.results && formData.results.length > 0) {
                return formData.results.map((evento, index) => {
                  const fechaCreacion = new Date(evento.fecha_creacion);
                  fechaCreacion.setMonth(fechaCreacion.getMonth() + 1);

                  if (fechaCreacion > currentTime) {
                    return (
                      <div
                        key={evento.id}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <div className="card mb-3 shadow p-3 mb-5 bg-white rounded">
                          <img
                            className="card-img-top"
                            src={`http://localhost:8000/img/${evento.banner}`}
                            alt="Card image cap"
                          />
                          <div className="card-body d-flex">
                            <p className="card-text">
                              <p className="text-muted text-center my-1 mx-2">
                                {`Tiempo restante: ${Math.floor(
                                  (fechaCreacion - currentTime) /
                                    (1000 * 60 * 60 * 24)
                                )} days`}
                              </p>
                            </p>
                            <span className="card-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="gray"
                                class="bi bi-calendar2-event my-2"
                                viewBox="0 0 16 16"
                              >
                                {/* SVG path data */}
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                });
              } else {
                return (
                  <div className="carousel-item active">
                    <div className="card mb-3">
                      <div className="card-body">
                        <p className="card-text">No events available.</p>
                      </div>
                    </div>
                  </div>
                );
              }
            } catch (error) {
              return <p>Error loading data.</p>;
            }
          })()}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="prev"
        >
          {/* Previous button content */}
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="next"
        >
          {/* Next button content */}
        </button>
      </div>
    </div>
  );
};

export default Eventos;
