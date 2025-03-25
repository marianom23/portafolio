import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = ({ logo, title, description, githubLink, iframeLink }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = (e) => {
    e.stopPropagation();
    setModalOpen(false);
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
            {/* Botón para abrir el modal, se muestra solo si iframeLink no está vacío */}
            {iframeLink && (
              <button className="action-button" onClick={openModal}>
                <FontAwesomeIcon icon={faLink} />
                <span>Probar proyecto</span>
              </button>
            )}

            {/* Enlace al repositorio de GitHub, se muestra solo si githubLink no está vacío */}
            {githubLink && (
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
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
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
    </>
  );
};

export default Project;
