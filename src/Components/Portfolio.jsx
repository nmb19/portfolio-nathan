/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Azure Fondamentals : Services Azure",
    description:
      "Composants architecturaux d'Azure : Explorez la structure fondamentale de la plateforme Azure et comprenez comment elle se compose pour répondre à vos besoins Calcul et mise en réseau : Découvrez comment Azure gère le calcul et la connectivité réseau pour offrir des performances optimales à vos applications.Plongez dans les différentes options de stockage offertes par Azure et apprenez à choisir la meilleure pour vos charges de travail",
    url: "https://www.youtube.com/watch?v=mJHubEdALHQ",
  },
  {
    title: "Mise en Place d'un Locatiare Microsoft 365",
    description:
      "Un Microsoft 365 inclut également un locataire Azure Active Directory (Azure AD), qui est une instance dédiée d'Azure AD pour les comptes d'utilisateur, les groupes et d'autres objets. Chaque locataire Azure AD est distinct, unique et distinct de tous les autres locataires Azure AD.",
    url: "https://www.youtube.com/watch?v=5tnacpbaWQ4&t=1385s",
  },
  {
    title: "Microsoft Office Days",
    description:
      "connaitre les astuces sur microsofsot offices.",
    url: "https://www.youtube.com/watch?v=mx5e2vr6UE8&t=7s",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
