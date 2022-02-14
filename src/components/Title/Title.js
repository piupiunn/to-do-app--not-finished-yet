import React from "react";
import "./Title.css";

export default function Title({ setShowModal }) {
  return (
    <div>
      <h2 className="title">
        Todo App <button onClick={() => setShowModal(true)}>Todo ekle</button>
      </h2>
    </div>
  );
}
