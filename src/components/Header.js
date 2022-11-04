import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { togglerActions } from "../store/button";
import GoogleComponent from "react-google-login";
import { gapi } from "gapi-script";

function Header() {
  const responseGoogle = (response) => {
    window.localStorage.setItem("accessToken", response.accessToken);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "738292671835-u2m4qjgblq5p5ce3kb2okfcdl672gvo5.apps.googleusercontent.com",
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const location = useLocation();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.button.showButton);
  const toggleButtonHandler = () => {
    dispatch(togglerActions.toggleButton());
  };
  return (
    <>
      <header className="w-full">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="navbar-brand">
                <Link
                  to={`/`}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={toggleButtonHandler}
                >
                  {" "}
                  Binar Car Rental{" "}
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="offcanvas-body justify-content-end"
                  id="offcanvasRight"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
                    <li className="nav-item">
                      <a
                        href="#ourservices"
                        className="nav-link btn-outline-theme"
                      >
                        Our Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#whyus" className="nav-link btn-outline-theme">
                        Why Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#testimonial"
                        className="nav-link btn-outline-theme"
                      >
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#FAQ" className="nav-link btn-outline-theme">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="register.html"
                        className="nav-link btn btn-color-theme pl-3 pr-3"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="heroSection">
          <div className="mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="isi">
                  <h1>
                    <b>Sewa & Rental Mobil Terbaik di kawasan Bandung</b>
                  </h1>
                  <p>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                  {toggle && location.pathname === "/" && (
                    <Link
                      to={`/cars`}
                      className=" btn btn-color-theme pl-3 pr-3"
                      id="mulai-sewa"
                      onClick={toggleButtonHandler}
                    >
                      Mulai Sewa Mobil
                    </Link>
                  )}
                </div>
                <GoogleComponent
                  clientId="738292671835-u2m4qjgblq5p5ce3kb2okfcdl672gvo5.apps.googleusercontent.com"
                  buttonText="Login dengan Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  className="mt-3"
                />
              </div>
              <div className="col-md-6 order-1">
                <div className="gambar">
                  <img
                    src="images/thumbnail.png"
                    className="mobil img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Header;
