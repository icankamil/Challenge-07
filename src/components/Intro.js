import React from "react";

function Intro(props) {
  return (
    <div className="container">
      <div id="ourservices" className="row">
        <div className="col-lg-6">
          <img
            src="images/girl.svg"
            alt=""
            className="img-fluid d-block mx-auto"
          />
        </div>
        <div className="col-lg-6">
          <div className="img-typography">
            <div className="mt-4">
              <div className="typography-text">
                <h4>
                  <b>Best car rental for any kind of trip! </b>
                </h4>
                <p>
                  Sewa mobil bersama Binar Car Rental jaminan harga lebih murah
                  dibandingkan yang lain, kondisi mobil baru, serta kualitas
                  pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                  meeting, dll.
                </p>
                <img src="images/check.svg" alt="check-icon" /> Sewa Mobil
                Dengan Supir 12 Jam
                <br />
                <br />
                <img src="images/check.svg" alt="check-icon" /> Sewa Mobil Lepas
                Kunci 24 Jam
                <br />
                <br />
                <img src="images/check.svg" alt="check-icon" /> Sewa Mobil
                Jangka Panjang Bulanan
                <br />
                <br />
                <img src="images/check.svg" alt="check-icon" /> Gratis Antar -
                Jemput Mobil di Bandara
                <br />
                <br />
                <img src="images/check.svg" alt="check-icon" /> Layanan Airport
                Transfer / Drop In Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
