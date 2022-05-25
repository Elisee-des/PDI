import React from "react";
import useAuth from "../../../utilities/hook/resourceAuth";
import logo from "../../../assets/images/logo3.jpeg";
import image from "../../../assets/images/bg-registration-form-1.jpg";
import image2 from "../../../assets/images/registerPicture.jpeg";

const Register = () => {
  return (
    <>
      <body style={{ backgroundColor: "#f5f6fa" }}>
        <div class="wrapper">
          {/* style={{ backgroundImage: `url(${image})` }} */}
          <div class="inner">
            <div class="image-holder">
              <img src={image2} alt=""></img>
            </div>
            <form action="">
              <div className="d-flex align-items-center mb-3 pb-1">
                <img
                  src={logo}
                  alt="login form"
                  className="img-fluid"
                  style={{ color: "#ff6219", height: "30px" }}
                />
              </div>
              <h3>S'inscrire</h3>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Prénoms"
                  class="form-control"
                ></input>
                <input
                  type="text"
                  placeholder="Nom de famille"
                  class="form-control"
                ></input>
              </div>
              <div class="form-wrapper">
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  class="form-control"
                ></input>
                <i class="zmdi zmdi-account"></i>
              </div>
              <div class="form-wrapper">
                <input
                  type="text"
                  placeholder="Adresse e-mail"
                  class="form-control"
                ></input>
                <i class="zmdi zmdi-email"></i>
              </div>
              <div class="form-wrapper">
                <select name="" id="" class="form-control">
                  <option value="" disabled selected>
                    Sexe
                  </option>
                  <option value="male">Homme</option>
                  <option value="femal">Femme</option>
                  <option value="other">Autre</option>
                </select>
                <i
                  class="zmdi zmdi-caret-down"
                  style={{ fontSize: "17px" }}
                ></i>
              </div>
              <div class="form-wrapper">
                <input
                  type="password"
                  placeholder="Mot de passe"
                  class="form-control"
                ></input>
                <i class="zmdi zmdi-lock"></i>
              </div>
              <div class="form-wrapper">
                <input
                  type="password"
                  placeholder="Confirmez le mot de passe"
                  class="form-control"
                ></input>
                <i class="zmdi zmdi-lock"></i>
              </div>
              <button>
                S'inscrire
                <i class="zmdi zmdi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default Register;
