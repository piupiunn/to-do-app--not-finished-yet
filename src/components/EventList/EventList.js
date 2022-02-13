import React from "react";
import "./EventList.css";

export default function EventList({ events, handleEvent, deleteEvent }) {
  return (
    <div>
      {events.map((event) => (
        <div>
          <h2>{event.title}</h2>
          <p>{event.category}</p>
          <button onClick={() => handleEvent(event.category)}>Kategori</button>

          <button onClick={() => deleteEvent(event.id)}>Delete To-Do</button>
        </div>
      ))}
    </div>
  );
}
