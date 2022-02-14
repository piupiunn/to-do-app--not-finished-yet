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
            <p></p>
            <button
              className="category-button"
              onClick={() => handleEvent(event.category)}
            >
              {event.category}
            </button>

            <button
              className="delete-button"
              onClick={() => deleteEvent(event.id)}
            >
              Delete
            </button>

            <button className="edit-button" onClick={() => editEvent(event)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
