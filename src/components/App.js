import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  // const [show, setShow] = useState(false);

  // function onClose() {
  //   setShow(false);
  // }

  // window.addEventListener("click", (event) => {
  //   if(event.target !== Modal){
  //     setShow(false);
  //   }
  // }) 

  // return (
  //   <div className="main">
  //     <button onClick={() => {setShow(true)}}>Show Modal</button>
  //     <Modal showProp={show} setShowProp={onClose} />
  //   </div>
  // )
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='modal'>
      <button id='open' onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        {/* Content for the modal */}
        <div className='modal'>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        </div>

      </Modal>
    </div>
  );
}

export default App
