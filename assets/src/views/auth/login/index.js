import React, { useEffect } from "react";
import useAuth from "../../../utilities/hook/resourceAuth";
import logo from "../../../assets/images/logo3.jpeg";
import image from "../../../assets/images/callcenter.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashbord";
  useEffect(() => {
    if (auth.user) {
      navigate(from, { replace: true });
    }
  }, []);
  const login = () => {
    auth.signin({ email: "", password: "" }, (data) => {
      console.log("data login", data);
      navigate(from, { replace: true });
    });
  };
  return (
    <>
      <body style={{ backgroundColor: "#f5f6fa" }}>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={image}
                        alt="login form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <img
                              src={logo}
                              alt="login form"
                              className="img-fluid"
                              style={{ color: "#ff6219" }}
                            />
                          </div>

                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Connectez-vous à votre compte
                          </h5>

                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="form2Example17"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example17"
                            >
                              Adresse e-mail
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example27"
                            >
                              Mot de passe
                            </label>
                          </div>

                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-dark btn-lg btn-block"
                              type="button"
                              onClick={login}
                            >
                              Connexion
                            </button>
                          </div>

                          <a className="small text-muted" href="#!">
                            Mot de passe oublié?
                          </a>
                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            Vous n'aviez pas de compte?{" "}
                            <a href="#!" style={{ color: "#393f81" }}>
                              Inscrivez-vous ici
                            </a>
                          </p>
                          <a href="#!" className="small text-muted">
                            Conditions d'utilisation.
                          </a>
                          <a href="#!" className="small text-muted">
                            Politique de confidentialité
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Login;
