import React from "react";
import { Modal } from "react-bootstrap";
import "./ProjectModal.css";

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Modal show={!!project} onHide={onClose} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="pm_media_list">
          {project.media.map((item, i) => (
            <div key={i} className="pm_media_item">
              {item.title && <h5 className="pm_item_title">{item.title}</h5>}
              {item.type === "image" ? (
                <img src={item.src} alt={item.title || ""} />
              ) : (
                <div className="pm_video_wrapper">
                  <iframe
                    src={item.src}
                    title={item.title || ""}
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {item.description && (
                <p className="pm_item_description">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};
