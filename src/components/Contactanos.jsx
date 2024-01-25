import React from "react";
import { Header } from "./navigations/Header";
import Footer from "./navigations/Footer";

const Contactanos = () => {
  return (
    <div>
      <Header />
      <div className="page-content bg-white">
      <div
          className="page-banner ovbl-dark"
          style={{
            backgroundImage: "url(assets/images/banner/banner_cursos.png)",
          }}
        >
          <div className="container">
            <div className="page-banner-entry">
              <h1 className="text-white">Contacto</h1>
            </div>
          </div>
        </div>
        <div className="breadcrumb-row">
          <div className="container">
            <ul className="list-inline">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
        <div className="page-banner contact-page section-sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 m-b30">
                <div className="bg-black text-white contact-info-bx">
                  <h2 className="m-b10 title-head">
                    Contacto de <span>Informacion</span>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="widget widget_getintuch">
                    <ul className="list-group"style={{listStyle:"none"}}>
                      <li className="m-1">
                        <i className="ti-location-pin mr-2"></i>Juliaca 213/12312 av.
                        dkfajsldf. lorem
                      </li>
                      <li className="m-1">
                        <i className="ti-mobile mr-2"></i>900923342 (24/7 linea de
                        soporte)
                      </li>
                      <li className="m-1">
                        <i className="ti-email mr-2"></i>info@example.com
                      </li>
                    </ul>
                  </div>
                  <h5 className="m-t0 m-b20">Siguenos en</h5>
                  <ul className="list-inline contact-social-bx">
                    <li>
                      <a target="_black" href="https://www.facebook.com/ecomascyc/" className="btn outline radius-xl">
                        <i className="fa fa-facebook  text-white"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_black" href="https://www.instagram.com/ecomas_cyc/" className="btn outline radius-xl">
                        <i className="fa fa fa-instagram text-white"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_black" href="https://www.youtube.com/@ecomascyc7270" className="btn outline radius-xl">
                        <i className="fa fa-youtube-play  text-white"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <form
                  className="contact-bx ajax-form"
                  action="http://educhamp.themetrades.com/demo/assets/script/contact.php"
                >
                  <div className="ajax-message"></div>
                  <div className="heading-bx left">
                    <h2 className="title-head">
                      Ingrese su <span>informacion</span>
                    </h2>
                    <p>
                      Lorem ipsum vitae sit minima pariatur possimus enim
                      accusantium.
                    </p>
                  </div>
                  <div className="row placeani">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <label>Tu nombre</label>
                          <input
                            name="name"
                            type="text"
                            required
                            className="form-control valid-character"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <label>Tu Email</label>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <label>Tu celular</label>
                          <input
                            name="phone"
                            type="text"
                            required
                            className="form-control int-value"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group">
                          <label>Apodo</label>
                          <input
                            name="subject"
                            type="text"
                            required
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <label>Mensaje</label>
                          <textarea
                            name="message"
                            rows="4"
                            className="form-control"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <div
                            className="g-recaptcha"
                            data-sitekey="6Lf2gYwUAAAAAJLxwnZTvpJqbYFWqVyzE-8BWhVe"
                            data-callback="verifyRecaptchaCallback"
                            data-expired-callback="expiredRecaptchaCallback"
                          ></div>
                          <input
                            className="form-control d-none"
                            style={{ display: "none" }}
                            data-recaptcha="true"
                            required
                            data-error="Please complete the Captcha"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn button-md"
                      >
                        Enviar mensaje
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactanos;
