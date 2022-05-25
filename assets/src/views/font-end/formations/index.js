import React from "react";
import image from "../../../assets/pages/img/works/img1.jpg";
import image2 from "../../../assets/pages/img/works/img2.jpg";
import image3 from "../../../assets/pages/img/works/img3.jpg";
import image4 from "../../../assets/pages/img/works/img4.jpg";
import image5 from "../../../assets/pages/img/works/img5.jpg";

const Formation = () => {
  return (
    <>
      <div className="row margin-bottom-40">
        <div className="col-md-12 col-sm-12">
          <h1>Formations disponible</h1>
          <div class="content-page">
            <div className="filter-v1">
              <ul className="mix-filter">
                <li data-filter="all" className="filter active">
                  Toutes les formations
                </li>
                <li data-filter="category_1" className="filter">
                  UI Design
                </li>
                <li data-filter="category_2" className="filter">
                  Developpement Web
                </li>
                <li data-filter="category_3" className="filter">
                  Photographie
                </li>
                <li data-filter="category_3 category_1" className="filter">
                  Wordpress et Logo
                </li>
              </ul>
              <div className="row mix-grid thumbnails">
                <div
                  className="col-md-3 col-sm-4 mix category_1 mix_all"
                  style={{ display: "block", opacity: 1 }}
                >
                  <div className="mix-inner">
                    <img alt="" src={image} className="img-responsive"></img>
                    <div className="mix-details">
                      <h4>Developpement personnel</h4>
                      <h5>Date du debut : 09/06/2022</h5>
                      <h5>Date de la fin : 08/07/2022</h5>
                      <a className="mix-link">
                        <i>Detail</i>
                      </a>
                      <a
                        data-rel="fancybox-button"
                        title="Project Name"
                        href={image}
                        className="mix-preview fancybox-button"
                      >
                        <i>Postuler</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-4 mix category_2 mix_all"
                  style={{ display: "block", opacity: 1 }}
                >
                  <div className="mix-inner">
                    <img alt="" src={image2} class="img-responsive"></img>
                    <div className="mix-details">
                      <h4>Entreprenariat</h4>
                      <h5>Date du debut : 09/06/2022</h5>
                      <h5>Date de la fin : 08/07/2022</h5>
                      <a className="mix-link">
                        <i>Detail</i>
                      </a>
                      <a
                        data-rel="fancybox-button"
                        title="Project Name"
                        href={image2}
                        className="mix-preview fancybox-button"
                      >
                        <i>Postuler</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-3 col-sm-4 mix category_3 mix_all"
                  style={{ display: "block", opacity: 1 }}
                >
                  <div className="mix-inner">
                    <img alt="" src={image3} class="img-responsive"></img>
                    <div className="mix-details">
                      <h4>Developpement web</h4>
                      <h5>Date du debut : 09/06/2022</h5>
                      <h5>Date de la fin : 08/07/2022</h5>
                      <a className="mix-link">
                        <i>Detail</i>
                      </a>
                      <a
                        data-rel="fancybox-button"
                        title="Project Name"
                        href={image3}
                        className="mix-preview fancybox-button"
                      >
                        <i>Postuler</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-3 col-sm-4 mix category_1 category_2 mix_all"
                  style={{ display: "block", opacity: 1 }}
                >
                  <div className="mix-inner">
                    <img alt="" src={image4} className="img-responsive"></img>
                    <div className="mix-details">
                      <h4>Marketing Digital</h4>
                      <h5>Date du debut : 09/06/2022</h5>
                      <h5>Date de la fin : 08/07/2022</h5>
                      <a className="mix-link">
                        <i>Detail</i>
                      </a>
                      <a
                        data-rel="fancybox-button"
                        title="Project Name"
                        href={image4}
                        className="mix-preview fancybox-button"
                      >
                        <i>Postuler</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-3 col-sm-4 mix category_2 category_1 mix_all"
                  style={{ display: "block", opacity: 1 }}
                >
                  <div className="mix-inner">
                    <img alt="" src={image5} className="img-responsive"></img>
                    <div className="mix-details">
                      <h4>Infographie</h4>
                      <h5>Date du debut : 09/06/2022</h5>
                      <h5>Date de la fin : 08/07/2022</h5>
                      <a className="mix-link">
                        <i>Detail</i>
                      </a>
                      <a
                        data-rel="fancybox-button"
                        title="Project Name"
                        href={image5}
                        className="mix-preview fancybox-button"
                      >
                        <i>Postuler</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formation;
