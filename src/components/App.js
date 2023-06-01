import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [show, setShow] = useState(false);

  function onClose() {
    setShow(false);
  }

  return (
    <div className="main">
      <button onClick={() => {setShow(true)}}>Show Modal</button>
      <Modal showProp={show} setShowProp={onClose} />
    </div>
  )
}

export default App
