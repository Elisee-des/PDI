import React from "react";
import { Carousel } from "react-carousel-minimal";
import Header from "../../../components/Header";

import images3 from "../../../assets/images/image2.jpeg";
import images4 from "../../../assets/images/image3.jpeg";

const Home = () => {
  return (
    <>
      <Header />
      <section className="container main-hero-container">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
            <h1 className="display-2">
              Online Payment Made <br /> Easy For You.
            </h1>
            <p className="main-hero-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia
              quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis
              tempora recusandae voluptate quam, nisi odio officiis tempora
              recusandae
            </p>
            <h3>Get early access for you</h3>
            <div className="input-group mt-3">
              <input
                type="text"
                className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                placeholder="Enter Your Email"
              />
              <div className="input-group-button">Get it now</div>
            </div>
          </div>
          {/*  --------------- main header right side--------------  */}
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
            <img src={images3} alt="heroimg" className="img-fluid" />
            <img
              src={images4}
              alt="heroimg4"
              className="img-fluid main-hero-img2"
            />
          </div>
        </div>
      </section>

      <div className="main">
        <div class="container">
          <div className="row service-box margin-bottom-40">
            <div className="row quote-v1 margin-bottom-30">
              <div className="col-md-9">
                <span>MaFormation - Nos Atouts</span>
              </div>
              <div className="col-md-3 text-right">
                <a
                  className="btn-transparent"
                  href="http://www.keenthemes.com/preview/index.php?theme=metronic_admin"
                  target="_blank"
                >
                  <i className="fa fa-rocket margin-right-10"></i>Preview Admin
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="service-box-heading">
                <em>
                  <i className="fa fa-location-arrow blue"></i>
                </em>
                <span>Employabilité</span>
              </div>
              <div
                class="card"
                style={{
                  width: "30rem",
                  height: "30rem",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.With supporting text below as a natural
                    lead-in to additional content.With supporting text below as
                    a natural lead-in to additional content.With supporting text
                    below as a natural lead-in to additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="service-box-heading">
                <em>
                  <i className="fa fa-check red"></i>
                </em>
                <span>Mentoring</span>
              </div>
              <div class="card" style={{ width: "30rem", height: "30rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.With supporting text below as a natural
                    lead-in to additional content.With supporting text below as
                    a natural lead-in to additional content.With supporting text
                    below as a natural lead-in to additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="service-box-heading">
                <em>
                  <i className="fa fa-compress green"></i>
                </em>
                <span>Pré-Incubation Diaspora</span>
              </div>
              <div class="card" style={{ width: "30rem", height: "30rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.With supporting text below as a natural
                    lead-in to additional content.With supporting text below as
                    a natural lead-in to additional content.With supporting text
                    below as a natural lead-in to additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row quote-v1 margin-bottom-30">
            <div className="col-md-9">
              <span>MaFormation - Nos dernières offres de formations</span>
            </div>
            <div className="col-md-3 text-right">
              <a
                className="btn-transparent"
                href="http://www.keenthemes.com/preview/index.php?theme=metronic_admin"
                target="_blank"
              >
                <i className="fa fa-rocket margin-right-10"></i>Preview Admin
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row service-box margin-bottom-40">
            <div className="col-md-4 col-sm-4">
              <div className="service-box-heading">
                <em>
                  <i className="fa fa-location-arrow blue"></i>
                </em>
                <span>Formation</span>
              </div>
              <div class="card" style={{ width: "30rem", height: "30rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.With supporting text below as a natural
                    lead-in to additional content.With supporting text below as
                    a natural lead-in to additional content.With supporting text
                    below as a natural lead-in to additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="service-box-heading">
                <em>
                  <i className="fa fa-check red"></i>
                </em>
                <span>Formation</span>
              </div>
              <div class="card" style={{ width: "30rem", height: "30rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.With supporting text below as a natural
                    lead-in to additional content.With supporting text below as
                    a natural lead-in to additional content.With supporting text
                    below as a natural lead-in to additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="service-box-heading">
                <em>
                  <i className="fa fa-compress green"></i>
                </em>
                <span>Formation</span>
              </div>
              <div class="card" style={{ width: "30rem", height: "30rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.With supporting text below as a natural
                    lead-in to additional content.With supporting text below as
                    a natural lead-in to additional content.With supporting text
                    below as a natural lead-in to additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
