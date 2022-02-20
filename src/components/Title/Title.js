import React from "react";
import "./Title.css";

export default function Title({ setShowModal }) {
  return (
    <div>
      <h2 className="title">
        <button
          className="new-todo-button"
          onClick={() => setShowModal(true)}
        ></button>
      </h2>
    </div>
  );
}
