import "../style/Jurdique.css";
import { Link } from "react-router-dom";
import React from "react";

import Entr from "../assets/Entr.jpg";
import divorce from "../assets/divorce.jpg";
import harc from "../assets/harc.jpg";
import cong from "../assets/cong.jpg";
import droit from "../assets/droit.jpg";
import routier from "../assets/routier.jpg";
import malade from "../assets/malade.jpg";
import violence from "../assets/violence.jpg";

const Jurdique = () => {
  return (
    <div className="Avantage">
      <div className="card_c-container">
        <div className="card_c">
          <img src={Entr} className="image" />

          <h2 className="titre">Statut auto-entrepreneur en Tunisie Le guide complet 2023</h2>
          <small> Publié le vendredi 27 octobre 2023</small>
          <span className="bar"></span>
          <p>
            {" "}
            Vous souhaitez débuter votre activité et devenir auto-entrepreneur? Excellent choix ! Les auto-entreprises bénéficient
            de nombreux avantages en France et notamment, les démarches administratives simplifiées et des charges sociales et
            fiscales…
          </p>
          <div className="logo">
            <i class="fa-solid fa-file-circle-plus"></i>
          </div>
          <Link to="https://www.justifit.fr/b/guides/droit-societes/statut-auto-entrepreneur-en-france-2022/" className="btn_c">
            En savoir plus
          </Link>
        </div>

        <div className="card_c">
          <img src={divorce} className="image" />
          <h2 className="titre">Séparation : quelles sont les étapes de la procédure ?</h2>
          <small> Publié le lundi 6 novembre 2023 </small>

          <span className="bar"></span>

          <p>
            La procédure de séparation (de corps) est plus ou moins identique à la procédure du divorce. Elle n’est donc ni moins
            longue ni moins complexe… Selon votre décision, n’hésitez pas à consulter avocat…
          </p>
          <div className="logo">
            <i class="fa-solid fa-check"></i>
          </div>
          <Link to="https://www.justifit.fr/b/guides/droit-famille/divorce/separation-etapes-procedure/" className="btn_c">
            En savoir plus
          </Link>
        </div>
        <div className="card_c">
          <img src={harc} className="image" />

          <h2 className="titre"> Harcèlement au travail par un collègue</h2>
          <small> Publié le vendredi 20 octobre 2023</small>
          <span className="bar"></span>
          <p>
            {" "}
            Le lieu de travail doit être un lieu où les travailleurs se sentent en sécurité et en paix. Ce n’est pas le cas pour
            vous, car un collègue n’arrête pas…
          </p>
          <div className="logo">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <Link to="https://www.justifit.fr/b/guides/droit-travail/harcelement-au-travail-par-un-collegue/" className="btn_c">
            En savoir plus
          </Link>
        </div>
        <div className="card_c">
          <img src={cong} className="image" />

          <h2 className="titre">L’indemnité compensatrice de congés payés</h2>
          <small>Publié le lundi 23 octobre 2023</small>
          <span className="bar"></span>
          <p>
            Les congés payés existent depuis 1936. D'une durée totale annuelle de 5 semaines, ils permettent aux salariés de
            bénéficier d'une période de repos et de vacances tout en étant rémunérés. Lors du départ du salarié…
          </p>
          <div className="logo">
            <i class="fa-solid fa-check"></i>
          </div>
          <Link to="https://www.justifit.fr/b/guides/droit-travail/indemnite-compensatrice-conges-payes/" className="btn_c">
            En savoir plus
          </Link>
        </div>
      </div>
      <div className="card_c-container">
        <div className="card_c">
          <img src={droit} className="image" />

          <h2 className="titre">Séquestration : définition, caractéristiques et sanctions</h2>
          <small> Publié le mardi 24 octobre 2023</small>
          <span className="bar"></span>
          <p>
            {" "}
            La séquestration est considérée comme un crime en droit français. Elle est passible de sanctions très lourdes et est
            jugée par la Cour d assises. Quelle est la définition juridique de…
          </p>
          <div className="logo">
            <i class="fa-solid fa-truck-fast"></i>
          </div>
          <Link to="https://www.justifit.fr/b/guides/droit-famille/divorce/separation-etapes-procedure/" className="btn_c">
            En savoir plus
          </Link>
        </div>
        <div className="card_c">
          <img src={routier} className="image" />
          <h2 className="titre">Les sanctions pour conduite sans permis</h2>
          <small> Publié le vendredi 24 novembre 2023</small>
          <span className="bar"></span>
          <p>
            Les sanctions pour conduite sur la voie publique sans permis sont prévues par le Code pénal. En cas de contrôle, les
            pénalités sont différentes selon que vous soyez titulaire d un…
          </p>
          <div className="logo">
            <i class="fa-solid fa-check"></i>
          </div>
          <Link to="https://www.justifit.fr/b/guides/droit-routier/accident-et-absence-dassurance" className="btn_c">
            En savoir plus
          </Link>
        </div>

        <div className="card_c">
          <img src={malade} className="image" />

          <h2 className="titre">Maladie professionnelle et indemnités : tout savoir</h2>
          <small> Publié le vendredi 1 décembre 2023</small>
          <span className="bar"></span>
          <p>
            Face à une maladie ou un accident lié à votre travail, il est naturel de se sentir préoccupé par la perte de revenus
            pendant votre rétablissement. Heureusement, des droits à…
          </p>
          <div className="logo">
            <i class="fa-solid fa-check"></i>
          </div>
          <Link
            to=" https://www.justifit.fr/b/guides/droit-travail/indemnites-maladie-professionnelle-tout-savoir/"
            className="btn_c"
          >
            En savoir plus
          </Link>
        </div>

        <div className="card_c">
          <img src={violence} className="image" />
          <h2 className="titre">Violences faites aux femmes : que faire en cas de femme battue ?</h2>
          <small> Publié le lundi 27 novembre 2023</small>
          <span className="bar"></span>
          <p>
            Vous êtes victime de violences physiques ou une femme de votre entourage est battue par son conjoint, et vous vous
            demandez que faire ? Rassurez-vous, il existe des solutions pour…
          </p>
          <div className="logo">
            <i class="fa-solid fa-check"></i>
          </div>
          <Link to="https://www.justifit.fr/b/guides/droit-penal/femme-battue-que-faire/" className="btn_c">
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jurdique;
