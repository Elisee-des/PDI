import React, { useState } from "react";
import visionsApp from "../../../utilities/visionApi";
import missionApp from "../../../utilities/missionApi";
import valeurApi from "../../../utilities/valeursApi";
import img1 from "../../../assets/pages/img/pics/img2-medium.jpg";
import img2 from "../../../assets/pages/img/pics/img1-medium.jpg";
import img3 from "../../../assets/pages/img/pics/img2-medium.jpg";
import img4 from "../../../assets/pages/img/people/img1-small.jpg";
import img5 from "../../../assets/pages/img/people/img5-small.jpg";
import img6 from "../../../assets/pages/img/people/img2-small.jpg";
import img7 from "../../../assets/pages/img/people/img1-large.jpg";
import img8 from "../../../assets/pages/img/people/img4-large.jpg";
import img9 from "../../../assets/pages/img/people/img2-large.jpg";
import img10 from "../../../assets/pages/img/people/img5-large.jpg";
import img11 from "../../../assets/images/hero3.jpg";
import img12 from "../../../assets/images/callcenter.jpg";
import profil1 from "../../../assets/images/profil1.png";
import profil2 from "../../../assets/images/profil2.jpeg";
import profil3 from "../../../assets/images/profil3.png";
import profil4 from "../../../assets/images/profil4.png";

const About = () => {
  const [visionData, setAboutData] = useState(visionsApp);
  const [missionData, setMissionData] = useState(missionApp);
  const [valeursData, setValeursData] = useState(valeurApi);
  return (
    <>
      <div className="main">
        <div className="row margin-bottom-40">
          {/* <!-- BEGIN CONTENT --> */}
          <div className="col-md-12 col-sm-12">
            <section className="common-section our-services">
              <div className="container mb-5">
                <div className="row">
                  <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                    <img src={img11} alt="aboutusIMg" />
                  </div>

                  {/* 1section right side data  */}
                  <div className="col-12 col-lg-7 our-services-list">
                    <h1 className="main-heading">Notre vision</h1>

                    {visionData.map((curElem) => {
                      const { id, title, info } = curElem;
                      return (
                        <>
                          <div className="row our-services-info" key={id}>
                            <div className="col-1 our-services-number">
                              {id}
                            </div>
                            <div className="col-10 our-services-data">
                              <h2>{title}</h2>
                              <p className="main-hero-para">{info}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* 2nd part of bayt us section  */}

            <section className="common-section our-services our-services-rightside">
              <div className="container mb-5">
                <div className="row">
                  {/* 1section right side data  */}
                  <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                    <h1 className="main-heading">Notre mission</h1>

                    {missionData.map((curElem) => {
                      const { id, title, info } = curElem;
                      return (
                        <>
                          <div className="row our-services-info" key={id}>
                            <div className="col-1 our-services-number">
                              {id}
                            </div>
                            <div className="col-10 our-services-data">
                              <h2>{title}</h2>
                              <p className="main-hero-para">{info}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  {/* images section  */}
                  <div className="col-12 col-lg-5  our-service-rightside-img">
                    <img src={img12} alt="aboutusIMg" />
                  </div>
                </div>
              </div>
            </section>

            <section className="service-main-container">
              <div className="container service-container">
                <h1 className="main-heading text-center fw-bold">
                  Nos valeurs
                </h1>
                <div className="row">
                  {valeursData.map((curElem) => {
                    const { id, logo, title, info } = curElem;
                    return (
                      <>
                        <div
                          className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                          key={id}
                        >
                          <i className={`fontawesome-style ${logo}`}></i>
                          <h2 className="sub-heading">{title}</h2>
                          <p className="main-hero-para">{info}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="common-section our-services our-services-rightside">
              <div className="container mb-5">
                <div className="row">
                  {/* 1section right side data  */}
                  <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                    <h1 className="main-heading">Notre Equipe</h1>
                  </div>
                </div>
              </div>
            </section>
            <div className="row front-team">
              <ul className="list-unstyled">
                <li className="col-md-3">
                  <div className="thumbnail">
                    <img alt="" src={profil1}></img>
                    <h3>
                      <strong>Christian SEGBE</strong>
                      <small>Chief Executive Officer / CEO</small>
                    </h3>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, justo sit amet risus etiam porta sem...
                    </p>
                    <ul className="social-icons social-icons-color">
                      <li>
                        <a
                          className="facebook"
                          data-original-title="Facebook"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          data-original-title="Twitter"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="googleplus"
                          data-original-title="Goole Plus"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="linkedin"
                          data-original-title="Linkedin"
                          href="javascript:;"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="thumbnail">
                    <img alt="" src={profil2}></img>
                    <h3>
                      <strong>Annie NEDJOLBE</strong>
                      <small>Chief Executive Officer / CEO</small>
                    </h3>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, justo sit amet risus etiam porta sem...
                    </p>
                    <ul className="social-icons social-icons-color">
                      <li>
                        <a
                          className="facebook"
                          data-original-title="Facebook"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          data-original-title="Twitter"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="googleplus"
                          data-original-title="Goole Plus"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="linkedin"
                          data-original-title="Linkedin"
                          href="javascript:;"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="thumbnail">
                    <img alt="" src={profil3}></img>
                    <h3>
                      <strong>Andres Iniesta</strong>
                      <small>Chief Executive Officer / CEO</small>
                    </h3>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, justo sit amet risus etiam porta sem...
                    </p>
                    <ul className="social-icons social-icons-color">
                      <li>
                        <a
                          className="facebook"
                          data-original-title="Facebook"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          data-original-title="Twitter"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="googleplus"
                          data-original-title="Goole Plus"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="linkedin"
                          data-original-title="Linkedin"
                          href="javascript:;"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="thumbnail">
                    <img alt="" src={profil4}></img>
                    <h3>
                      <strong>Jessica Alba</strong>
                      <small>Chief Executive Officer / CEO</small>
                    </h3>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, justo sit amet risus etiam porta sem...
                    </p>
                    <ul className="social-icons social-icons-color">
                      <li>
                        <a
                          className="facebook"
                          data-original-title="Facebook"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          data-original-title="Twitter"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="googleplus"
                          data-original-title="Goole Plus"
                          href="javascript:;"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="linkedin"
                          data-original-title="Linkedin"
                          href="javascript:;"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
