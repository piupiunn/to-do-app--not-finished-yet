import React from "react";
import "./Modal.css";

export default function Modal({ children, closeModal }) {
  return (
    <div>
      <div>
        {children}
        <button onClick={closeModal}>Kapat</button>
      </div>
    </div>
  );
}
