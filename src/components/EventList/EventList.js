import React, { useState } from "react";
import "./EventList.css";

export default function EventList({
  events,
  handleEvent,
  deleteEvent,
  checkedBox,
  editEvent,
}) {
  return (
    <div>
      {events.map((event) => (
        <div>
          <div className="event">
            <h2>
              <input
                type="checkbox"
                className="c-box"
                disabled={false}
                onChange={checkedBox}
              />
              {event.title}
            </h2>
            <p>{event.category}</p>
            <button onClick={() => handleEvent(event.category)}>
              Kategori
            </button>

            <button onClick={() => deleteEvent(event.id)}>Delete To-Do</button>

            <button onClick={() => editEvent(event.id)}>Edit To-Do</button>
          </div>
        </div>
      ))}
    </div>
  );
}
