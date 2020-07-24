import React, { useState } from "react";
import Popup from "reactjs-popup";
import Modal from "./components/Modal";

const App = () => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setModalToggle(true)}>Open Modal</button>

      <Popup onClose={() => setModalToggle(false)} modal open={modalToggle}>
        <Modal setModalToggle={setModalToggle} />
      </Popup>
    </div>
  );
};

export default App;
