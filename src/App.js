import { useState } from "react";
import "./App.css";
import EventList from "./components/EventList/EventList";
import Modal from "./components/Modal/Modal";
import NewEventForm from "./components/NewEventForm/NewEventForm";
import Title from "./components/Title/Title";

function App() {
  const [events, setevents] = useState([]);

  const [showModal, setShowModal] = useState(true);

  const addEvent = (event) => {
    setevents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const deleteEvent = (id) => {
    setevents((events) => {
      return events.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Title />
      <EventList events={events} deleteEvent={deleteEvent} />
      <Modal closeModal={closeModal}>
        <NewEventForm addEvent={addEvent} />
      </Modal>
    </div>
  );
}

export default App;
