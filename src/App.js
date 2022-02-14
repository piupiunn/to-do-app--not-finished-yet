import { useState } from "react";
import "./App.css";
import EventList from "./components/EventList/EventList";
import Modal from "./components/Modal/Modal";
import NewEventForm from "./components/NewEventForm/NewEventForm";
import Title from "./components/Title/Title";

function App() {
  /** */
  const [events, setEvents] = useState([]);

  const [showModal, setShowModal] = useState(true);

  /**Event ekleme */
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
  };

  /**Event silme */
  const deleteEvent = (id) => {
    setEvents((events) => {
      return events.filter((event) => {
        return id !== event.id;
      });
    });
  };

  /**Kategoriye göre görüntüleme */
  const handleEvent = (category) => {
    setEvents((events) => {
      return events.filter((event) => {
        return category === event.category;
      });
    });
  };

  const checkedBox = (e) => {
    e.target.disabled = true;
    e.target.parentElement.style.setProperty("text-decoration", "line-through");
  };

  const editEvent = () => {};

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Title setShowModal={setShowModal} />
      <EventList
        events={events}
        deleteEvent={deleteEvent}
        handleEvent={handleEvent}
        checkedBox={checkedBox}
      />
      {showModal && (
        <Modal closeModal={closeModal}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
