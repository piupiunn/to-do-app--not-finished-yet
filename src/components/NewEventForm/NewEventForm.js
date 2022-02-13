import React, { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm({ addEvent }) {
  const [eventTitle, setEventTitle] = useState("");

  const [category, setCategory] = useState("Kişisel");

  const resetForm = () => {
    setEventTitle("");
    setCategory("");
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
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          ></input>
        </label>

        <label>
          <span>Kategori:</span>
          <select onChange={(e) => setCategory(e.target.value)}>
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
