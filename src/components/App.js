import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [showProp, setShowProp] = useState(false);

  return (
    <div className="main">
      <button onClick={() => {
        setShowProp(true);
      }}>Show Modal</button>
      <Modal showProp={showProp} setShowProp={setShowProp} />
    </div>
  )
}

export default App
