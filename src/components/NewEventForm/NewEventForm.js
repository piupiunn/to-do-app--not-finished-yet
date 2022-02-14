import React, { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm({ addEvent, editEvent }) {
  const [eventTitle, setEventTitle] = useState("");

  const [category, setCategory] = useState("Kişisel");

  const resetForm = () => {
    setEventTitle("");
    setCategory(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: eventTitle,
      category: category,
      id: Math.floor(Math.random() * 100000),
    };

    addEvent(event);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To-Do:</span>
          <input
            className="new-form"
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          ></input>
          <span className="focus-form"></span>
        </label>

        <label>
          <span>Kategori:</span>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="category"
          >
            <option value="Kişisel">Kişisel</option>
            <option value="Aile">Aile</option>
            <option value="İş">İş</option>
            <option value="Spor">Spor</option>
            <option value="Kitap">Kitap</option>
            <option value="Dizi-Film">Dizi-Film</option>
            <option value="İyilik">İyilik</option>
          </select>
        </label>
        <button>To-Do'yu ekle</button>
      </form>
    </div>
  );
}
