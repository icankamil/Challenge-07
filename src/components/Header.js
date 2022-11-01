import React, { useState } from "react";

function Header() {
  const [initialBtn, setInitialBtn] = useState(
    window.localStorage.getItem("mulaiBtn")
  );

  const disappear = () => {
    setInitialBtn(window.localStorage.setItem("mulaiBtn", "false"));
  };
  const reappear = () => {
    setInitialBtn(window.localStorage.setItem("mulaiBtn", "true"));
  };

  return (
    <header className="w-full">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="navbar-brand">
              <a
                href="/"
                style={{ textDecoration: "none", color: "black" }}
                onClick={reappear}
              >
                {" "}
                Binar Car Rental{" "}
              </a>
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
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                {initialBtn === "true" && (
                  <a
                    href="/cars"
                    className=" btn btn-color-theme pl-3 pr-3"
                    id="mulai-sewa"
                    onClick={disappear}
                  >
                    Mulai Sewa Mobil
                  </a>
                )}
              </div>
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
  );
}

export default Header;
