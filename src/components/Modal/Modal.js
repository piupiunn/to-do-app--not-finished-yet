import React from "react";
import "./Modal.css";

export default function Modal({ children, closeModal }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button className="modal-button" onClick={closeModal}>
          x
        </button>
      </div>
    </div>
  );
}
