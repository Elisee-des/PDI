import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>NOUS SOMMES DÉSOLÉS, PAGE INTROUVABLE !</h2>
          <p>
            LA PAGE QUE VOUS RECHERCHEZ POURRAIT AVOIR ÉTÉ SUPPRIMÉE, AVOIR SON
            NOM CHANGÉ OU EST TEMPORAIREMENT INDISPONIBLE.
          </p>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Retour à la page d'accueil
          </button>
        </div>
      </div>
    </>
  );
};
export default NotFound;
