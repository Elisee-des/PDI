import React from "react";

import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img.jpg";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpeg";
import { Carousel } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <body className="corporate">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="First slide" />
            <Carousel.Caption>
              <h3 style={{ color: "#7b53fe", fontSize: 50 }}>
                Montez en compétences
              </h3>
              <p>
                C'est ce que vous cherchiez?
                <br />
                Avec nos formations vous y paviendrez certainement.
                <br />
                Vous ne perdez rien en essayant.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Second slide" />

            <Carousel.Caption>
              <h3 style={{ color: "#7b53fe", fontSize: 50 }}>
                Second slide label
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img9} alt="Third slide" />

            <Carousel.Caption>
              <h3 style={{ color: "#7b53fe", fontSize: 50 }}>
                Third slide label
              </h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </body>
    </>
  );
};

export default Header;
