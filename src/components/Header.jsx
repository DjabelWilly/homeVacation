import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  // Initialise l'état activeLink à null pour souligner le lien de la page active.
  const [activeLink, setActiveLink] = useState(null);

  // Fonction pour gérer le clic sur un lien, on passe en paramètre l'id du lien.
  const handleClick = (linkId) => {
    // Met à jour l'état activeLink avec l'id du lien cliqué.
    setActiveLink(linkId);
    console.log(linkId);
  };

  // Utilisation de useEffect pour réinitialiser l'état activeLink,
  // lorsque l'URL pointe vers "home" on désactive le soulignement de tous les liens.
  useEffect(() => {
    if (URL === "home") {
      setActiveLink(false);
    }
  }, []);

  return (
    <>
      <div className="header-wrapper">
        <div>
          <div>
            <ul className="logo-wrapper">
              <div className="logoAndBrand">
                <li>
                  <img src={logo} id="logo" alt="Logo - retour accueil" />
                </li>
                <li>
                  <Link
                    id="home"
                    onClick={() => {
                      handleClick("home");
                    }}
                    to={"/"}
                  >
                    <p className="brand-name">home vacation</p>
                  </Link>
                </li>
              </div>
              <div className="search-bar">
                <SearchBar />
              </div>
              <div></div>
            </ul>
          </div>
        </div>

        <ul className="header">
          <li>
            <Link
              id="camping"
              onClick={() => {
                handleClick("camping");
              }}
              style={{
                textDecoration:
                  activeLink === "camping" ? "underline 2px" : "none",
                 textUnderlineOffset: "8px", // Ajoute de l'espace entre le texte et le soulignement
              }}
              to="/camping"
            >
              Camping
            </Link>
          </li>
          <li>
            <Link
              id="campagne"
              onClick={() => {
                handleClick("campagne");
              }}
              style={{
                textDecoration:
                  activeLink === "campagne" ? "underline 2px" : "none",
                textUnderlineOffset: "8px"
              }}
              to="/campagne"
            >
              Campagne
            </Link>
          </li>
          <li>
            <Link
              id="montagne"
              onClick={() => {
                handleClick("montagne");
              }}
              style={{
                textDecoration:
                  activeLink === "montagne" ? "underline 2px" : "none",
                textUnderlineOffset: "8px"
              }}
              to="/montagne"
            >
              Montagne
            </Link>
          </li>
          <li>
            <Link
              id="mer"
              onClick={() => {
                handleClick("mer");
              }}
              style={{
                textDecoration: activeLink === "mer" ? "underline 2px" : "none",
                textUnderlineOffset: "8px"
              }}
              to="/mer"
            >
              Mer
            </Link>
          </li>
          <li>
            <Link
              id="nature"
              onClick={() => {
                handleClick("nature");
              }}
              style={{
                textDecoration:
                  activeLink === "nature" ? "underline 2px" : "none",
                textUnderlineOffset: "8px"
              }}
              to="/nature"
            >
              Nature
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
