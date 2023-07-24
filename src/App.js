import About from "./About";
import "./App.scss";
import Cars from "./Cars";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Data from "./Data";
import Button from "./Button";
import { useReducer, useState } from "react";
import Contact from "./Contact";
import Modal from "./Modal";
import Order from "./Order";
function App() {
  const [cars, setCars] = useState(Data);
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState("");
  const [openRent, setOpenRent] = useState(false);
  const [order, setOrder] = useState("");
  const showRent = () => {
    setOpenRent(true);
  };
  const showModal = () => {
    setModal(true);
  };
  const addOrder = (id) => {
    const orderId = id;
    const orderItem = Data.filter((item) => item.id === orderId);
    setOrder(orderItem);
    console.log(orderItem);
  };
  const addModal = (id) => {
    const modalId = id;
    const modalItem = Data.filter((item) => item.id === modalId);
    setModalItem(modalItem);
    console.log(modalItem);
  };
  const filterCars = (category) => {
    if (category === "all") {
      setCars(Data);
      return;
    }
    const newCars = Data.filter((car) => car.category === category);
    setCars(newCars);
  };
  return (
    <div>
      <Navbar />
      {modal && (
        <Modal
          modalItem={modalItem}
          setModal={setModal}
          addOrder={addOrder}
          showRent={showRent}
        />
      )}
      {openRent && (
        <Order
          showRent={showRent}
          setOrder={setOrder}
          order={order}
          setOpenRent={setOpenRent}
          openRent={openRent}
          setModal={setModal}
        />
      )}
      <Hero />
      <About />
      <Button filterCars={filterCars} />
      <Cars
        cars={cars}
        addModal={addModal}
        showModal={showModal}
        order={order}
        addOrder={addOrder}
        showRent={showRent}
        modal={modal}
        setModal={setModal}
        openRent={openRent}
      />
      <Contact />
    </div>
  );
}

export default App;
