import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="container mt-5 p-4">
        <div className="row">
          <div className="col-sm-3">
            <small>
              Jalan Kangkung Kidul no. 18 Lingkar Selatan, Lengkong Bandung
            </small>
            <br />
            <small>binarcarrental@gmail.com</small>
            <br />
            <small>081-233-334-808</small>
          </div>
          <div className="col-sm-2">
            <small>
              {" "}
              <a href="#ourservices" className="btn-outline-theme">
                Our Services
              </a>
            </small>
            <br />
            <small>
              {" "}
              <a href="#whyus" className="btn-outline-theme">
                Why Us
              </a>
            </small>
            <br />
            <small>
              <a href="#testimonial" className="btn-outline-theme">
                Testimonial
              </a>
            </small>
            <br />
            <small>
              <a href="#FAQ" className="btn-outline-theme">
                FAQ
              </a>
            </small>
          </div>
          <div className="col-sm-4">
            <small>Contact with us</small>
            <br />
            <img src="images/fb.png" width="20px" alt="social-icon" />
            <img src="images/ig.png" width="20px" alt="social-icon" />
            <img src="images/twitter.png" width="20px" alt="social-icon" />
            <img src="images/email.png" width="20px" alt="social-icon" />
            <img src="images/twitch.png" width="20px" alt="social-icon" />
          </div>
          <div className="col-sm-3">
            <small>Copyright Binar 2022</small>
            <br />
            <img src="images/logo.svg" width="50px" alt="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
