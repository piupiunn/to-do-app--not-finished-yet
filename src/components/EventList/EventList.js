import "./EventList.css";

export default function EventList({
  events,
  handleEvent,
  deleteEvent,
  checkedBox,
}) {
  return (
    <div className="event-card-box">
      {events.map((event) => (
        <div className="event-card">
          <h2 className="event-title">
            <input
              type="checkbox"
              className="c-box"
              disabled={false}
              onChange={checkedBox}
            />
            {event.title}
          </h2>
          <p className="event-detail">
            <em>{event.detail}</em>
          </p>
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
            x
          </button>
        </div>
      ))}
    </div>
  );
}
