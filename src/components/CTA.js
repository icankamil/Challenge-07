import React from "react";

function CTA() {
  return (
    <div className="container">
      <div className="banner bg-dark-blue500 p-5 rounded text-white">
        <h1 className="font-weight-bold" align="center">
          Sewa Mobil Sekarang
        </h1>
        <p align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div style={{ textAlign: "center" }}>
          <a href="sewa.html" className="btn btn-color-theme pl-3 pr-3 mt-3">
            Mulai Sewa Mobil
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTA;
