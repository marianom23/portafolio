import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = ({
  logo,
  title,
  description,
  githubLink,
  iframeLink,
  repositoryStatus
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPrivateRepoModalOpen, setPrivateRepoModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  };

  const openPrivateRepoModal = () => setPrivateRepoModalOpen(true);
  const closePrivateRepoModal = (e) => {
    e.stopPropagation();
    setPrivateRepoModalOpen(false);
  };

  return (
    <>
      <div className="project">
        <div className="project-container">
          {/* Sección de logos */}
          <div className="project-logo">
            {logo.map((logoUrl, index) => (
              <img key={index} src={logoUrl} alt={`Logo ${index + 1}`} />
            ))}
          </div>

          {/* Título y descripción */}
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>

          {/* Botones de acción */}
          <div className="project-actions">
            {/* Botón para abrir el modal con el iframe, se muestra solo si iframeLink no está vacío */}
            {iframeLink && (
              <button className="action-button" onClick={openModal}>
                <FontAwesomeIcon icon={faLink} />
                <span>Probar proyecto</span>
              </button>
            )}

            {/* 
              - Si el repositorio es público (o no es 'private'), muestra enlace a GitHub.
              - Si el repositorio es privado, muestra botón que abre el modal de confidencialidad.
            */}
            {repositoryStatus !== "private" && githubLink && (
              <a
                className="action-link"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
                <span>Ver repositorio</span>
              </a>
            )}
            {repositoryStatus === "private" && (
              <button className="action-button" onClick={openPrivateRepoModal}>
                <FontAwesomeIcon icon={faLink} />
                <span>Ver repositorio</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal para mostrar el iframe */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          {/* Botón de cierre fuera del contenido del iframe */}
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={iframeLink}
              title={`${title} Preview`}
              frameBorder="0"
              width="100%"
              height="100%"
              allow="camera; microphone"
            />
          </div>
        </div>
      )}

      {/* Modal para indicar repositorio privado (más pequeño) */}
      {isPrivateRepoModalOpen && (
        <div className="modal-overlay" onClick={closePrivateRepoModal}>
          {/* Botón de cierre también fuera del contenido */}
          <button className="close-button" onClick={closePrivateRepoModal}>
            &times;
          </button>

          <div
            className="small-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Repositorio privado</h2>
            <p>
              Por cuestiones de confidencialidad con la empresa Digital House,
              no se puede mostrar este repositorio.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
